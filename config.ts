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
      domain:   '', // Auth0 domain
      clientId: '', // Auth0 client ID
      audience: ''  // Auth0 audience (Dashboard > APIs)
    }

  }

}
