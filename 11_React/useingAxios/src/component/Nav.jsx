import React from 'react'
import {NavLink} from 'react-router'
const Nav = () => {
  return (
    <nav>

    <NavLink to={"/"}>Create</NavLink>
    <br />
    <NavLink to={"users"}>All Users</NavLink>
  
    </nav>
  )
}

export default Nav
