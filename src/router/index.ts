import { createRouter, createWebHistory } from 'vue-router'
import RegisterForm from '@/components/EmployeeForm.vue'
import InsuranceAgentForm from '@/components/InsuranceAgentForm.vue'
import Login from '@/components/Login.vue'
import CustomerForm from '@/components/CustomerForm.vue'
import AllCustomers from '@/components/AllCustomers.vue'
import Schemes from '@/components/Schemes.vue'
import Header from '@/components/Header.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'header',
      component: Header,
      children: [
        {
          path: '/showCustomers',
          name: 'showCustomers',
          component: AllCustomers
        },
        {
          path: '/',
          name: 'schemes',
          component: Schemes
        }
      ]
    },
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
    },

    {
      path: '/customer',
      name: 'customer',
      component: CustomerForm
    }
  ]
})

export default router
