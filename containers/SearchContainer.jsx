import React from 'react'

import SearchInput from '../components/search/SearchInput.jsx'

export default class SearchContainer extends React.Component {
  render () {
    return (
      <div className='jumbotron'>
        <div className='container'>
          <SearchInput />
        </div>
      </div>
    )
  }
}
