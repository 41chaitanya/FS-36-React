import { lazy } from 'react'
import {createBrowserRouter} from 'react-router'
import Create from '../pages/Create'
import Users from '../pages/Users'
import ProtectedRoute from './ProtectedRoute'
import Login from '../pages/Login'
const AppLayout=lazy(()=>import('../layout/AppLayout'))
const router=createBrowserRouter([
    {
        path:"/",
        Component:AppLayout,
        children:[


            {
                path:"login",
                Component:Login
            },
            {
                index:true,
                element:<ProtectedRoute>
                    <Create/>
                </ProtectedRoute>
            },
            {
                path:"/users",
                 element:<ProtectedRoute>
                    <Users/>
                </ProtectedRoute>
            }
        ]

    }

    
])
export default router