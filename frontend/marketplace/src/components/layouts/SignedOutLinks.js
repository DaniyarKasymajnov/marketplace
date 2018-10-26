import React from "react";
import { NavLink } from "react-router-dom";
import "../../signedOutLinks.css";

const SignedOutLinks = () => {
  return (
    <div className="nav-menu-right-wrapper">
      <div className="nav-menu-right">
        <ul className="nav-links">
          <li>
            <NavLink to="/sell">Sell on DnD</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Login</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SignedOutLinks;
