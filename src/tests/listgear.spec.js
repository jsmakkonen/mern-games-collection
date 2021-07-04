import React from 'react'
import ListGear from '../components/listgear.component'
import {BrowserRouter as Router} from 'react-router-dom'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()})

const setUp = (props = {}) => {
  const wrapper = mount(
    <Router>
      <ListGear {...props} />
    </Router>
  )
  return wrapper
}

describe('List gear', () => {
  let wrapper

  beforeEach(() => {
    const props = {
      id: 0,
      title: 'foo',
      cpu: 'foobar',
      gpu: 'baz',
      memory: 'test',
      storage: 'foobarbaz',
      additional: 'test test',
    }
    wrapper = setUp(props)
  })
  it('renders', () => {
    console.log(wrapper.debug())
    expect(wrapper).not.toBeNull()
  })
  it('show h3 text', () => {
    expect(wrapper.find('h3').text()).toEqual('Gaming gear:')
  })
  it('show table', () => {
    const table = wrapper.find('table')
    expect(table.length).toBe(1)
  })
  it('show all th elements', () => {
    const thead = wrapper.find('th')
    expect(thead.length).toBe(8)
  })
  it('show tbody', () => {
    const tbody = wrapper.find('tbody')
    expect(tbody.length).toBe(1)
  })
  it('shows one button at first', () => {
    const button = wrapper.find('button')
    expect(button.length).toBe(1)
  })
})
