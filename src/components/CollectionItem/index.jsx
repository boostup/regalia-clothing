import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart";

import CustomButton from "../CustomButton";

import Container from "./styles";

function CollectionItem({ item }) {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);

  const addItemToCart = (item) => addItem(item);

  return (
    <Container>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        className="button"
        inverted
        onClick={() => addItemToCart(item)}
      >
        Add to Cart
      </CustomButton>
    </Container>
  );
}

export default CollectionItem;
