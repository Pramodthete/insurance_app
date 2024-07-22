import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/main.css'
import App from './App.vue'
import router from './router'
import Vueform from '@vueform/vueform'
import vueformConfig from '../vueform.config'
<<<<<<< HEAD
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

=======
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
>>>>>>> f8d0cff425b714d560933d30ab067efd443ccb70

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
