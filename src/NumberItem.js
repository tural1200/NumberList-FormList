import React, { Component } from 'react'

class NumberItem extends Component {
    render() {
        return (
            <li>
                {this.props.value}
            </li>
        )
    }
} 

export default NumberItem