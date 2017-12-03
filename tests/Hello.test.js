import React from 'react'
import { shallow } from 'enzyme'

import Hello from '../src'

const wrapper = shallow(<Hello />)

describe('src/index', () => {
  it('should return a string', () => {
    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find('.title').length).toBe(1)
  })
})
