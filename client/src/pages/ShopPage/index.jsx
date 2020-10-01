import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/actions";

import CollectionsOverview from "../../components/CollectionsOverview";
import CollectionPage from "../CollectionPage";

function ShopPage() {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="ShopPage">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default ShopPage;
