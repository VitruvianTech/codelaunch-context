// For details on Nuxt3 configuration, see https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {

  publicRuntimeConfig: {

    // For details on graphql configuration, see https://codelaunch.dev/configuration#graphql
    graphql: {
      url: process.env.GQL_URL,
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
      domain:       process.env.AUTH0_DOMAIN || '',         // Auth0 domain
      audience:     process.env.AUTH0_AUDIENCE || '',       // Auth0 audience (Dashboard > APIs)
      clientId:     process.env.AUTH0_CLIENT_ID || '',      // Auth0 client ID
      apiAudience:  process.env.AUTH0_API_AUDIENCE || '',   // Auth0 Management API client ID (Dashboard > APIs > Auth0 Management API > Test)
      apiClientId:  process.env.AUTH0_API_CLIENT_ID || ''   // Auth0 Management API client ID (Dashboard > APIs > Auth0 Management API > Test)
    }

  }

}
