<template>
  <v-app>
    <CodelaunchAppHeader />
    <slot />
    <client-only>
      <v-snackbar
        v-model="snackbar.show"
        :timeout="snackbar.timeout">
        {{ snackbar.text }}
        <template v-slot:actions>
          <v-btn
            @click="router.push({ path: snackbar.link.to }), snackbar.show = false"
            v-if="snackbar.link"
            color="primary">
            View Details
          </v-btn>
          <v-btn
            @click="snackbar.show = false"
            v-else
            color="primary">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </client-only>
  </v-app>
</template>

<script setup>
import { ref, provide } from 'vue'
const snackbar = ref({})
const router = useRouter()

provide('snackbar', ({ text, link } = {}, timeout = 4000) => {
  snackbar.value = {
    show: true,
    timeout,
    text,
    link
  }
})
</script>