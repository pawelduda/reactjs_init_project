import React, { Component } from 'react'
import axios from 'axios'
import { debounce } from 'throttle-debounce'

import SearchContainer from '../containers/SearchContainer.jsx'
import PricingContainer from '../containers/PricingContainer.jsx'
import ContactContainer from '../containers/ContactContainer.jsx'

export default class App extends Component {
  constructor () {
    super()

    this.defaultState = {
      searchResultsMessage: '',
      searchResultsCount: 0,
      error: false,
      selectedPricing: null,
      contactModalIsOpen: false
    }
    this.state = this.defaultState

    this.onUserInput = debounce(500, this.onUserInput.bind(this))
    this.onPricingLevelSelect = this.onPricingLevelSelect.bind(this)
  }

  onUserInput (searchQuery) {
    if (searchQuery.length < 3) {
      this.setState(this.defaultState)
      return
    }

    this.setState({
      ...this.defaultState,
      searchResultsMessage: '...'
    })

    axios
      .get(this.ajaxUrl(searchQuery))
      .then((response) => this.handleSearchSuccess(response))
      .catch((response) => this.handleSearchError(response))
  }

  handleSearchSuccess (response) {
    const searchResultsCount = response.data.searchInformation.formattedTotalResults

    this.setState({
      ...this.defaultState,
      searchResultsMessage: `Search results count: ${searchResultsCount}`,
      searchResultsCount: Number(searchResultsCount.replace(/,/g, ''))
    })
  }

  handleSearchError (response) {
    if (response.status === 403) {
      this.setState({
        ...this.defaultState,
        error: true,
        searchResultsMessage: 'Google API daily limit exceeded. Try again later.'
      })
    } else {
      this.setState({
        ...this.defaultState,
        error: true,
        searchResultsMessage: 'An error occurred. Try again later.'
      })
    }
  }

  ajaxUrl (searchQuery) {
    return `https://www.googleapis.com/customsearch/v1?key=AIzaSyDcQO-ogNX2SPtTCmmRpvBKuvMErrEsouk&cx=015538004234392094052:bcfx59rb48y&q=${searchQuery}`
  }

  onPricingLevelSelect (selectedPricing) {
    this.setState({
      ...this.defaultState,
      selectedPricing: selectedPricing,
      contactModalIsOpen: true
    })
  }

  render () {
    return (
      <div className='container margin-top-15'>
        <SearchContainer
          onUserInput={this.onUserInput} error={this.state.error}
          searchResultsMessage={this.state.searchResultsMessage}
        />
        <PricingContainer
          searchResultsCount={this.state.searchResultsCount}
          onPricingLevelSelect={this.onPricingLevelSelect}
        />
        <ContactContainer
          selectedPricing={this.state.selectedPricing}
          contactModalIsOpen={this.state.contactModalIsOpen}
        />
      </div>
    )
  }
}
