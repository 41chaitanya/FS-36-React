import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router'
import appRouter from './router/appRouter.jsx'
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
