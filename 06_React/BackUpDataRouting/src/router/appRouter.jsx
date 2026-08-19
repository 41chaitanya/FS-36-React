import { createBrowserRouter } from "react-router";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Products from "../pages/Products.jsx";
import ProductCard from "../components/ProductCard.jsx";
import AppLayout from "../layout/AppLayout.jsx";

import Category from "../components/Category.jsx";
import NotFound from "../pages/NotFound.jsx";
import PleasetWait from "../components/PleasetWait.jsx";
import ChaloRuko from "../components/ChaloRuko.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "products",
        loader: async () => {
          const res = await fetch("https://dummyjson.com/products");
          const data = await res.json();
          console.log(data.products);
         return data.products
        },
        HydrateFallback:PleasetWait,
        Component: Products,
        
      },
      {
        path: "products/:category",
        Component: Category,
        loader:()=>{},
        HydrateFallback:ChaloRuko
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
export default appRouter;
