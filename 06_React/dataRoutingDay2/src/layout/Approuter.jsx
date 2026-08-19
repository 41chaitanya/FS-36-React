import React from 'react'
import {Outlet} from 'react-router'
import Nav from '../components/Nav.jsx'
const Approuter = () => {
  return (
   <>
   <Nav/>
   <Outlet/>
   
   </>
  )
}

export default Approuter