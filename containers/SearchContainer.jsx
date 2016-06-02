import React, { Component } from 'react'
import axios from 'axios'
import { debounce } from 'throttle-debounce'

import SearchInput from '../components/search/SearchInput.jsx'
import SearchResultsCounter from '../components/search/SearchResultsCounter.jsx'

export default class SearchContainer extends Component {
  constructor () {
    super()

    this.state = {
      searchResultsMessage: '',
      searchResultsCount: 0,
      error: false
    }

    this.onUserInput = debounce(500, this.onUserInput.bind(this))
  }

  onUserInput (searchQuery) {
    if (searchQuery.length < 3) {
      this.setState({
        error: false,
        searchResultsMessage: '',
        searchResultsCount: 0
      })

      return
    }

    this.setState({
      error: false,
      searchResultsMessage: '...',
      searchResultsCount: 0
    })

    axios
      .get(this.ajaxUrl(searchQuery))
      .then((response) => this.handleSearchSuccess(response))
      .catch((response) => this.handleSearchError(response))
  }

  handleSearchSuccess (response) {
    this.setState({
      error: false,
      searchResultsMessage: `Search results count: ${response.data.searchInformation.formattedTotalResults}`
    })
  }

  handleSearchError (response) {
    if (response.status === 403) {
      this.setState({
        error: true,
        searchResultsMessage: 'Google API daily limit exceeded. Try again later.'
      })
    } else {
      this.setState({
        error: true,
        searchResultsMessage: 'An error occurred. Try again later.'
      })
    }
  }

  ajaxUrl (searchQuery) {
    return `https://www.googleapis.com/customsearch/v1?key=AIzaSyA7w4pR_1tc8DG3S3qzFplJEp9CAyjF1MY&cx=015538004234392094052:bcfx59rb48y&q=${searchQuery}`
  }

  render () {
    return (
      <div className='jumbotron'>
        <div className='container'>
          <SearchInput onUserInput={this.onUserInput} />
          <SearchResultsCounter
            error={this.state.error}
            searchResultsMessage={this.state.searchResultsMessage}
          />
        </div>
      </div>
    )
  }
}
