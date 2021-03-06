// For details on Nuxt3 configuration, see https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {

  css: [],

  publicRuntimeConfig: {

    env: process.env.ENV,

    // For details on API configuration, see https://codelaunch.dev/config#api
    api: {
      host: process.env.API_HOST || ''
    },

    // For details on GraphQL configuration, see https://codelaunch.dev/config#gql
    gql: {
      idbName: `${process.env.CONTEXT_NAME}-v1`,
      idbMaxAge: 14,
      generateSchemaOnDBUpdate: false,
      exchanges: {
        routerExchange: {
          operations: [
            // Example adding an additional GraphQL source, by GQL document object name regex:
            // { name: /^RickAndMorty.*/, url: 'https://rickandmortyapi.com/graphql' }
          ]
        }
      }
    },

    // For details on Auth0 configuration, see https://codelaunch.dev/config#auth0
    auth0: {
      // Default configuration (i.e., production)
      domain:           '', // Auth0 application domain (Dashboard > Applications > YOUR_SPA_APPLICATION)
      clientId:         '', // Auth0 application client ID (Dashboard > Applications > YOUR_SPA_APPLICATION)
      audience:         '', // Auth0 API audience (Dashboard > APIs > YOUR_CUSTOM_API)
      apiClientId:      '', // Auth0 Management API client ID (Dashboard > APIs > "Auth0 Management API" > Test)
      apiAudience:      '', // Auth0 Management API audience (Dashboard > APIs > "Auth0 Management API" > Test)
      syncHandler:      '', // Local API route to invoke upon every Auth0 permissions check/update (without `/api/` prefix)
      ...({
        development: {
          domain:       '',
          clientId:     '',
          audience:     '',
          apiClientId:  '',
          apiAudience:  ''
        },
        testing: {
          domain:       '',
          clientId:     '',
          audience:     '',
          apiClientId:  '',
          apiAudience:  ''
        }
      })[process.env.ENV] || {}
    }

  },

  io: {
    server: { teardown: false }
  }

}
