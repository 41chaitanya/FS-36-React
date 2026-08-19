import { createBrowserRouter } from "react-router";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Approuter from "../layout/Approuter.jsx";
import Products from "../pages/Products.jsx";
import ProductDetail from "../components/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Approuter,
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
        Component: Products,
      },
      {
        path: "products/:id",
        Component: ProductDetail,
      },
    ],
  },
]);
export default router;
