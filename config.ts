// For details on Nuxt3 configuration, see https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {

  publicRuntimeConfig: {

    // For details on graphql configuration, see https://codelaunch.dev/configuration#graphql
    graphql: {
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

    // For details on auth configuration, see https://codelaunch.dev/configuration#auth
    auth: {
      domain:       '', // Auth0 application domain (Dashboard > Applications > YOUR_SPA_APPLICATION)
      clientId:     '', // Auth0 application client ID (Dashboard > Applications > YOUR_SPA_APPLICATION)
      audience:     '', // Auth0 API audience (Dashboard > APIs > YOUR_CUSTOM_API)
      apiClientId:  '', // Auth0 Management API client ID (Dashboard > APIs > "Auth0 Management API" > Test)
      apiAudience:  ''  // Auth0 Management API audience (Dashboard > APIs > "Auth0 Management API" > Test)
    }

  }

}
