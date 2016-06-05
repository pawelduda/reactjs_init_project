import React, { Component, PropTypes } from 'react'
import accounting from 'accounting'

export default class PricingLevel extends Component {
  constructor () {
    super()

    this.price = this.price.bind(this)
    this.formattedPrice = this.formattedPrice.bind(this)
  }

  formattedPrice () {
    return accounting.formatMoney(this.price())
  }

  price () {
    return Math.round(
      this.props.searchResultsCount * this.props.pricingMultiplier
    )
  }

  render () {
    return (
      <button className='btn btn-primary btn-lg btn-block'>
        {this.formattedPrice()}
      </button>
    )
  }
}

PricingLevel.propTypes = {
  searchResultsCount: PropTypes.number.isRequired,
  pricingMultiplier: PropTypes.number.isRequired
}
