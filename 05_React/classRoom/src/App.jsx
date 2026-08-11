import React, { useContext, useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import { showContext } from "./context/showContext.jsx";
import { productContext } from "./context/productContext.jsx";

const App = () => {

  const [selectedProduct, setSelectedProduct] = useState([]); //cart 



  const {showProduct}=useContext(showContext)

  return (
    <>
      <Nav  />


      
      {showProduct ? (
        <Product
          
         
        />
      ) : (
        <Cart selectedProduct={selectedProduct}  />
      )}
    </>
  );
};

export default App;
