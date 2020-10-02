import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

import CollectionsOverview from "../../components/CollectionsOverview";
import CollectionPage from "../CollectionPage";
import { CollectionsContext } from "../../contexts/collections";

function ShopPage() {
  const match = useRouteMatch();

  return (
    <div className="ShopPage">
      <CollectionsContext>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </CollectionsContext>
    </div>
  );
}

export default ShopPage;
