import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import appRouter from "./router/appRouter.jsx";
import { StoriesProvider } from "./context/StoriesContaxt.jsx";
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserProvider>

    <RouterProvider router={appRouter} />
  </UserProvider>

);
