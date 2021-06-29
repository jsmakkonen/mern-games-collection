import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ListGames from './components/listgames.component'
import Navbar from './components/navbar.component'
import ListGear from './components/listgear.component'
import ListUpcoming from './components/listupcoming.component'
import AddGame from './components/addgame.component'
import AddUpcoming from './components/addupcoming.component'
import AddGear from './components/addgear.component'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Route path="/" exact component={ListGames} />
        <Route path="/gear" component={ListGear} />
        <Route path="/upcoming" component={ListUpcoming} />
        <Route path="/create" component={AddGame} />
        <Route path="/addupcoming" component={AddUpcoming} />
        <Route path="/addgear" component={AddGear} />
      </div>
    </Router>
  )
}

export default App
