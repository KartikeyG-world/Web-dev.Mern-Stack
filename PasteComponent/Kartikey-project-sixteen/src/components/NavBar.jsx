import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/NavBar.css'

const NavBar = () => {
  return (
    <div id='main-container'>
      <NavLink id='nav-ele'
      to={"/"}
      >
        Home
      </NavLink>
      <NavLink id='nav-ele'
      to={"/pastes"}
      >
        Pastes
      </NavLink>
    </div>
  )
}

export default NavBar
