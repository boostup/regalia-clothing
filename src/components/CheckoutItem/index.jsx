import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart";

import Container from "./styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
  const addOne = () => addItem(cartItem);
  const subtractOne = () => removeItem(cartItem);
  const clearItem = () => clearItemFromCart(cartItem);

  return (
    <Container>
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={subtractOne}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addOne}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </Container>
  );
};

export default CheckoutItem;
