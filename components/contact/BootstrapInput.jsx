import React, { Component, PropTypes } from 'react'

export default class BootstrapInput extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }

  render () {
    return (
      <div>
        <label for='{this.props.name}'>{this.props.label}</label>
        <input type='{this.props.type}' name='{this.props.name}' className='form-control' />
      </div>
    )
  }
}