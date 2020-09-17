import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/actions";

import CustomButton from "../CustomButton";

import "./CollectionItem.scss";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;

  return (
    <div className="CollectionItem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
