import { createRouter, createWebHistory } from 'vue-router'
import RegisterForm from '@/components/EmployeeForm.vue'
import Login from '@/components/Login.vue'
import CustomerForm from '@/components/CustomerForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RegisterForm
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterForm
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/customer',
      name: 'customer',
      component: CustomerForm
    }
  ]
})

export default router
