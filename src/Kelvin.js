import React, { Component } from 'react'

export default class Kelvin extends Component {
  render() {
    return (
      <div>{this.props.info} {this.props.currentDegree}</div>
    )
  }
}
