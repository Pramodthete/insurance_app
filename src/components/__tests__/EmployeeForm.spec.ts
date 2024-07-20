import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EmployeeForm from '../EmployeeForm.vue'

describe('EmployeeForm.vue', () => {
  it('renders properly with the provided msg prop', () => {
    const wrapper = mount(EmployeeForm, { props: { msg: 'Employee Registration' } })
    expect(wrapper.text()).toContain('Employee Registration')
  })

  it('emits submit event when form is submitted', async () => {
    const wrapper = mount(EmployeeForm)

    await wrapper.find('vueform').trigger('submit.prevent')
    expect(wrapper.emitted()).toHaveProperty('submit')
  })

  // it('renders input fields for name and email', () => {
  //   const wrapper = mount(EmployeeForm)

  //   expect(wrapper.find('label[for="name"]').exists()).toBe(true)
  //   expect(wrapper.find('label[for="email"]').exists()).toBe(true)

  //   expect(wrapper.find('input[name="name"]').exists()).toBe(true)
  //   expect(wrapper.find('input[name="email"]').exists()).toBe(true)
  // })

  // it('accepts input in name and email fields', async () => {
  //   const wrapper = mount(EmployeeForm)

  //   const nameInput = wrapper.find('input[name="name"]')
  //   const emailInput = wrapper.find('input[name="email"]')

  //   await nameInput.setValue('John Doe')
  //   await emailInput.setValue('john.doe@example.com')

  //   expect(nameInput.element.value).toBe('John Doe')
  //   expect(emailInput.element.value).toBe('john.doe@example.com')
  // })

  // it('renders with default values if any', () => {
  //   const defaultProps = {
  //     msg: 'Employee Registration',
  //     defaultName: 'Default Name',
  //     defaultEmail: 'default@example.com'
  //   }
  //   const wrapper = mount(EmployeeForm, { props: defaultProps })

  //   expect(wrapper.find('input[name="name"]').element.value).toBe('Default Name')
  //   expect(wrapper.find('input[name="email"]').element.value).toBe('default@example.com')
  // })
})
