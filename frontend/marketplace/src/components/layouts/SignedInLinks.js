import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/sell">Sell on DnD</NavLink>
      </li>
      {/* <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li> */}
    </ul>
  );
};

export default SignedInLinks;
