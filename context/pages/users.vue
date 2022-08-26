<template>
  <v-main>
    <section>
      <h1>Users</h1>
      <v-divider class="mb-4" />
      <CodelaunchAppButton class="mb-3" primary size="small" @click="createUser" label="+ Create" v-if="$auth0.can('create:users')" autofocus />
      <Suspense v-if="$auth0.is('member')">
        <template #default>
          <div>
            <span v-if="error">
              <Html>
                <Head>
                  <Title>Users</Title>
                </Head>
              </Html>
              Error: {{error}}
            </span>
            <ul v-else-if="data && data.allUsersList">
              <Html>
                <Head>
                  <Title>{{data.allUsersList.reduce((title, user) => title || (user.sub === $auth0.id.value && $auth0.user.value.name ? `${$auth0.user.value.name} (${user.sub})` : ''), '') || 'Users'}}</Title>
                </Head>
              </Html>
              <li v-for="user in data.allUsersList"  :key="user.id"><span>{{ user.sub }}</span> <span class="tip" v-if="user.sub === $auth0.id.value">You</span></li>
            </ul>
          </div>
        </template>
        <template #fallback>
          <div>
            <span class="tip text-yellow-700 bg-yellow-100">
              <i class="text-xs pi pi-sync" /> Syncing...
            </span>
          </div>
        </template>
      </Suspense>
      <p v-else>
        <Html>
          <Head>
            <Title>Users</Title>
          </Head>
        </Html>
        You must be logged in to view user list.
      </p>
    </section>
  </v-main>
</template>

<script setup>
import { useAllUsersQuery, useCreateUserMutation } from 'gql'

const { data, error, executeQuery: allUsersQuery } = useNuxtApp().ssrContext ? await useAllUsersQuery() : useAllUsersQuery()
const { executeMutation: createUserMutation } = useCreateUserMutation()

const createUser = async () => {
  const sub = window.prompt('Enter user subscriber ID')

  if(sub) {
    const { data, error } = await createUserMutation({ user: { sub } })
    allUsersQuery()
  }
}

definePageMeta({
  layout: 'column'
})
</script>
