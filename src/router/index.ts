import { createRouter, createWebHistory } from 'vue-router'
import RegisterForm from '@/components/EmployeeForm.vue'
import InsuranceAgentForm from '@/components/InsuranceAgentForm.vue'
import Login from '@/components/Login.vue'
import CustomerForm from '@/components/CustomerForm.vue'
import AllCustomers from '@/components/AllCustomers.vue'
import Schemes from '@/components/Schemes.vue'
import Header from '@/components/Header.vue'
import Employees from '@/components/Employees.vue'
import CustomerDetail from '../components/CustomerDetail.vue'
import Signup from "../components/Signup.vue"
import EmployeeForm from '@/components/EmployeeForm.vue'

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
        },

        {
          path: '/employees',
          name: 'employees',
          component: Employees
        },

        {
          path: '/customerDetails',
          name: 'customerDetails',
          component: CustomerDetail
        },

      ]
    },


    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      children:[
        {
          path: '/signup/customer',
          name: 'customer',
          component: CustomerForm
        },
        {
          path: '/signup/agent',
          name: 'agent',
          component: InsuranceAgentForm
        },
        {
          path: '/signup/employee',
          name: 'employee',
          component: EmployeeForm
        },
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
    }
  ]
})

export default router
