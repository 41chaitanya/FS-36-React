import { createBrowserRouter } from "react-router";
import AppLayout from "../layout/AppLayout.jsx";
import Message from "../pages/Message.jsx";
import Reel from "../pages/Reel.jsx";
import Explore from "../pages/Explore.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
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
        path: "messages",
        Component: Message,
      },
      {
        path: "reels",
        Component: Reel,
      },
      {
        path: "explore",
        Component: Explore,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
]);

export default appRouter;
