import React, {Component} from 'react';

import VegetableDetail from './VegetableDetail'
import Database from '../db/db.js';

class VegetableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      database: new Database(),
      randomVegetable: null
    }
  }

  componentDidMount() {
    setInterval(this.getRandomVegetable, 1000)
  }

  renderVegetableDetails() {
    const vegetableList = this.state.database.db.map(vegetable => <VegetableDetail key={vegetable.name} vegetable={vegetable}/>);
    return (
      <ul className='vegetable-list'>
        {vegetableList}
      </ul>
    )
  }

  renderRandomVegetable(randomVegetable) {
    return (
      <div>
        <div className='header'>
          Random Vegetable
        </div>
        <ul className='vegetable-list'>
          <VegetableDetail key={randomVegetable.name} vegetable={randomVegetable}/>
        </ul>
      </div>
    )
  }

  getRandomVegetable = () => {
    const id = Math.floor(Math.random() * 3 + 1);
    this.setState({randomVegetable: this.state.database.findVegetableByProperty(id, '_id')});
  }

  render() {
    const {randomVegetable} = this.state;
    return (
      <div>
        <div className='header'>
          Vegetable list
        </div>
        <div>
          {this.renderVegetableDetails()}
          {randomVegetable && this.renderRandomVegetable(randomVegetable)}
        </div>
      </div>
    );
  }
}

export default VegetableList;