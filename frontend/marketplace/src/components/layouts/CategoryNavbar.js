import React from "react";
import { NavLink } from "react-router-dom";
import "../../categoryNavbar.css";

const CategoryNavbar = () => {
  return (
    <div className="sub-nav-wrapper">
      <div className="sub-nav">
        <ul className="catNav-links">
          <li className="jewels-btn">
            <NavLink to="/jewellery-and-accessories">
              Jewellery & Accessories
            </NavLink>
          </li>
          <li>
            <NavLink to="/clothing-and-shoes">Clothing & Shoes</NavLink>
          </li>
          <li>
            <NavLink to="/home-and-living">Home & Living</NavLink>
          </li>
          <li>
            <NavLink to="/wedding-and-party">Wedding & party</NavLink>
          </li>
          <li>
            <NavLink to="/toys-and-entertainment">Toys & Entertainment</NavLink>
          </li>
          <li>
            <NavLink to="/art-and-collectibles">Art & Collectibles</NavLink>
          </li>
          <li>
            <NavLink to="/craft-and-tool">Cratf & Tools</NavLink>
          </li>
          <li>
            <NavLink to="/vintage">Vintage</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryNavbar;
