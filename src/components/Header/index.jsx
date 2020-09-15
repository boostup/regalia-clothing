import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
        <Link to="/signin" className="option">
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default Header;
