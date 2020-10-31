import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import { selectCurrentUser } from "../../redux/user/selectors";
import { signOutStart } from "../../redux/user/actions";
import { selectCartHidden } from "../../redux/cart/selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import Container from "./header-styles";
import Link from "../ScrollToTop/Link";

function Header() {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();

  return (
    <Container>
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <a href="https://github.com/boostup" className="option">
          Contact
        </a>

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
      {hidden ? null : <CartDropdown />}
    </Container>
  );
}

export default Header;
