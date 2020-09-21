import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import CollectionItem from "../CollectionItem";
import "./CollectionPreview.scss";

function CollectionPreview({ title, routeName, items }) {
  const history = useHistory();
  const { path } = useRouteMatch();
  return (
    <div className="CollectionPreview">
      <h1
        className="title"
        onClick={(e) => history.push(`${path}/${routeName}`)}
      >
        {title} <span className="nav-icon">&#10093;</span>
      </h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
