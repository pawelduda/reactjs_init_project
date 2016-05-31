import React from 'react'
import axios from 'axios'
import { debounce } from 'throttle-debounce'

export default class SearchInput extends React.Component {
  constructor () {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.getSearchResultsNumber = debounce(500, this.getSearchResultsNumber)
    this.ajaxUrl = this.ajaxUrl.bind(this)
  }

  handleChange (e) {
    this.getSearchResultsNumber(e.target.value)
  }

  getSearchResultsNumber (searchQuery) {
    axios
      .get(this.ajaxUrl(searchQuery))
      .then(function (response) {
        console.log(response.data.searchInformation.formattedTotalResults)
      })
  }

  ajaxUrl (searchQuery) {
    return `https://www.googleapis.com/customsearch/v1?key=AIzaSyA7w4pR_1tc8DG3S3qzFplJEp9CAyjF1MY&cx=015538004234392094052:bcfx59rb48y&q=${searchQuery}`
  }

  render () {
    return (
      <div className='form-group'>
        <label for='searchPhrase' className='control-label'>
          Search for a phrase
        </label>
        <input onChange={this.handleChange}
          name='searchPhrase' type='text'
          className='form-control input-lg'
          placeholder='Start typing to search...' />
      </div>
    )
  }
}
