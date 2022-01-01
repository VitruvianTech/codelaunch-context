ARG VERSION
ARG ENV
ARG APPS
ARG APP_FILE
ARG SKIP_APP_FILE
ARG ABORT_ON

FROM vitruviantech/codelaunch:${VERSION:-latest}

WORKDIR /srv/codelaunch
COPY .npmrc* .npmrc
COPY context* context
COPY apps.json* apps.json
COPY config.ts* config.ts
COPY tsconfig.json* types.json
COPY package.json package.json
RUN mkdir -p context; \
    touch ${APP_FILE:-apps.json}; \
    chown -R node:node context ${APP_FILE:-apps.json} config.ts types.json package.json

USER node
RUN if [ "$ENV" != 'development' ]; then \
      SKIP_APP_FILE=${SKIP_APP_FILE} ABORT_ON=$ABORT_ON VERBOSE=1 codelaunch init ${APP_FILE:-apps.json} $APPS && \
      [ "$ENV" == 'testing' ] && codelaunch stories build; \
      codelaunch build && \
      rm -rf node_modules && \
      mv ~/node_modules node_modules && \
      rm -f .npmrc; \
    fi

RUN rm -f ${APP_FILE:-apps.json}