import React, {Component} from 'react'

class PLN extends Component {
    render() {
        return (
            <div>
                <label>PLN</label>
                <input
                    value={this.props.plns}
                    onChange={e => this.props.onPlnChange(e.target.value)}
                />
            </div>
        )
    }
}

export default PLN