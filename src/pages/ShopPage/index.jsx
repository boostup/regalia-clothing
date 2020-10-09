import React, { lazy, Suspense, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/actions";

import Spinner from "../../components/Loadable/Spinner";
import ErrorBoundary from "../../components/ErrorBoundary";

const CollectionsOverview = lazy(() => import("../../components/CollectionsOverview"));
const CollectionPage = lazy(() => import("../CollectionPage"));

function ShopPage() {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="ShopPage">
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path={`${match.path}`} component={CollectionsOverview} />
          <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default ShopPage;
