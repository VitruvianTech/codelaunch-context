ARG VERSION
FROM vitruviantech/codelaunch:${VERSION:-latest}

WORKDIR /srv/codelaunch

ARG ENV
ARG GQL_HOST
ARG API_HOST
ARG APPS
ARG APP_FILE
ARG SKIP_APP_FILE
ARG ABORT_ON

COPY .npmrc* .npmrc
COPY context* context
COPY apps.json* apps.json
COPY config.ts* config.ts
COPY tsconfig.json* tsextends.json
COPY jobs.json jobs.json
COPY codegen.yml* codegen.yml
COPY package.json package.json
RUN [ ! -f "${APP_FILE:-apps.json}" ] && echo "[]" > ${APP_FILE:-apps.json}; \
    chown -R node:node context ${APP_FILE:-apps.json} config.ts tsextends.json jobs.json codegen.yml package.json

USER node
RUN if [ "$ENV" != 'development' ]; then \
      SKIP_APP_FILE=${SKIP_APP_FILE} ABORT_ON=$ABORT_ON VERBOSE=1 codelaunch init ${APP_FILE:-apps.json} $APPS && \
      [ "$ENV" == 'testing' ] && codelaunch stories build; \
      GQL_HOST=${GQL_HOST} API_HOST=${API_HOST} ENV=${ENV:-production} codelaunch build && \
      rm -rf node_modules && \
      mv ~/node_modules node_modules && \
      rm -f .npmrc; \
    fi

RUN rm -f ${APP_FILE:-apps.json}