import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import { clearItemFromCart } from "../../redux/cart/actions";

import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="CheckoutItem">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

// const mapStateToProps = (state) =>
//   createStructuredSelector({ propName: selectorFunc });

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
