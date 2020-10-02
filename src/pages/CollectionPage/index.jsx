import React, { useContext } from "react";

import { useHistory, useParams } from "react-router-dom";

import { Context as CollectionsContext } from "../../contexts/collections";

import CollectionItem from "../../components/CollectionItem";
import { useSpinningLoader } from "../../components/Loadable";

import Container from "./styles";

const CollectionPage = () => {
  const history = useHistory();
  const { getCollection } = useContext(CollectionsContext);
  const { collectionId } = useParams();
  const { title, items } = getCollection(collectionId);

  return (
    <Container>
      <div className="back-button" onClick={(e) => history.goBack()}>
        <span className="nav-icon">&#10092;</span> back
      </div>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default () => {
  const { isLoading, error } = useContext(CollectionsContext);
  const loader = useSpinningLoader(isLoading);
  return loader(CollectionPage, error);
};
