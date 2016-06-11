import React, { Component, PropTypes } from 'react'

import ContactModal from '../components/contact/ContactModal.jsx'

export default class ContactContainer extends Component {
  static propTypes = {
    selectedPricing: PropTypes.string
  }

  render () {
    return (
      <div>
        <ContactModal selectedPricing={this.props.selectedPricing} />
      </div>
    )
  }
}
