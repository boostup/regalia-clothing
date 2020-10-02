import React, { useContext } from "react";

import CollectionPreview from "../../components/CollectionPreview";

import { Context as CollectionsContext } from "../../contexts/collections";

import Container from "./styles";
import { useSpinningLoader } from "../Loadable";

const CollectionsOverview = () => {
  const { getCollectionsAsArray } = useContext(CollectionsContext);
  const collections = getCollectionsAsArray();

  return (
    <Container>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </Container>
  );
};

export default () => {
  const { isLoading, error } = useContext(CollectionsContext);
  const loader = useSpinningLoader(isLoading);
  return loader(CollectionsOverview, error);
};
