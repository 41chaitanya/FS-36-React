import React from 'react'
import { NavLink } from 'react-router'

const Nav = () => {
  return (
   <nav>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/about"}>About</NavLink>
    <NavLink to={"/contact"}>Contact</NavLink>
    <NavLink to={"/products"}>Products</NavLink>
   </nav>
  )
}

export default Nav