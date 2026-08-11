import React, { useContext } from "react";
import { productContext } from "../context/productContext.jsx";

const ProductCard = ({ product}) => {

  const {handleAddToCart}=useContext(productContext)
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200">
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col gap-3">
        {/* Category */}
        <span className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-3">
          {product.description}
        </p>

        {/* Price & Rating */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
            <span>⭐</span>
            <span className="font-medium">
              {product.rating.rate}
            </span>
            <span className="text-gray-500 text-sm">
              ({product.rating.count})
            </span>
          </div>
        </div>

        {/* Button */}
        <button onClick={()=>handleAddToCart(product)} className="mt-3 w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;