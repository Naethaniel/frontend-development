import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom"

import './App.css'
import {ListVegetable} from "./Components/ListVegetable"
import {AddVegetable} from "./Components/AddVegetable"
import {About} from "./Components/About"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/vegetable/list'>Vegetable list</Link>
            </li>
            <li>
              <Link to='/vegetable/add'>Add vegetable</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
        <Route path='/vegetable/list' component={ListVegetable}/>
        <Route path='/vegetable/add' component={AddVegetable}/>
        <Route path='/about' exact component={About}/>
        <Route component={() => (<Redirect to='/vegetable/list'/>)}/>
      </div>
    </Router>
  )
}

export default App
