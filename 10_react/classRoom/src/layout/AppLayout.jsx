import React, { lazy } from 'react'
import { Outlet } from 'react-router'
const Nav=lazy(()=>import('../component/Nav'))
const AppLayout = () => {
  return (
   <>
   <Nav/>
    <Outlet/>
   </>
  )
}

export default AppLayout