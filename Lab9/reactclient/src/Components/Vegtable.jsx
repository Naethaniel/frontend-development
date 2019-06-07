import React, {Component} from 'react'
import axios from 'axios'

export class Vegetable extends Component {

    state = {
        vegetable: null,
        vegetables: [],
        loading: false,
        name: '',
        color: '',
        size: '',
        species: '',
        kingdom: '',
        weight: '',
        isEdible: ''
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
            <table>
                <tr>
                    <th> Name</th>
                    <th> Color</th>
                    <th> Size</th>
                    <th> Species</th>
                    <th> Kingdom</th>
                    <th> Weight</th>
                    <th> Edible</th>
                    <th></th>
                </tr>
                <tr>
                    <td>{_name}</td>
                    <td>{_color}</td>
                    <td>{_size}</td>
                    <td>{_species}</td>
                    <td>{_kingdom}</td>
                    <td>{_weight} kg</td>
                    <td>{_isEdible.toString()}</td>
                </tr>
            </table>
        )
    }

    addVegetable(e) {
        e.preventDefault()
        const {
            name,
            color,
            size,
            species,
            kingdom,
            weight,
            isEdible
        } = this.state
        axios.post('http://localhost:4000/api/vegetable', {
            name,
            color,
            size,
            species,
            kingdom,
            weight,
            isEdible
        }).then(_ => this.fetchVegetables())
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
                    Add new vegetable to database
                    <form onSubmit={e => this.addVegetable(e)}>
                        <label>Name&nbsp;</label>
                        <input
                            value={this.state.name}
                            onChange={e => this.setState({name: e.target.value})}
                        />
                        <br/>
                        <label>Color&nbsp;</label>
                        <input
                            value={this.state.color}
                            onChange={e => this.setState({color: e.target.value})}
                        />
                        <br/>
                        <label>Size&nbsp;</label>
                        <input
                            value={this.state.size}
                            onChange={e => this.setState({size: e.target.value})}
                            type="number"
                        />
                        <br/>
                        <label>Species&nbsp;</label>
                        <input
                            value={this.state.species}
                            onChange={e => this.setState({species: e.target.value})}
                        />
                        <br/>
                        <label>Kingdom&nbsp;</label>
                        <input
                            value={this.state.kingdom}
                            onChange={e => this.setState({kingdom: e.target.value})}
                        />
                        <br/>
                        <label>Weight&nbsp;</label>
                        <input
                            value={this.state.weight}
                            onChange={e => this.setState({weight: e.target.value})}
                            type="number"
                        />
                        <br/>
                        <label>Edible?&nbsp;</label>
                        <select onChange={e => this.setState({isEdible: e.target.value})} value={this.state.isEdible}>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        <br/>
                        <button>
                            Add vegetable
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
