import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../components/Nav.jsx'

const AppLayout = () => {
  return (
    <div>
        hello i am app layout
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default AppLayout