# Platform Build
FROM node:14.17-alpine

ENV HOST 0.0.0.0
EXPOSE 80

ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache build-base python3 python3-dev postgresql-dev git openssh
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN pip install alembic psycopg2-binary

WORKDIR /srv/codelaunch
COPY core apps/codelaunch
COPY . .
RUN rm -rf core
RUN chown -R node:node .

# If permission issues between host and container, see:
# https://github.com/mhart/alpine-node/issues/48#issuecomment-430902787
USER node
RUN npm config set package-lock false
RUN npm config set prefix ~/.local
RUN NODE_ENV=production npm i ---prefer-offline --non-interactive --no-fund --no-audit --production
RUN mv node_modules ~/node_modules
RUN npm i --prefer-offline --non-interactive --no-fund
RUN npm i -g --prefer-offline --non-interactive --no-fund --no-audit .
RUN mv package.json platform.json

USER root
RUN ln -s /home/node/.local/bin/codelaunch /usr/local/bin/codelaunch
COPY ./bin/entrypoint/codelaunch.sh /bin/docker-entrypoint.sh
RUN rm -rf ./bin/entrypoint
ENTRYPOINT ["sh", "/bin/docker-entrypoint.sh"]


# End-User Build
ARG ENV
ARG APPS
ARG APP_FILE
ARG ABORT_ON

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
      rm -rf node_modules && \
      mv ~/node_modules node_modules && \
      rm -f .npmrc; \
    fi

RUN rm -f ${APP_FILE:-apps.json}

CMD [ "codelaunch", "start" ]
