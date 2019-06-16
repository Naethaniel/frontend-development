import React, {Component} from 'react'
import axios from 'axios'

import API_URL from '../config'
import {Formik} from 'formik'

export class ListVegetable extends Component {

  state = {
    vegetables: [],
    filteredVegetables: [],
    loading: false,
    selectedVegetable: {},
    showEditModal: false
  }

  componentDidMount() {
    this.fetchVegetables()
  }

  async fetchVegetables() {
    this.setState({loading: !this.state.loading})
    const vegetables = await axios.get(`${API_URL}vegetables`).then(resp => resp.data.vegetables)
    this.setState({vegetables, loading: !this.state.loading, filteredVegetables: vegetables})
  }

  deleteVegetable(vegetable) {
    if (window.confirm(`Are you sure you want to delete ${vegetable._name}`)) {
      const data = {
        _name: vegetable._name
      }
      axios.delete(`${API_URL}vegetable`, {data})
        .then((res) => {
          this.fetchVegetables()
        })
        .catch(error => alert(error))
    }
  }

  renderVegetables() {
    return this.state.filteredVegetables.map(vegetable => (
      <tr key={vegetable._name}>
        <td>{vegetable._name}</td>
        <td>{vegetable._color}</td>
        <td>{vegetable._size} cm</td>
        <td>{vegetable._species}</td>
        <td>{vegetable._kingdom}</td>
        <td>{vegetable._weight} kg</td>
        <td>{vegetable._isEdible.toString()}</td>
        <td>
          <button onClick={() => this.setState({showEditModal: true, selectedVegetable: vegetable})}
                  disabled={this.state.showEditModal}>Edit
          </button>
          <button onClick={() => this.deleteVegetable(vegetable)}>Delete</button>
        </td>
      </tr>
    ))
  }

  resetEditModal() {
    this.setState({
      selectedVegetable: {},
      showEditModal: false
    })
  }

  renderEditModal() {
    const {
      selectedVegetable: {
        _name,
        _color,
        _size,
        _species,
        _kingdom,
        _weight,
        _isEdible
      }
    } = this.state
    return (
      <div>
        <Formik
          initialValues={{
            name: _name,
            color: _color,
            size: _size,
            species: _species,
            kingdom: _kingdom,
            weight: _weight,
            isEdible: _isEdible
          }}
          onSubmit={values => {
            axios.put(`${API_URL}vegetable`, {
              oldVegetable: {
                name: _name,
                color: _color,
                size: _size,
                species: _species,
                kingdom: _kingdom,
                weight: _weight,
                isEdible: _isEdible
              },
              newVegetable: values
            })
              .then(() => {
                this.resetEditModal()
                this.fetchVegetables()
              })
              .catch(error => alert(error))
          }}
          render={props => (
            <form onSubmit={props.handleSubmit} className="add-form">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
                required
              />
              <label htmlFor="color">Color</label>
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.color}
                name="color"
                required
              />
              <label htmlFor="size">Size</label>
              <input
                type="number"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.size}
                name="size"
                min="1"
                required
              />
              <label htmlFor="species">Species</label>
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.species}
                name="species"
                required
              />
              <label htmlFor="kingdom">Kingdom</label>
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.kingdom}
                name="kingdom"
                required
              />
              <label htmlFor="weight">Weight</label>
              <input
                type="number"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.weight}
                name="weight"
                min="1"
                required
              />
              <label htmlFor="isEdible">Edible</label>
              <select
                name="isEdible"
                value={props.values.isEdible}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                required
              >
                <option value={true} label="True"/>
                <option value={false} label="False"/>
              </select>
              {props.errors.name && <div id="feedback">{props.errors.name}</div>}
              <div>
                <button type="submit">Submit</button>
                <button onClick={() => this.resetEditModal()}>Cancel</button>
              </div>
            </form>
          )}
        />
      </div>
    )
  }

  filterVegetables(searchText) {
    if (!searchText) {
      this.state.filteredVegetables = this.state.vegetables
    } else {
      const filteredVegetables = this.state.vegetables.filter(vegetable => {
        if (vegetable._name && vegetable._name.toLowerCase().search(searchText) !== -1) return vegetable
        if (vegetable._color && vegetable._color.toLowerCase().search(searchText) !== -1) return vegetable
        if (vegetable._species && vegetable._species.toLowerCase().search(searchText) !== -1) return vegetable
        if (vegetable._kingdom && vegetable._kingdom.toLowerCase().search(searchText) !== -1) return vegetable
      })
      this.setState({filteredVegetables})
    }
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
        <label for="search">Search</label>
        <input id="search" type="text" onChange={(e) => this.filterVegetables(e.target.value)}/>
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
        {this.state.showEditModal && this.renderEditModal()}
      </div>
    )
  }
}
