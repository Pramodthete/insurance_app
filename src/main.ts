import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VFacebookLogin from 'vue-facebook-login-component-next';
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
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App);

app.use(createPinia());
app.use(Vueform, vueformConfig);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark',
    },
  },
});
app.use(vue3GoogleLogin, {
  clientId: '1074755295681-700r0r1t5rc5k50l99ld5cqucv5l6ib6.apps.googleusercontent.com'
})

app.use(router);

app.component('VFacebookLogin', VFacebookLogin);


app.mount('#app');
