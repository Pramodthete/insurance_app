import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import RegisterForm from '../EmployeeForm.vue'

describe('RegisterForm', () => {
  it('renders properly', () => {
    const wrapper = mount(RegisterForm, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
