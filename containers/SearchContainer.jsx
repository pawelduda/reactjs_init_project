import React from 'react'
import axios from 'axios'
import { debounce } from 'throttle-debounce'

import SearchInput from '../components/search/SearchInput.jsx'
import SearchResultsCounter from '../components/search/SearchResultsCounter.jsx'

export default class SearchContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      searchResultsCount: undefined
    }

    this.onUserInput = this.onUserInput.bind(this)
    this.onUserInput = debounce(500, this.onUserInput)
    // this.onUserInput = this.onUserInput.bind(this)
  }

  onUserInput (searchQuery) {
    console.log('test')
    axios
      .get(this.ajaxUrl(searchQuery))
      .then((response) => {
        this.setState({
          searchResultsCount: response.data.searchInformation.formattedTotalResults
        })
      })
  }

  ajaxUrl (searchQuery) {
    return `https://www.googleapis.com/customsearch/v1?key=AIzaSyA7w4pR_1tc8DG3S3qzFplJEp9CAyjF1MY&cx=015538004234392094052:bcfx59rb48y&q=${searchQuery}`
  }

  render () {
    return (
      <div className='jumbotron'>
        <div className='container'>
          <SearchInput onUserInput={this.onUserInput} />
          <SearchResultsCounter searchResultsCount={this.state.searchResultsCount} />
        </div>
      </div>
    )
  }
}
