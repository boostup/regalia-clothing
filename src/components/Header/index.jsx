import { auth } from "../../firebase/firebase.utils";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

function Header({ currentUser, hidden }) {
  let history = useHistory();
  const onSignOut = () => {
    auth.signOut();
    history.push("/");
  };

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

        {currentUser ? (
          <div className="option" onClick={onSignOut}>
            Sign out
          </div>
        ) : (
          <Link to="/signin" className="option">
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
