import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/actions";

import { withSpinner } from "../../components/WithLoader";

import CollectionsOverview from "../../components/CollectionsOverview";
import CollectionPage from "../CollectionPage";

function ShopPage({ match, updateCollections }) {
  const [loading, setLoading] = useState(true);

  const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
  const CollectionPageWithSpinner = withSpinner(CollectionPage);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    const unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        setLoading(false);
      }
    );

    return () => unsubscribeFromSnapshot();
  }, [updateCollections]);

  return (
    <div className="ShopPage">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
