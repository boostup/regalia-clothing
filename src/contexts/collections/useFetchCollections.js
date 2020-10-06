import { useEffect, useState } from "react";
import memoize from "lodash.memoize";

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

const INITIAL_STATE = {
  collections: null,
  isLoading: false,
  error: undefined,
  getCollectionsAsArray: () => [],
  getCollection: () => ({ title: "", items: [] }),
};

export default () => {
  const [collectionsState, setCollectionsState] = useState(INITIAL_STATE);

  useEffect(() => {
    fetchCollectionsAsync(setCollectionsState);
  }, []);

  return collectionsState;
};

const fetchCollectionsAsync = async (setState) => {
  fetchCollectionsStart(setState);

  let collectionsMap, snapshot;
  try {
    if (process.env.NODE_ENV === "production") {
      const collectionsRef = firestore.collection("collections");
      snapshot = await collectionsRef.get();
      collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    }

    if (process.env.NODE_ENV === "development") {
      collectionsMap = await fetchFromLocalJSONFile();
      snapshot = { empty: false };
    }

    snapshot.empty
      ? fetchCollectionsFailure(setState, "collections collection is empty.")
      : fetchCollectionsSuccess(setState, collectionsMap);
  } catch (error) {
    fetchCollectionsFailure(setState, error.message);
  }
};

const fetchCollectionsStart = (setState) => {
  setState({
    ...INITIAL_STATE,
    isLoading: true,
  });
};

const fetchCollectionsSuccess = (setState, collectionsMap) => {
  setState({
    collections: collectionsMap,
    getCollectionsAsArray: () => convertCollectionsToArray(collectionsMap),
    getCollection: memoize((collectionId) => collectionsMap[collectionId]),
    isLoading: false,
  });
};

const fetchCollectionsFailure = (setState, error) => {
  setState({
    ...INITIAL_STATE,
    error,
  });
};

const convertCollectionsToArray = (collectionsObj) =>
  collectionsObj
    ? Object.keys(collectionsObj).map((key) => collectionsObj[key])
    : [];

const fetchFromLocalJSONFile = async () => {
  let collectionsMap;
  try {
    const collectionsJSON = require("./shop.data");
    collectionsMap = new Promise((resolve) => {
      setTimeout(() => {
        //using setTimeout to simulate an API request taking a bit of time
        resolve(collectionsJSON.default);
      }, 500);
    });
  } catch (error) {
    console.log(error);
  }

  return collectionsMap;
};
