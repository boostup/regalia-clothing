import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections && Object.keys(collections).length > 0
      ? Object.keys(collections).map((key) => collections[key])
      : {}
);

export const seclectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);

//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15213926#questions/7711480
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections //!! (double bang) converts a falsy value into a Boolean.  Could have used `Boolean(shop.collections)` instead for the same result, but it seems double bang is HYPE among senior devs !
);
