import React, { useContext } from "react";
import { showContext } from "../context/showContext.jsx";

const Nav = () => {
  const {setShowProduct}=useContext(showContext)
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          ShopEase
        </h1>

        <div className="flex items-center gap-4">
          <button onClick={()=>{setShowProduct(true)}} className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-200">
            Products
          </button>

          <button onClick={()=>{setShowProduct(false)}} className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition duration-200">
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;