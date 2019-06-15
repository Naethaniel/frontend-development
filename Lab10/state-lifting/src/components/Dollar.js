import React, {Component} from 'react'

class Dollar extends Component {

    render() {
        return (
            <div>
                <label>Dollars</label>
                <input
                    value={this.props.dollars}
                    onChange={e => this.props.onDollarChange(e.target.value)}
                />
            </div>
        )
    }
}

export default Dollar