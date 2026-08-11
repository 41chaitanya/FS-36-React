import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { PageProvider } from "./context/PageContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <PageProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </PageProvider>
  </ThemeProvider>,
);
