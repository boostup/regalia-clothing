import { useEffect, useState } from "react";
import memoize from "lodash.memoize";

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

const INITIAL_STATE = {
  collections: null,
  isLoading: true,
  error: undefined,
  getCollectionsAsArray: () => {},
  getCollection: () => {},
};

export default () => {
  const [collectionsState, setCollectionsState] = useState(INITIAL_STATE);
  const fetchCollections = fetchCollectionsAsync(setCollectionsState);

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);
  return collectionsState;
};

const fetchCollectionsAsync = (setState) => async () => {
  try {
    const collectionsRef = firestore.collection("collections");
    const snapshot = await collectionsRef.get();
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    setState(
      snapshot.empty
        ? {
            ...INITIAL_STATE,
            isLoading: false,
            error: "collections collection is empty.",
          }
        : {
            collections: collectionsMap,
            getCollectionsAsArray: () =>
              convertCollectionsToArray(collectionsMap),
            getCollection: memoize(
              (collectionId) => collectionsMap[collectionId]
            ),
            isLoading: false,
            error: INITIAL_STATE.error,
          }
    );
  } catch (error) {
    setState({
      ...INITIAL_STATE,
      isLoading: false,
      error: error.message,
    });
  }
};

const convertCollectionsToArray = (collectionsObj) =>
  collectionsObj
    ? Object.keys(collectionsObj).map((key) => collectionsObj[key])
    : [];
