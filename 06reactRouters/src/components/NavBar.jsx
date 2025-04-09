import React from 'react'
import Home from './homePage'
import About from './about'
import Dashboard from './Dashboard'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/" > Home </NavLink>
            </li>
            <li>
                <Link to="/aboutPage" > About </Link>
                </li>
            <li>
                <Link to="/dashboard" > DashBoard </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar