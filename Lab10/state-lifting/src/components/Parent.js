import React, {Component} from 'react'
import Dollar from './Dollar'
import PLN from './PLN'

export class Parent extends Component {

    state = {
        dollar: 1,
        pln: 2
    }

    handleDollarChange = value => this.setState({dollar: value, pln: value * 3.8})

    handlePlnChange = value => this.setState({dollar: value / 3.8, pln: value})


    render() {
        return (
            <div>
                <Dollar dollars={this.state.dollar} onDollarChange={this.handleDollarChange}/>
                <PLN plns={this.state.pln} onPlnChange={this.handlePlnChange} />
            </div>
        )
    }
}