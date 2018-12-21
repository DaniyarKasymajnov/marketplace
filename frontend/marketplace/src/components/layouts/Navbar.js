import React from "react";
import CategoryNavbar from "./CategoryNavbar";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import "../../navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="top">
        <div className="left">
          <div className="logo">Handy</div>
          <div className="search">
            <form action="">
              <input type="text" placeholder="Search for items or shops" />
              <button>Search</button>
            </form>
          </div>
        </div>
        <div className="right">
          <SignedOutLinks />
        </div>
      </div>
      <div className="bottom">
        <CategoryNavbar />
      </div>
    </div>
  );
};

export default Navbar;
