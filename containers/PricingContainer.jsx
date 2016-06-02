import React, { Component } from 'react'

import PricingLevel from '../components/pricing/PricingLevel.jsx'

export default class PricingContainer extends Component {
  render () {
    return (
      <div>
        <div className="row text-center">
          <h2>Choose your pricing plan:</h2>
        </div>
        <div className="row text-center margin-top-15">
          <div className="col-md-4 margin-top-15"><PricingLevel price={99} /></div>
          <div className="col-md-4 margin-top-15"><PricingLevel price={199} /></div>
          <div className="col-md-4 margin-top-15"><PricingLevel price={299} /></div>
        </div>
      </div>
    )
  }
}
