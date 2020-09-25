import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/actions";

import CollectionsOverview from "../../components/CollectionsOverview";
import CollectionPage from "../CollectionPage";

function ShopPage({ match, fetchCollectionsStart }) {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="ShopPage">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
