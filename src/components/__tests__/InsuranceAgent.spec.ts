import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InsuranceAgentForm from '../InsuranceAgentForm.vue'

describe('InsuranceAgent.vue', () => {
  it('renders properly with the provided msg prop', () => {
    const wrapper = mount(InsuranceAgentForm, {
      props: { msgAgent: 'Insurance Agent Registration' }
    })
    expect(wrapper.text()).toContain('Insurance Agent Registration')
  })

  it('emits submit event when form is submitted', async () => {
    const wrapper = mount(InsuranceAgentForm)

    await wrapper.find('vueform').trigger('submit.prevent')
    expect(wrapper.emitted()).toHaveProperty('submit')
  })
})
