import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/selectors";
import { toggleCartHidden } from "../../redux/cart/actions";

import CartItem from "../CartItem";
import CustomButton from "../CustomButton";

import Container from "./styles";

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();

  return (
    <Container>
      <div className="items">
        {!cartItems.length ? (
          <span className="empty-message">Your cart is empty</span>
        ) : null}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go to checkout
      </CustomButton>
    </Container>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({ cartItems: selectCartItems });

export default connect(mapStateToProps)(CartDropdown);
