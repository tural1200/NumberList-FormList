import React, { Component } from 'react'
import uuid from '../node_modules/uuid/v4'
import NumberItem from './NumberItem'


class NumberList extends Component {
    constructor(props){
        super(props)
        this.state={
            numbers: [
               { num: 1, id: uuid() },
               { num: 2, id: uuid() },
               { num: 3, id: uuid() },
               { num: 4, id: uuid() },
               { num: 5, id: uuid() },
               { num: 6, id: uuid() },
               { num: 7, id: uuid() },
               { num: 8, id: uuid() },
               { num: 9, id: uuid() },
               { num: 10, id: uuid() }

            ] 
            
        }
    }


    render() {
        return (
            <>
                <ul>
                    {this.state.numbers.map(number => <NumberItem key={number.id} value={number.num} />)}
                </ul>
            </>
        )
    }
}

export default NumberList