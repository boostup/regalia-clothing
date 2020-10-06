import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import Container from "./styles";

const CartIcon = () => {
  const { toggleCartDropdown, getItemsCount } = useContext(CartContext);

  return (
    <Container onClick={() => toggleCartDropdown()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{getItemsCount()}</span>
    </Container>
  );
};

export default CartIcon;
