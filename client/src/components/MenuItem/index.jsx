import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import Container from "./styles";

function MenuItem({ title, imageUrl, size, linkUrl }) {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <Container
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </Container>
  );
}

export default MenuItem;
