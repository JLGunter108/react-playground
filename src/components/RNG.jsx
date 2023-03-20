import React, { Component } from 'react';


export default class RNG extends Component {
    constructor(props){
        super(props)
        this.state = { 
        num: 0, 
        }
        this.roll = this.roll.bind(this)
    }
    
    roll() {
        this.setState({
        num: Math.floor(Math.random()*100)
        })
    }
    
    render() { 
        return ( 
            <div className='RNG d-flex flex-column align-items-center'>
                <p className='text-white-50'> {this.state.num} </p>
                <button onClick={() => this.roll()} className='btn btn-sm btn-outline-light rollDie primary'>RNG</button>
            </div>
        );
    }
}