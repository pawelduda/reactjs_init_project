import React from 'react'

import SearchResultsNumber from '../../helpers/SearchResultsNumber'

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
