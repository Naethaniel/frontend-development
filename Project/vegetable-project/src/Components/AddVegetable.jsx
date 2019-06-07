import React, {Component} from 'react'
import axios from 'axios'
import {Formik} from 'formik'

import API_URL from '../config'

export class AddVegetable extends Component {

  render() {
    if (this.state.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
      <div className='container'>
        <Formik
          initialValues={{isEdible: true}}
          onSubmit={values => {
            console.log(values)
            axios.post(`${API_URL}vegetable`, values)
              .then((res) => this.props.history.push('/'))
              .catch(error => alert(error))
          }}
          render={props => (
            <form onSubmit={props.handleSubmit} className='add-form'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name='name'
              />
              <label htmlFor='color'>Color</label>
              <input
                type='text'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.color}
                name='color'
              />
              <label htmlFor='size'>Size</label>
              <input
                type='number'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.size}
                name='size'
                min='1'
              />
              <label htmlFor='species'>Species</label>
              <input
                type='text'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.species}
                name='species'
              />
              <label htmlFor='kingdom'>Kingdom</label>
              <input
                type='text'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.kingdom}
                name='kingdom'
              />
              <label htmlFor='weight'>weight</label>
              <input
                type='number'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.weight}
                name='weight'
                min='1'
              />
              <label htmlFor='isEdible'>Edible</label>
              <select
                name='isEdible'
                value={props.values.isEdible}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              >
                <option value={true} label='True'/>
                <option value={false} label='False'/>
              </select>
              {props.errors.name && <div id='feedback'>{props.errors.name}</div>}
              <button type='submit'>Submit</button>
            </form>
          )}
        />
      </div>
    )
  }
}
