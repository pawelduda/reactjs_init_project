import React from 'react'

export default class SearchInput extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label for="searchPhrase" className="control-label">
          Search for a phrase
        </label>
        <input name="searchPhrase" type="text"
          className="form-control input-lg"
          placeholder="Start typing to search..." />
      </div>
    )
  }
}
