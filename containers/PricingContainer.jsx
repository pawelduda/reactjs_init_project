import React, { Component, PropTypes } from 'react'

import PricingLevel from '../components/pricing/PricingLevel.jsx'

export default class PricingContainer extends Component {
  static propTypes = {
    searchResultsCount: PropTypes.number.isRequired
  }

  render () {
    if (this.props.searchResultsCount > 0) {
      return (
        <div>
          <div className='row text-center'>
            <h2>Choose your pricing plan:</h2>
          </div>
          <div className='row text-center margin-top-15'>
            <div className='col-md-4 margin-top-15'>
              <PricingLevel searchResultsCount={this.props.searchResultsCount} pricingMultiplier={0.001} />
            </div>
            <div className='col-md-4 margin-top-15'>
              <PricingLevel searchResultsCount={this.props.searchResultsCount} pricingMultiplier={0.003} />
            </div>
            <div className='col-md-4 margin-top-15'>
              <PricingLevel searchResultsCount={this.props.searchResultsCount} pricingMultiplier={0.004} />
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}
