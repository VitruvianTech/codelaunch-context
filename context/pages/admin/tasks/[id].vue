<template>
  <v-main>
    <Html>
      <Head>
        <Title>{{data ? `${data.name} - Task` : 'Not Found - Task'}}</Title>
      </Head>
    </Html>
    <article>
      <section>
        <h1>Task</h1>
        <v-divider class="mb-4" />
        <div v-if="$auth0.is('member')">
          <Suspense v-if="$auth0.can('read:users')">
            <template #default>
              <CodelaunchAppTasksDetail
                :id="id"
                :editable="$auth0.can('create:users')"
                :deletable="$auth0.can('create:users')"
                @deleted="onDeleted"
              />
            </template>
            <template #fallback>
              <div>
                <span class="tip text-yellow-700 bg-yellow-100"><i class="text-xs pi pi-sync pi-spin" /> Syncing...</span>
              </div>
            </template>
          </Suspense>
          <div v-else>
            <span class="tip text-yellow-700 bg-yellow-100">You do not have permissions to view this object.</span>
          </div>
        </div>
        <div v-else>
          <span class="tip text-yellow-700 bg-yellow-100">You must be logged in to view this page.</span>
        </div>
      </section>
    </article>
  </v-main>
</template>

<script setup>
import { useDetailTaskQuery } from 'gql'

const id = useRoute().params.id
const onDeleted = () => useRouter().push({ name: 'admin-tasks' })
const { data: { value: { taskById: data } } } = await useDetailTaskQuery({ variables: { id } })

if(!data) {
  // useRouter().replace({ name: 'admin-tasks' })
}

definePageMeta({
  layout: 'column'
})
</script>