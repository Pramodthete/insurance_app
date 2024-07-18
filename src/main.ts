import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/main.css'
import App from './App.vue'
import router from './router'
import Vueform from '@vueform/vueform'
import vueformConfig from '../vueform.config'

const app = createApp(App)
app.use(Vueform, vueformConfig)
app.use(createPinia())
app.use(router)

app.mount('#app')
