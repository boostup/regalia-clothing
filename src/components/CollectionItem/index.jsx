import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/actions";

import CustomButton from "../CustomButton";

import Container from "./styles";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;

  return (
    <Container>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton className="button" inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
