import React, { Component, PropTypes } from 'react'

export default class PricingLevel extends Component {
  render () {
    return (
      <button className="btn btn-primary btn-lg btn-block">
        ${this.props.price}
      </button>
    )
  }
}

PricingLevel.propTypes = {
  price: PropTypes.number.isRequired
}
