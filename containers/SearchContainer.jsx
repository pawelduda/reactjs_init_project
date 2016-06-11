import React, { Component, PropTypes } from 'react'

import SearchInput from '../components/search/SearchInput.jsx'
import SearchResultsCounter from '../components/search/SearchResultsCounter.jsx'

export default class SearchContainer extends Component {
  static propTypes = {
    onUserInput: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
    searchResultsMessage: PropTypes.string.isRequired
  }

  render () {
    return (
      <div>
        <div className='jumbotron'>
          <div className='container'>
            <SearchInput onUserInput={this.props.onUserInput} />
            <SearchResultsCounter
              error={this.props.error}
              searchResultsMessage={this.props.searchResultsMessage}
            />
          </div>
        </div>
      </div>
    )
  }
}
