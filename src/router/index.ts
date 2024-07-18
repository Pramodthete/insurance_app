import { createRouter, createWebHistory } from 'vue-router'
import RegisterForm from '@/components/EmployeeForm.vue'

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
    }
  ]
})

export default router
