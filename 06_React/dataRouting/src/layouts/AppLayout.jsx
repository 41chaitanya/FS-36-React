import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../components/Nav.jsx'

const AppLayout = () => {
  return (
    <div>
        <Nav/>j
        <Outlet/>
    </div>
  )
}

export default AppLayout