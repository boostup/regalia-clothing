import React from "react";
import Spinner from "./Spinner";
import Error from "../Error";

export const loader = (isLoading, Loader, error, WrappedComponent) =>
  isLoading ? (
    <Loader />
  ) : error ? (
    <Error message={error} />
  ) : (
    <WrappedComponent />
  );

export const useSpinningLoader = (isLoading) => (WrappedComponent, error) =>
  loader(isLoading, Spinner, error, WrappedComponent);
