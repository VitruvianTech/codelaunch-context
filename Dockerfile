ARG VERSION
ARG ENV
ARG APPS
ARG APP_FILE
ARG ABORT_ON

FROM vitruviantech/codelaunch:${VERSION:-latest}

WORKDIR /srv/codelaunch
COPY context* context
COPY .npmrc* .npmrc
COPY apps.json* apps.json
COPY package.json package.json
RUN touch ${APP_FILE:-apps.json}
RUN mkdir -p context
RUN chown -R node:node context ${APP_FILE:-apps.json} package.json

USER node
RUN if [ "$ENV" != 'development' ]; then \
      ABORT_ON=$ABORT_ON VERBOSE=1 codelaunch init ${APP_FILE:-apps.json} $APPS && \
      codelaunch build && \
      [ "$ENV" == 'testing' ] && npx build-storybook; \
      rm -rf node_modules && \
      mv ~/node_modules node_modules && \
      rm -f .npmrc; \
    fi

RUN rm -f ${APP_FILE:-apps.json}

CMD [ "codelaunch", "start" ]
