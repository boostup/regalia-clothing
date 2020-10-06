import React, { createContext } from "react";
import useFetchCollections from "./useFetchCollections";

export const CollectionsContext = createContext();

export const CollectionsContextProvider = ({ children }) => {
  const collectionsState = useFetchCollections();

  return (
    <CollectionsContext.Provider value={collectionsState}>
      {children}
    </CollectionsContext.Provider>
  );
};
