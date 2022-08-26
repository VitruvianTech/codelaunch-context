// For details on Nuxt3 configuration, see https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {

  css: [
    '@/assets/global.scss',
    "vuetify/lib/styles/main.sass"
  ],

  publicRuntimeConfig: {

    env: process.env.ENV,

    // For details on API configuration, see https://codelaunch.dev/config#api
    api: {
      host: process.env.API_HOST || ''
    },

    // For details on GraphQL configuration, see https://codelaunch.dev/config#gql
    gql: {
      ttl: 60 * 1000,
      idbName: `${process.env.CONTEXT_NAME}-v1`,
      idbMaxAge: 14,
      generateSchemaOnDBUpdate: false,
      exchanges: {
        routerExchange: {
          operations: [{
            name: '^RickAndMorty.*',
            url: 'https://rickandmortyapi.com/graphql'
          }]
        }
      }
    },

    // For details on Auth0 configuration, see https://codelaunch.dev/config#auth0
    auth0: {
      // Default configuration (i.e., production)
      domain:           '',
      clientId:         '',
      audience:         '',
      apiClientId:      '',
      apiAudience:      '',
      syncHandler:      'apps/@codelaunch/app/users/update',
      ...({
        development: {
          domain:       '',
          clientId:     '',
          audience:     '',
          apiClientId:  '',
          apiAudience:  '',
        },
        testing: {
          domain:       '',
          clientId:     '',
          audience:     '',
          apiClientId:  '',
          apiAudience:  '',
        }
      })[process.env.ENV] || {}
    }

  },

  io: {
    server: { teardown: false }
  }

}
