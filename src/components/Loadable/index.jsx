import React from "react";
import Spinner from "./Spinner";

export const loader = (isLoading, Loader, WrappedComponent) =>
  isLoading ? <Loader /> : <WrappedComponent />;

export const useSpinningLoader = (isLoading) => (WrappedComponent) =>
  loader(isLoading, Spinner, WrappedComponent);
