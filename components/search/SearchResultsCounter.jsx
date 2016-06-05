import React, { Component, PropTypes } from 'react'

export default class SearchResultsCounter extends Component {
  render () {
    return (
      <div>
        <p className={this.props.error ? 'text-danger' : ''}>
          {this.props.searchResultsMessage}
        </p>
      </div>
    )
  }
}

SearchResultsCounter.propTypes = {
  error: PropTypes.bool.isRequired,
  searchResultsMessage: PropTypes.string.isRequired
}
