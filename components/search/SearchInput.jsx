import React from 'react'
import axios from 'axios'
import { debounce } from 'throttle-debounce'

export default class SearchInput extends React.Component {
  constructor () {
    super()

    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleUserInput (event) {
    this.props.onUserInput(event.target.value)
  }

  render () {
    return (
      <div className='form-group'>
        <label for='searchPhrase' className='control-label'>
          Search for a phrase
        </label>
        <input onChange={this.handleUserInput}
          ref='searchPhraseInput'
          name='searchPhrase' type='text'
          className='form-control input-lg'
          placeholder='Start typing to search...' />
      </div>
    )
  }
}
