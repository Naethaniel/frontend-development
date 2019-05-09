import React, {Component} from 'react';

class VegetableDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vegetable: props.vegetable
    }
  }

  render() {
    const {
      name,
      color,
      size,
      species,
      kingdom,
      weight,
      isEdible
    } = this.state.vegetable;

    return (
      <li className='list-item'>
        Name: {name} <br />
        Color: {color} <br />
        Size: {size} <br />
        Species: {species} <br />
        Kingdom: {kingdom} <br />
        Weight: {weight} <br />
        isEdible: {isEdible ? 'True' : 'False'}
      </li>
    );
  }
}

export default VegetableDetail;