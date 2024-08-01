import { createRouter, createWebHistory } from 'vue-router'
import InsuranceAgentForm from '@/components/InsuranceAgentForm.vue'
import Login from '@/components/Login.vue'
import CustomerForm from '@/components/CustomerForm.vue'
import AllCustomers from '@/components/AllCustomers.vue'
import Schemes from '@/components/Schemes.vue'
import Header from '@/components/Header.vue'
import AdminDashboard from '@/components/AdminDashboard.vue'
import Employees from '@/components/Employees.vue'
import CustomerDetail from '../components/CustomerDetail.vue'
import Signup from '../components/Signup.vue'
import EmployeeForm from '@/components/EmployeeForm.vue'
import InsurancePolicies from '@/components/InsurancePolicies.vue'
import AdminForm from '@/components/AdminForm.vue'
import AllAgents from '@/components/AllAgents.vue'
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
              component: AllAgents
            },
            {
              path: 'employees',
              name: 'admin-employees',
              component: Employees
            },
            {
              path: 'policies',
              name: 'admin-policies',
              component: InsurancePolicies
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
      path: '/signup',
      name: 'signup',
      component: Signup,
      children: [
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
        }
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/admin/register',
      name: 'register-admin',
      component: AdminForm
    }
  ]
})

export default router
