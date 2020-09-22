import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/actions";
import { selectCartItemsCount } from "../../redux/cart/selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import Container from "./styles";

const CartIcon = ({ itemCount, toggleCartHidden }) => {
  return (
    <Container onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </Container>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    itemCount: selectCartItemsCount,
  });

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
