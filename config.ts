// For details on Nuxt3 configuration, see https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {

  publicRuntimeConfig: {

    env: process.env.ENV,

    // For details on API configuration, see https://codelaunch.dev/config#api
    api: {
      host: process.env.API_HOST || ''
    },

    // For details on GraphQL configuration, see https://codelaunch.dev/config#gql
    gql: {
      host: process.env.GQL_HOST || '',
      idbName: `${process.env.CONTEXT_NAME}-v1`,
      idbNameTesting: `${process.env.CONTEXT_NAME}-v1-TESTING`,
      idbMaxAge: 14,
      idbMaxAgeTesting: 7,
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
