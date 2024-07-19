import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EmployeeForm from '../EmployeeForm.vue'

describe('EmployeeForm.vue', () => {
  it('renders properly with the provided msg prop', () => {
    const wrapper = mount(EmployeeForm, { props: { msg: 'Employee Registration' } })
    expect(wrapper.text()).toContain('Employee Registration')
  })
})
