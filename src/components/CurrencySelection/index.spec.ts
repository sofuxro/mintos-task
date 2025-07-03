import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

import CurrencySelection from './index.vue'

describe('CurrencySelection', () => {
  let wrapper: ReturnType<typeof mount>

  beforeEach(async () => {
    wrapper = await mount(CurrencySelection, {
      props: {
        currencies: [
          { code: 'USD', name: 'US Dollar' },
          { code: 'EUR', name: 'Euro' },
        ]
      }
    })
  })

  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('initially no currency selected', () => {
    expect(wrapper.findAll('[data-testid="selected-currencies"] > *').length).toBe(0)
  })

  it('select currency', async () => {
    // Clicking the first available currency (USD)
    await wrapper.findAll('[data-testid="available-currencies"] > *').at(0).trigger('click')

    const allSelected = wrapper.findAll('[data-testid="selected-currencies"] > *')
    expect(allSelected.length).toBe(1)
    expect(allSelected.at(0).text()).toContain('USD')
  })

  it('toggle selected currency', async () => {
    const allAvailable = wrapper.findAll('[data-testid="available-currencies"] > *')

    // Clicking the first available currency (USD)
    await allAvailable.at(0).trigger('click')
    expect(wrapper.findAll('[data-testid="selected-currencies"] > *').length).toBe(1)

    // Now toggle it off
    await allAvailable.at(0).trigger('click')
    expect(wrapper.findAll('[data-testid="selected-currencies"] > *').length).toBe(0)
  })

  it('deselect by clicking the X', async () => {
    const allAvailable = wrapper.findAll('[data-testid="available-currencies"] > *')

    // Clicking the first available currency (USD)
    await allAvailable.at(0).trigger('click')

    const allSelected = wrapper.findAll('[data-testid="selected-currencies"] > *')
    expect(allSelected.length).toBe(1)

    // Click the remove button (X) on the selected currency
    await allSelected.at(0).find('button').trigger('click')

    expect(wrapper.findAll('[data-testid="selected-currencies"] > *').length).toBe(0)
  })
})
