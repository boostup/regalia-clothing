import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import {
  addItem,
  removeItem,
  clearItemFromCart,
} from "../../redux/cart/actions";

import Container from "./styles";

const CheckoutItem = ({ cartItem, addOne, subtractOne, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <Container>
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => subtractOne(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addOne(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </Container>
  );
};

// const mapStateToProps = (state) =>
//   createStructuredSelector({ propName: selectorFunc });

const mapDispatchToProps = (dispatch) => ({
  addOne: (item) => dispatch(addItem(item)),
  subtractOne: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
