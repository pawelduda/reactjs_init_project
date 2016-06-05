import React, { Component } from 'react'

import SearchInput from '../components/search/SearchInput.jsx'
import SearchResultsCounter from '../components/search/SearchResultsCounter.jsx'

export default class SearchContainer extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <div className='jumbotron'>
          <div className='container'>
            <SearchInput onUserInput={this.props.onUserInput} />
            <SearchResultsCounter
              error={this.props.error}
              searchResultsMessage={this.props.searchResultsMessage} />
          </div>
        </div>
      </div>
    )
  }
}
