import { lazy } from 'react'
import {createBrowserRouter} from 'react-router'
import Create from '../pages/Create'
import Users from '../pages/Users'
const AppLayout=lazy(()=>import('../layout/AppLayout'))
const router=createBrowserRouter([
    {
        path:"/",
        Component:AppLayout,
        children:[
            {
                index:true,
                Component:Create
            },
            {
                path:"/users",
                Component:Users
            }
        ]

    }

    
])
export default router