import React from "react";

import CustomButton from "../CustomButton";

import "./CollectionItem.scss";

function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className="CollectionItem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted>Add to Cart</CustomButton>
    </div>
  );
}

export default CollectionItem;
