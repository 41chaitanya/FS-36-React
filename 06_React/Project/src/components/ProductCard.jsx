import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-52 rounded-md bg-white p-3 shadow-sm">
      <img
        className="h-40 w-full object-contain"
        src={product.thumbnail}
        alt={product.title}
      />

      <h2 className="mt-2 truncate font-semibold">
        {product.title}
      </h2>

      <p className="text-sm text-gray-500">
        {product.brand}
      </p>

      <p className="mt-1 font-bold">
        ${product.price}
      </p>

      <p className="text-sm text-green-600">
        {product.discountPercentage}% off
      </p>
    </div>
  );
};

export default ProductCard;