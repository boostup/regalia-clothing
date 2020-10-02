import React, { createContext } from "react";
import useFetchCollections from "./useFetchCollections";

export const Context = createContext();

export const CollectionsContext = ({ children }) => {
  const collectionsState = useFetchCollections();

  return (
    <Context.Provider value={collectionsState}>{children}</Context.Provider>
  );
};
