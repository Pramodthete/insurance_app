// vueform.config.(js|ts)

import en from '@vueform/vueform/locales/en'
import bootstrap from '@vueform/vueform/dist/bootstrap'
import { defineConfig } from '@vueform/vueform'

// You might place these anywhere else in your project
import '@vueform/vueform/dist/vueform.css'

export default defineConfig({
  theme: bootstrap,
  locales: { en },
  locale: 'en'
})
