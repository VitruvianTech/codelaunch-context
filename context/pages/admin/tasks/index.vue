<template>
  <v-main>
    <Html>
      <Head>
        <Title>Tasks</Title>
      </Head>
    </Html>
    <article>
      <section>
        <h1>Tasks</h1>
        <v-divider class="mb-4" />
        <div v-if="$auth0.is('member')">
          <div v-if="$auth0.can('create:users')" class="mb-6 text-right">
            <v-btn
              @click="createDialog = true"
              :icon="mdiPlus"
              color="primary"
              autofocus />
            <client-only>
              <v-dialog
                fullscreen
                transition="slide-x-transition"
                v-model="createDialog">
                <v-card>
                  <v-toolbar color="primary" dark>
                    <v-toolbar-title>Create Task</v-toolbar-title>
                    <v-btn @click="createDialog = false" :icon="mdiClose" />
                  </v-toolbar>
                  <v-card-text>
                    <CodelaunchAppTasksDetail
                      @completed="createDialog = false"
                      editable />
                  </v-card-text>
                </v-card>
              </v-dialog>
            </client-only>
          </div>
          <Suspense v-if="$auth0.can('read:users')">
            <template #default>
              <div class="mt-4">
                <CodelaunchAppTasksList
                  :editable="$auth0.can('create:users')"
                  :deletable="$auth0.can('create:users')"
                />
              </div>
            </template>
            <template #fallback>
              <div>
                <span class="tip text-yellow-700 bg-yellow-100"><i class="text-xs pi pi-sync pi-spin" /> Syncing...</span>
              </div>
            </template>
          </Suspense>
          <div v-else>
            <span class="tip text-yellow-700 bg-yellow-100">You do not have permissions to view this list.</span>
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
import { h, ref, inject } from 'vue'
import { useListTasksQuery } from 'gql'

import {
  mdiClose,
  mdiPlus
} from '@mdi/js'

const createDialog = ref(false)

if(useNuxtApp().ssrContext) {
  await useListTasksQuery()
}

definePageMeta({
  layout: 'column'
})
</script>