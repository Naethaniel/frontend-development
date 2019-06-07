import React, {Component} from 'react'
import axios from 'axios'

export class AddVegetable extends Component {

  state = {
  };

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
        Add vegetable
      </div>
    )
  }
}
