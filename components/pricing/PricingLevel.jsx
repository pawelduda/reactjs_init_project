import React, { Component, PropTypes } from 'react'
import accounting from 'accounting'

export default class PricingLevel extends Component {
  static propTypes = {
    searchResultsCount: PropTypes.number.isRequired,
    pricingMultiplier: PropTypes.number.isRequired
  }

  constructor () {
    super()

    this.price = this.price.bind(this)
    this.formattedPrice = this.formattedPrice.bind(this)
    this.handlePricingLevelSelect = this.handlePricingLevelSelect.bind(this)
  }

  formattedPrice () {
    return accounting.formatMoney(this.price())
  }

  price () {
    return Math.round(
      this.props.searchResultsCount * this.props.pricingMultiplier
    )
  }

  handlePricingLevelSelect () {
    this.props.onPricingLevelSelect(this.formattedPrice())
  }

  render () {
    return (
      <button
        className='btn btn-primary btn-lg btn-block'
        onClick={this.handlePricingLevelSelect} >
        {this.formattedPrice()}
      </button>
    )
  }
}
