import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

import CollectionsOverview from "../../components/CollectionsOverview";
import CollectionPage from "../CollectionPage";
import { CollectionsContextProvider } from "../../contexts/collections";

function ShopPage() {
  const match = useRouteMatch();

  return (
    <div className="ShopPage">
      <CollectionsContextProvider>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </CollectionsContextProvider>
    </div>
  );
}

export default ShopPage;
