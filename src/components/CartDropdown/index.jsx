import React, { useContext } from "react";

import { useHistory } from "react-router-dom";
import { CartContext } from "../../contexts/cart";

import CartItem from "../CartItem";
import CustomButton from "../CustomButton";

import Container from "./styles";

const CartDropdown = () => {
  const history = useHistory();
  const { toggleCartDropdown, getCartItems } = useContext(CartContext);
  const cartItems = getCartItems();

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
          history.push("/checkout");
          toggleCartDropdown();
        }}
      >
        Go to checkout
      </CustomButton>
    </Container>
  );
};

export default CartDropdown;
