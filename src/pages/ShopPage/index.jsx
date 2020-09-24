import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/selectors";
import { fetchCollectionsStartAsync } from "../../redux/shop/actions";

import { withSpinner } from "../../components/WithLoader";

import CollectionsOverview from "../../components/CollectionsOverview";
import CollectionPage from "../CollectionPage";

function ShopPage({
  match,
  isCollectionsFetching,
  isCollectionsLoaded,
  fetchCollectionsStartAsync,
}) {
  const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
  const CollectionPageWithSpinner = withSpinner(CollectionPage);

  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="ShopPage">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner
            isLoading={isCollectionsFetching}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
