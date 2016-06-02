import React, { Component, PropTypes } from 'react'

export default class PricingLevel extends Component {
  constructor () {
    super()

    this.price = this.price.bind(this)
  }

  price () {
    return this.props.searchResultsCount * this.props.pricingMultiplier
  }

  render () {
    return (
      <button className="btn btn-primary btn-lg btn-block">
        ${this.price()}
      </button>
    )
  }
}

PricingLevel.propTypes = {
  searchResultsCount: PropTypes.number.isRequired,
  pricingMultiplier: PropTypes.number.isRequired
}
