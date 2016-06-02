import React, { Component } from 'react'
import axios from 'axios'
import { debounce } from 'throttle-debounce'

import SearchInput from '../components/search/SearchInput.jsx'
import SearchResultsCounter from '../components/search/SearchResultsCounter.jsx'
import PricingContainer from '../containers/PricingContainer.jsx'

export default class SearchContainer extends Component {
  constructor () {
    super()

    this.defaultState = {
      searchResultsMessage: '',
      searchResultsCount: 0,
      error: false
    }
    this.state = this.defaultState

    this.onUserInput = debounce(500, this.onUserInput.bind(this))
  }

  onUserInput (searchQuery) {
    if (searchQuery.length < 3) {
      this.setState(this.defaultState)
      return
    }

    this.setState(
      {
        ...this.defaultState,
        searchResultsMessage: '...'
      }
    )

    axios
      .get(this.ajaxUrl(searchQuery))
      .then((response) => this.handleSearchSuccess(response))
      .catch((response) => this.handleSearchError(response))
  }

  handleSearchSuccess (response) {
    const searchResultsCount = response.data.searchInformation.formattedTotalResults

    this.setState(
      {
        ...this.defaultState,
        searchResultsMessage: `Search results count: ${searchResultsCount}`,
        searchResultsCount: Number(searchResultsCount.replace(/,/g, ''))
      }
    )
  }

  handleSearchError (response) {
    if (response.status === 403) {
      this.setState(
        {
          ...this.defaultState,
          error: true,
          searchResultsMessage: 'Google API daily limit exceeded. Try again later.'
        }
      )
    } else {
      this.setState(
        {
          ...this.defaultState,
          error: true,
          searchResultsMessage: 'An error occurred. Try again later.'
        }
      )
    }
  }

  ajaxUrl (searchQuery) {
    return `https://www.googleapis.com/customsearch/v1?key=AIzaSyDcQO-ogNX2SPtTCmmRpvBKuvMErrEsouk&cx=015538004234392094052:bcfx59rb48y&q=${searchQuery}`
  }

  render () {
    return (
      <div>
        <div className='jumbotron'>
          <div className='container'>
            <SearchInput onUserInput={this.onUserInput} />
            <SearchResultsCounter
              error={this.state.error}
              searchResultsMessage={this.state.searchResultsMessage} />
          </div>
        </div>
        <PricingContainer searchResultsCount={this.state.searchResultsCount} />
      </div>
    )
  }
}
