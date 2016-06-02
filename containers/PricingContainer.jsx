import React, { Component, PropTypes } from 'react'

import PricingLevel from '../components/pricing/PricingLevel.jsx'

export default class PricingContainer extends Component {
  render () {
    return (
      <div>
        <div className="row text-center">
          <h2>Choose your pricing plan:</h2>
        </div>
        <div className="row text-center margin-top-15">
          <div className="col-md-4 margin-top-15">
            <PricingLevel searchResultsCount={this.props.searchResultsCount} pricingMultiplier={1} />
          </div>
          <div className="col-md-4 margin-top-15">
            <PricingLevel searchResultsCount={this.props.searchResultsCount} pricingMultiplier={1.9} />
          </div>
          <div className="col-md-4 margin-top-15">
            <PricingLevel searchResultsCount={this.props.searchResultsCount} pricingMultiplier={2.8} />
          </div>
        </div>
      </div>
    )
  }
}

PricingContainer.propTypes = {
  searchResultsCount: PropTypes.number.isRequired
}
