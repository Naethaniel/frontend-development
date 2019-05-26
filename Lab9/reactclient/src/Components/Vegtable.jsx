import React, {Component} from 'react'
import axios from 'axios'

export class Vegetable extends Component {

    state = {
        vegetable: null,
        vegetables: [],
        loading: false
    }

    componentDidMount() {
        this.fetchVegetables()
    }

    async fetchVegetables() {
        this.setState({loading: !this.state.loading})
        const vegetables = await axios.get('http://localhost:4000/api/vegetables').then(resp => resp.data.vegetables)
        this.setState({vegetables, loading: !this.state.loading})
    }

    renderVegetables() {
        return this.state.vegetables.map((vegetable, index) => (
            <li
                key={vegetable._id}
                onClick={_ => this.setState({vegetable: this.state.vegetables[index]})}
            >
                {vegetable._name}
            </li>
        ))
    }

    renderVegetable() {
        const {
            _name,
            _color,
            _size,
            _species,
            _kingdom,
            _weight,
            _isEdible
        } = this.state.vegetable
        return (
            <div>
                <label>Name :: </label>
                <label>{_name}</label>
                <br/>
                <label>Color :: </label>
                <label>{_color}</label>
                <br/>
                <label>Size :: </label>
                <label>{_size}</label>
                <label>Species :: </label>
                <label>{_species}</label>
                <label>Kingdom :: </label>
                <label>{_kingdom}</label>
                <label>Weight :: </label>
                <label>{_weight}</label>
                <label>Edible? :: </label>
                <label>{_isEdible.toString()}</label>
            </div>
        )
    }

    addVegetable(e) {
        e.preventDefault()
        // post request here
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    Loading...
                </div>
            )
        }
        return (
            <div>
                <div>
                    Vegetables:
                    <ul>
                        {this.renderVegetables()}
                    </ul>
                </div>
                {this.state.vegetable && this.renderVegetable()}
                <div>
                    <form onSubmit={e => this.addVegetable(e)}>
                        <label>Enter number</label>
                        <input
                            value={this.state.number}
                            onChange={e => this.setState({number: e.target.value})}
                        />
                        <button>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}