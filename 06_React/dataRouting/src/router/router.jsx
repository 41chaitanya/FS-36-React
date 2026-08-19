import { createBrowserRouter } from "react-router";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Hero from "../components/Hero.jsx";
import Profile from "../components/Profile.jsx";
import ProfileSetting from "../components/ProfileSetting.jsx";
import AppLayout from "../layouts/AppLayout.jsx";

const routerChacah = createBrowserRouter([
  {
    path: "/",
   
    children: [
      {
      index:true,
        Component: Contact,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "dashboard",
        Component: Dashboard,
        children: [
          {
            path: "contact",
            Component: Contact,
          },
          {
            path: "profile",
            Component: Profile,
            children: [
              {
                path: "setting",
                Component: ProfileSetting,
              },
            ],
          },
          {
            index: true,
            Component: Hero,
          },
        ],
      },
    ],
  },
  {
    path:"/chacha",
    Component:()=>{
        return(<div>

            hello
        </div>)
    }


  }
]);
export default routerChacah;


