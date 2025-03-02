import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // Add your custom Vuetify configuration here if needed
  })

  // Use Vuetify with the Nuxt app
  nuxtApp.vueApp.use(vuetify)
})
