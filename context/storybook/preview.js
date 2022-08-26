import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'
import * as directives from 'vuetify/lib/directives'
import * as components from 'vuetify/lib/components'

import '@/assets/global.scss'
import 'vuetify/lib/styles/main.sass'


export default async (app, context) => {
  app.use(createVuetify({
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
}
