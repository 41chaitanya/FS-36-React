import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router'
import routerChacah from './router/router.jsx'

createRoot(document.getElementById('root')).render(
<RouterProvider router={routerChacah}/>
    
)
