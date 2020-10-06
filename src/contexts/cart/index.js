import React, { createContext } from "react";
import useCart from "./useCart";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const cartState = useCart();

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
};
