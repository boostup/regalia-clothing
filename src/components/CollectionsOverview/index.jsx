import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectIsCollectionsFetching,
  selectShopCollectionsForPreview,
} from "../../redux/shop/selectors";
import CollectionPreview from "../../components/CollectionPreview";
import { withSpinner } from "../../components/WithLoader";

import Container from "./styles";

const CollectionsOverview = ({ collections }) => {
  return (
    <Container>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
  collections: selectShopCollectionsForPreview,
});

export default compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);
