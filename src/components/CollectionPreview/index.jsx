import React from "react";
import CollectionItem from "../CollectionItem";
import "./CollectionPreview.scss";

function CollectionPreview({ title, items }) {
  return (
    <div className="CollectionPreview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
