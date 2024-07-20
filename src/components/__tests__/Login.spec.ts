import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Login from '../Login.vue'

describe('Login.vue', () => {
  it('renders properly with the provided msg prop', () => {
    const wrapper = mount(Login, {
      props: { msgLogin: 'Login' }
    })
    expect(wrapper.text()).toContain('Login')
  })

  it('emits submit event when form is submitted', async () => {
    const wrapper = mount(Login)

    await wrapper.find('vueform').trigger('submit.prevent')
    expect(wrapper.emitted()).toHaveProperty('submit')
  })
})
