import React, { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";

const App = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]); //cart 

  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      setAllProduct(data);
    })();
  }, []);

  const handleAddToCart = (product) => {
      setSelectedProduct((prev)=>[...prev,product])
  };


  const [showProduct, setShowProduct] = useState(true);

  return (
    <>
      <Nav setShowProduct={setShowProduct} />
      {showProduct ? (
        <Product
          allProduct={allProduct}
          handleAddToCart={handleAddToCart}
         
        />
      ) : (
        <Cart selectedProduct={selectedProduct}  />
      )}
    </>
  );
};

export default App;
