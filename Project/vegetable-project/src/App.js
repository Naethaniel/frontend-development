import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import './App.css';
import {VegetableList} from "./Components/VegetableList";
import {AddVegetable} from "./Components/AddVegetable";
import {About} from "./Components/About";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Vegetable list</Link>
              <Link to='/vegetable/add'>Add vegetable</Link>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
        <Route path='/' exact component={VegetableList}/>
        <Route path='/vegetable/add' component={AddVegetable}/>
        <Route path='/about' exact component={About}/>
      </div>
    </Router>
  );
}

export default App;
