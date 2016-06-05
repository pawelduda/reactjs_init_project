import React, { Component } from 'react'

import SearchContainer from '../containers/SearchContainer.jsx'
import ContactContainer from '../containers/ContactContainer.jsx'

export default class App extends Component {
  render () {
    return (
      <div className='container margin-top-15'>
        <SearchContainer />
        <ContactContainer />
      </div>
    )
  }
}
