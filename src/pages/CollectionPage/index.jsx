import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import CollectionItem from "../../components/CollectionItem";
import { useSpinningLoader } from "../../components/Loadable";
import {
  seclectCollection,
  selectIsCollectionsLoaded,
} from "../../redux/shop/selectors";

import Container from "./collection-page-styles";

const CollectionPage = () => {
  const history = useHistory();
  const { collectionId } = useParams();
  const collection = useSelector((state) =>
    seclectCollection(collectionId)(state)
  );
  const { title, items } = collection;

  return (
    <Container>
      <div className="nav-bar">
        <h1 className="title">{title}</h1>
        <span className="nav-icon" onClick={(e) => history.goBack()}>&lsaquo;&nbsp;Back</span>
      </div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default () => {
  const isLoading = useSelector((state) => !selectIsCollectionsLoaded(state));
  const loader = useSpinningLoader(isLoading);
  return loader(CollectionPage);
};
