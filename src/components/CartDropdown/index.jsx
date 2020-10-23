import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../redux/cart/selectors";
import { toggleCartHidden } from "../../redux/cart/actions";

import Link from "../ScrollToTop/Link";
import CartItem from "../CartItem";
import CustomButton from "../CustomButton";

import Container from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="items">
        {!cartItems.length ? (
          <span className="empty-message">Your cart is empty</span>
        ) : null}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
        }}
      >
        <Link to="/checkout">Go to checkout</Link>
      </CustomButton>
    </Container>
  );
};

export default CartDropdown;
