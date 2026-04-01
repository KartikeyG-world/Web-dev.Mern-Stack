import React from 'react'
import {Link, NavLink} from "react-router-dom"
import './NavBar.css'
const NavBar = () => {
  return (
    <div id='nav-container'>
      <ul id='nav-list'>
        <li id='nav-list-items'>
            <NavLink to = "/" className={({isActive}) => isActive? "active-link":""} id='name'>
              Home
            </NavLink>
        </li>
        <li id='nav-list-items'>
            <NavLink to = "/about" className={({isActive}) => isActive? "active-link":""} id='name'>
              About
            </NavLink>
        </li>
        <li id='nav-list-items'>
            <NavLink to = "/dashboard" className={({isActive}) => isActive? "active-link":""} id='name'>
              Dashboard
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
