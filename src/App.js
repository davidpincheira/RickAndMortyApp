import React from 'react'
import {Router, Link} from '@reach/router'
import Search from './Search'
import Detail from './Detail'
import Episode from './Episode'
import Episodes from './Episodes'
import './App.css'

function App() {

  return (
    <div className="app">
      <header>
        <Link to="/">Home</Link>
        <Link to="/episodes">Episodes</Link>
      </header>
      <Router>
        <Search path="/"/>
        <Detail path="/details/:id" />
        <Episode path="/episode/:id" />
        <Episodes path="/episodes"/>
      </Router>
      
    </div>
  );
}

export default App;
