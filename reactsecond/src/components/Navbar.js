import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul className="navbar">
            <li><Link to="/home">Home</Link></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/filter">Filter</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/country">Country</NavLink></li>

        </ul>
    </div>
  )
}

export default Navbar;