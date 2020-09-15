import React from "react";

import "./CollectionItem.scss";

function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className="CollectionItem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

export default CollectionItem;
