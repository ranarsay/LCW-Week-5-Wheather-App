import React, { Component } from 'react'

export default class Fahrenheit extends Component {
  render() {
    return (
      <div>{this.props.info} {this.props.currentDegree}</div>
    )
  }
}
