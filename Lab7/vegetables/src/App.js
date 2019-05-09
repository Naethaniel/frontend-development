import React, {Component} from 'react';

import './App.css';
import VegetableList from './components/VegetableList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <VegetableList />
      </div>
    );
  }
}

export default App;
