import React, { Component, PropTypes } from 'react'

import BootstrapInput from './BootstrapInput.jsx'

export default class ContactModal extends Component {
  static propTypes = {
    selectedPricing: PropTypes.string
  }

  render () {
    return (
      <div tabindex='-1' role='dialog'>
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h3>Please provide your contact data</h3>
            </div>
            <div className='modal-body'>
              <form>
                <h4>
                  You have chosen pricing plan for <strong>{this.props.selectedPricing}</strong>.
                  Please provide your contact data and we will
                  reach out to you shortly with further details.
                </h4>

                <div className='row margin-top-15'>
                  <div className='col-md-6'>
                    <BootstrapInput
                      type='text' name='first-name'
                      label='First Name'
                    />
                  </div>

                  <div className='col-md-6'>
                    <BootstrapInput
                      type='text' name='last-name'
                      label='Last Name'
                    />
                  </div>
                </div>

                <div className='margin-top-15'>
                  <BootstrapInput
                    type='email' name='email'
                    label='Email'
                  />
                </div>

                <div className='row margin-top-15'>
                  <div className='col-md-3 pull-right'>
                    <input
                      type='submit' value='Confirm'
                      className='btn btn-lg btn-success pull-right'
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
