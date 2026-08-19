import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { Outlet } from "react-router";

const Ecommerce = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
         <Outlet/>
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        Ecommerce
      </h1>

      <div className="flex flex-wrap gap-4">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
            />
          );
        })}
       
      </div>
    </div>
  );
};

export default Ecommerce;