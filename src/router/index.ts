import { createRouter, createWebHistory } from 'vue-router'
import RegisterForm from '@/components/EmployeeForm.vue'
import InsuranceAgentForm from '@/components/InsuranceAgentForm.vue'
import Login from '@/components/Login.vue'
import CustomerForm from '@/components/CustomerForm.vue'
import AllCustomers from '@/components/AllCustomers.vue'
import Schemes from '@/components/Schemes.vue'
import Header from '@/components/Header.vue'
import AdminDashboard from '@/components/AdminDashboard.vue'
import Employees from '@/components/Employees.vue'
import CustomerDetail from '../components/CustomerDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Header,
      children: [
        {
          path: '',
          name: 'home',
          component: Schemes
        },
        {
          path: 'customers',
          name: 'all-customers',
          component: AllCustomers
        },
        {
          path: 'admin',
          component: AdminDashboard,
          children: [
            {
              path: 'customers',
              name: 'admin-customers',
              component: AllCustomers
            },
            {
              path: 'agents',
              name: 'admin-agents',
              component: AllCustomers
            },
            {
              path: 'employees',
              name: 'admin-employees',
              component: AllCustomers
            }
          ]
        },
        {
          path: 'employees',
          name: 'employees',
          component: Employees
        },
        {
          path: 'customerDetails',
          name: 'customerDetails',
          component: CustomerDetail
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/employee',
      name: 'employee-form',
      component: RegisterForm
    },
    {
      path: '/insuranceAgent',
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
