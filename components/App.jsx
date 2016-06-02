import React, { Component } from 'react'

import SearchContainer from '../containers/SearchContainer.jsx'

export default class App extends Component {
  render () {
    return (
      <div className='container margin-top-15'>
        <SearchContainer />
      </div>
    )
  }
}
