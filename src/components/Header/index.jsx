import { auth } from "../../firebase/firebase.utils";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import { selectCurrentUser } from "../../redux/user/selectors";
import { selectCartHidden } from "../../redux/cart/selectors";

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

const mapStateToProps = (state) =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  });

export default connect(mapStateToProps)(Header);
