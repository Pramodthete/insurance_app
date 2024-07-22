import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/main.css'
import App from './App.vue'
import router from './router'
import Vueform from '@vueform/vueform'
import vueformConfig from '../vueform.config'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(createPinia())
app.use(Vueform, vueformConfig)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.use(router)

app.mount('#app')
