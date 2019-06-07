import React, {Component} from 'react'
import axios from 'axios'

import API_URL from '../config'

export class ListVegetable extends Component {

  state = {
    vegetables: [],
    loading: false,
  }

  componentDidMount() {
    this.fetchVegetables()
  }

  async fetchVegetables() {
    this.setState({loading: !this.state.loading})
    const vegetables = await axios.get(`${API_URL}vegetables`).then(resp => resp.data.vegetables)
    this.setState({vegetables, loading: !this.state.loading})
  }

  deleteVegetable(vegetable) {
    console.log(vegetable)
    if (window.confirm(`Are you sure you want to delete ${vegetable._name}`)) {
      const data = {
        _name: vegetable._name
      }
      axios.delete(`${API_URL}vegetable`, {data})
        .then((res) => {console.log(res); this.fetchVegetables()})
        .catch(error => alert(error))
    }
  }

  renderVegetables() {
    return this.state.vegetables.map(vegetable => (
      <tr key={vegetable._name}>
        <td>{vegetable._name}</td>
        <td>{vegetable._color}</td>
        <td>{vegetable._size}</td>
        <td>{vegetable._species}</td>
        <td>{vegetable._kingdom}</td>
        <td>{vegetable._weight}</td>
        <td>{vegetable._isEdible.toString()}</td>
        <td>
          <button onClick={() => this.deleteVegetable(vegetable)}>Delete</button>
        </td>
      </tr>
    ))
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
      <div className="container">
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Size</th>
            <th>Species</th>
            <th>Kingdom</th>
            <th>Weight</th>
            <th>Edible</th>
            <th>Actions</th>
          </tr>
          {this.renderVegetables()}
          </tbody>
        </table>
      </div>
    )
  }
}
