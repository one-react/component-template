import { shallow } from 'enzyme'

import { Hello } from '../src/Hello'

const wrapper = shallow(<Hello />)
const wrapper = shallow(<Hello content="world" />)

describe('src/index', () => {
  it('should return a string', () => {
    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find('.title').length).toBe(1)
    expect(wrapper.find('div').contains('world'))
  })
})
