import React, { Component, PropTypes } from 'react'
import jQuery from 'jquery'
window.jQuery = jQuery
require('bootstrap')
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
  }

  formattedPrice () {
    return accounting.formatMoney(this.price())
  }

  price () {
    return Math.round(
      this.props.searchResultsCount * this.props.pricingMultiplier
    )
  }

  onClick () {
    window.jQuery('.contact-modal').modal()
  }

  render () {
    return (
      <button
        className='btn btn-primary btn-lg btn-block'
        onClick={this.onClick} >
        {this.formattedPrice()}
      </button>
    )
  }
}
