// For details on Nuxt3 configuration, see https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {

  publicRuntimeConfig: {

    env: process.env.ENV,

    // For details on api configuration, see https://codelaunch.dev/configuration#api
    api: {
      host: undefined
    },

    // For details on graphql configuration, see https://codelaunch.dev/configuration#graphql
    gql: {
      host: undefined,
      idbName: `${process.env.CONTEXT_NAME}-v1`,
      idbNameTesting: `${process.env.CONTEXT_NAME}-v1-TESTING`,
      idbMaxAge: 14,
      idbMaxAgeTesting: 7,
      exchanges: {
        routerExchange: {
          operations: [{
            name: /^RickAndMorty.*/,
            url: 'https://rickandmortyapi.com/graphql'
          }]
        }
      }
    },

    // For details on auth configuration, see https://codelaunch.dev/configuration#auth
    auth: ({
      development: {
        domain: 'dev-inw25gf0.auth0.com',
        clientId: 'cJMGA9Wr4fHz1C2o5U88ceKXnhrpryd8',
        audience: 'https://codelaunch.app/api/v1/',
        apiClientId: 'hlnzT7rHtHhLSAN4i6Ws4SsY58DeLA1Y',
        apiAudience: 'https://dev-inw25gf0.auth0.com/api/v2/',
      },
      testing: {
        domain: 'dev-inw25gf0.auth0.com',
        clientId: 'cJMGA9Wr4fHz1C2o5U88ceKXnhrpryd8',
        audience: 'https://codelaunch.app/api/v1/',
        apiClientId: 'hlnzT7rHtHhLSAN4i6Ws4SsY58DeLA1Y',
        apiAudience: 'https://dev-inw25gf0.auth0.com/api/v2/',
      }
    })[process.env.ENV] || {
      // Default auth configuration (i.e., production config)
      domain:       '',
      clientId:     '',
      audience:     '',
      apiClientId:  '',
      apiAudience:  '',
    }

  }

}
