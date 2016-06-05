import React, { Component } from 'react'

import BootstrapInput from './BootstrapInput.jsx'

export default class ContactModal extends Component {
  render () {
    return (
      <div id='contact-modal' className='modal fade contact-modal' tabindex='-1' role='dialog'>
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <div className='modal-body'>
              <form>
                <h4>
                  You have chosen plan for [amount].
                  Please provide your contact data and we will contact you shortly.
                </h4>

                <div className='row margin-top-15'>
                  <div className='col-md-6'>
                    <BootstrapInput
                      type='text' name='first-name'
                      label='First Name' />
                  </div>

                  <div className='col-md-6'>
                    <BootstrapInput
                      type='text' name='last-name'
                      label='Last Name' />
                  </div>
                </div>

                <div className='margin-top-15'>
                  <BootstrapInput
                    type='email' name='email'
                    label='Email' />
                </div>

                <div className='row margin-top-15'>
                  <div className='col-md-3 pull-right'>
                    <input
                      type='submit' value='Confirm'
                      className='btn btn-lg btn-success pull-right' />
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
