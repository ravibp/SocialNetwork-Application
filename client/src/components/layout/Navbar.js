import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/" >
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      <ul>
        <li>
          <a href="!#">Developers</a>
        </li>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.propTypes = {

}

export default Navbar
