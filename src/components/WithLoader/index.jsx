import React from "react";
import Spinner from "./Spinner";

export const withLoader = (Loader, WrappedComponent) => ({
  isLoading,
  ...otherProps
}) => (isLoading ? <Loader /> : <WrappedComponent {...otherProps} />);

export const withSpinner = (WrappedComponent) =>
  withLoader(Spinner, WrappedComponent);
