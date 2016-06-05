import React, { Component } from 'react'

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

                <div className='row'>
                  <div className='col-md-6'>
                    <label for='first-name'>First Name</label>
                    <input type='text' name='first-name' className='form-control' />
                  </div>

                  <div className='col-md-6'>
                    <label for='first-name'>Last Name</label>
                    <input type='text' name='first-name' className='form-control' />
                  </div>
                </div>

                <div className='margin-top-15'>
                  <label for='first-name'>Email</label>
                  <input type='email' name='first-name' className='form-control' />
                </div>

                <div className='row margin-top-15'>
                  <div className='col-md-3 pull-right'>
                    <input type='submit' value='Confirm' className='btn btn-lg btn-success pull-right' />
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
