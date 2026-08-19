import React from "react";
import { NavLink } from "react-router";

const Nav = () => {
  return (
    <nav className="flex gap-6 bg-blue-600 px-6 py-4 text-white">
      <NavLink
        className={({ isActive }) =>
          isActive ? "font-bold border-b-2 border-white" : ""
        }
        to="/products"
      >
        Ecommerce
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "font-bold border-b-2 border-white" : ""
        }
        to="travels"
      >
        Travel
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "font-bold border-b-2 border-white" : ""
        }
        to="grocery"
      >
        Grocery
      </NavLink>
    </nav>
  );
};

export default Nav;