import React from 'react'
import { NavLink } from 'react-router'

const Nav = () => {
  return (
    <>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"products"}>Products</NavLink>
        <NavLink to={"about"}>About</NavLink>
        <NavLink to={"contact"}>Contact</NavLink>
    
    </>
  )
}

export default Nav