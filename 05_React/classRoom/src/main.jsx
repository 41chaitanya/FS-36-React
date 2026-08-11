import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShowProvider from "./context/showContext.jsx";
import ProductProvider from "./context/productContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <ShowProvider>
      <App />
    </ShowProvider>
  </ProductProvider>,
);
