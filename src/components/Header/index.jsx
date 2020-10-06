import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CartContext } from "../../contexts/cart";

import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import { selectCurrentUser } from "../../redux/user/selectors";
import { signOutStart } from "../../redux/user/actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import Container from "./styles";

function Header() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const { isCartHidden } = useContext(CartContext);

  return (
    <Container>
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
          <div className="option" onClick={() => dispatch(signOutStart())}>
            Sign out
          </div>
        ) : (
          <Link to="/signin" className="option">
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartHidden() ? null : <CartDropdown />}
    </Container>
  );
}

export default Header;
