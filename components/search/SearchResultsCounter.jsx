import React from 'react'

export default class SearchResultsCounter extends React.Component {
  render () {
    return (
      <div>
        <p>
          {
            this.props.searchResultsCount
              ? `Search results count: ${this.props.searchResultsCount}`
              : ''
          }
        </p>
      </div>
    )
  }
}
