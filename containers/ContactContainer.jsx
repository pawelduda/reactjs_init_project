import React, { Component, PropTypes } from 'react'
import Modal from 'react-modal'

import ContactModal from '../components/contact/ContactModal.jsx'

export default class ContactContainer extends Component {
  static propTypes = {
    selectedPricing: PropTypes.string,
    contactModalIsOpen: PropTypes.bool.isRequired
  }

  modalStyle = {
    content: {
      border: 0
    }
  }

  render () {
    return (
      <div>
        <Modal
          isOpen={this.props.contactModalIsOpen}
          style={this.modalStyle}
        >
          <ContactModal selectedPricing={this.props.selectedPricing} />
        </Modal>
      </div>
    )
  }
}
