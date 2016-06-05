import React, { Component } from 'react'

export default class BootstrapInput extends Component {
  render () {
    return (
      <div>
        <label for='{this.props.name}'>{this.props.label}</label>
        <input type='{this.props.type}' name='{this.props.name}' className='form-control' />
      </div>
    )
  }
}
