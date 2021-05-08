import React from 'react'
import {Router, Link} from '@reach/router'
import Search from './Search'
import Detail from './Detail'
import './App.css'

function App() {


  return (
    <div className="app">
      <header>
        <Link to="/">Home</Link>
      </header>
      <Router>
        <Search path="/"/>
        <Detail path="/details/:id" />
      </Router>
      
    </div>
  );
}

export default App;
