import React from 'react'
import Nav from '../component/Nav'
import { Outlet } from 'react-router'
import Login from '../pages/Login'

const AppLayout = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>

      
    </div>
  )
}

export default AppLayout




