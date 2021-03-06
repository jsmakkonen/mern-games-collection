import React from 'react'
import ListGames from '../components/listgames.component'
import {BrowserRouter as Router} from 'react-router-dom'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()})

const setUp = (props = {}) => {
  const wrapper = mount(
    <Router>
      <ListGames {...props} />
    </Router>
  )
  return wrapper
}

describe('List games', () => {
  let wrapper

  beforeEach(() => {
    const props = {
      id: 0,
      title: 'foo',
      developer: 'foobar',
      platform: 'baz',
      description: 'test',
      release: 2000,
      reviewscore: 50,
    }
    wrapper = setUp(props)
  })
  it('renders', () => {
    console.log(wrapper.debug())
    expect(wrapper).not.toBeNull()
  })
  it('show h3 text', () => {
    expect(wrapper.find('h3').text()).toEqual('Game collection:')
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
