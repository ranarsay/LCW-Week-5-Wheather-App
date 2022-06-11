import React, { Component } from 'react'

export default class Temperature extends Component {
    render() {
        return (
            <div>
                <h5>
                    {this.props.info}
                </h5>
            </div>
        )
    }
}
