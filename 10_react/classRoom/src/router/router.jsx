import {createBrowserRouter} from 'react-router'
const AppLayout =lazy(()=>import("../layout/AppLayout"))
const Home=lazy(()=>import('../pages/Home'))
const Products=lazy(()=>import('../pages/Products'))
const Contact=lazy(()=>import("../pages/Contact"))
import { lazy, Suspense } from 'react'
import FallBackUi from '../component/FallBackUi'
const About=lazy(()=>import('../pages/About'))
const Loign = lazy(()=>import('../component/Loign'))

const router=createBrowserRouter([
    {
        path:"/",
        Component:AppLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"products",
                element:
                <Suspense fallback={<FallBackUi/>}>

                    <Products/>
                </Suspense>

            },
            {
                path:"contact",
                Component:Contact

            },
            {
                path:"about",
                Component:About

            },
        ]

    },
    {

        path:"/login",
        Component:Loign
    }
])

export default router