import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CustomerForm from '../CustomerForm.vue'

describe('CustomerForm.vue', () => {
  it('renders properly with the provided msg prop', () => {
    const wrapper = mount(CustomerForm, {props: { msgCustomer: 'Customer Registration'}})
    expect(wrapper.text()).toContain('Customer Registration')
  })
})