import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../redux/cart/actions";

import CustomButton from "../CustomButton";

import Container from "./collection-item-styles";

function CollectionItem({ item }) {
  const { name, price, imageUrl } = item;

  const dispatch = useDispatch();
  const addItemToCart = (item) => dispatch(addItem(item));

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
