import React from "react";

import {
  selectIsCollectionsLoaded,
  selectShopCollectionsForPreview,
} from "../../redux/shop/selectors";
import CollectionPreview from "../../components/CollectionPreview";

import Container from "./collections-overview-styles";
import { useSelector } from "react-redux";
import { useSpinningLoader } from "../Loadable";

const CollectionsOverview = () => {
  const collections = useSelector((state) =>
    selectShopCollectionsForPreview(state)
  );

  return (
    <Container>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </Container>
  );
};

export default () => {
  const isLoading = useSelector((state) => !selectIsCollectionsLoaded(state));
  const loader = useSpinningLoader(isLoading);
  return loader(CollectionsOverview);
};
