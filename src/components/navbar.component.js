import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Games
              </Link>
            </li>
            <li>
              <Link to="/upcoming" className="nav-link">
                Watchlist
              </Link>
            </li>
            <li>
              <Link to="/gear" className="nav-link">
                Gear
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
