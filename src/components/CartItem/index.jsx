import React from "react";

import Container from "./styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <Container>
      <img src={imageUrl} alt="item" />
      <div className="details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </Container>
  );
};

export default CartItem;
