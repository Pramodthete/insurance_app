import { createRouter, createWebHistory } from 'vue-router'
import RegisterForm from '@/components/EmployeeForm.vue'
import InsuranceAgentForm from '@/components/InsuranceAgentForm.vue'
import Login from '@/components/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RegisterForm
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registerEmployee',
      name: 'employee-form',
      component: RegisterForm
    },
    {
      path: '/registerInsuranceAgent',
      name: 'agent-form',
      component: InsuranceAgentForm
    }
  ]
})

export default router
