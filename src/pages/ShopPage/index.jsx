import React, { useState } from "react";
import CollectionPreview from "../../components/CollectionPreview";

import collectionsData from "./shop.data";

function ShopPage() {
  const [collections, setCollections] = useState(collectionsData);

  return (
    <div className="ShopPage">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default ShopPage;
