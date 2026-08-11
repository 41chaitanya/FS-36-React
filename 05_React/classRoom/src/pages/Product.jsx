import { useContext } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { productContext } from "../context/productContext.jsx";

const Product = () => {
  
  const {allProduct}=useContext(productContext)

  


  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {allProduct.map((product) => (
        <ProductCard key={product.id} product={product}  />
      ))}
    </div>
  );
};

export default Product;