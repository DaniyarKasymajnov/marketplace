import React from "react";
import { NavLink } from "react-router-dom";
import "../../signedOutLinks.css";

const SignedOutLinks = () => {
  return (
    <div className="nav-menu-right-wrapper">
      <div className="nav-menu-right">
        <ul className="nav-links">
          <li>
            <NavLink to="/sell">Sell on Handy</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink className="signin" to="/signin">
              Sign in
            </NavLink>
          </li>
          <li className="icon">
            <NavLink to="/cart">
              <span>
                <i className="fas fa-shopping-cart" />
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SignedOutLinks;
