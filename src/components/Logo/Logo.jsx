import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo-container">
      <NavLink to={"/"} className="logo">
        Jonathan.V
      </NavLink>
    </div>
  );
};

export default Logo;
