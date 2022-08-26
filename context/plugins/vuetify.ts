// @ts-ignore
import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as directives from 'vuetify/directives'
import * as components from 'vuetify/components'


export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(createVuetify({
    directives,
    components,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    }
  }))
})