import { NavLink, Outlet } from "react-router"
import Products from "../pages/Products.jsx"

const AppLayout = () => {
  return (
   <>
    <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"about"}>About</NavLink>
        <NavLink to={"contact"}>Contact</NavLink>
        <NavLink to={"products"}>Products</NavLink>


    </nav>

   <Outlet/>
   </>
  )
}

export default AppLayout