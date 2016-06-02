import React, { Component } from 'react'

export default class SearchInput extends Component {
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
          Search for a phrase (at least 3 characters)
        </label>
        <input onChange={this.handleUserInput}
          name='searchPhrase' type='text'
          className='form-control input-lg'
          placeholder='Start typing to search...' />
      </div>
    )
  }
}
