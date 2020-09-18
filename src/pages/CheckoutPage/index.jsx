import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/CheckoutItem";

import { selectCartItems, selectCartTotal } from "../../redux/cart/selectors";

import "./CheckoutPage.scss";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="CheckoutPage">
      <div className="thead">
        <div className="th">Product</div>
        <div className="th">Description</div>
        <div className="th">Quantity</div>
        <div className="th">Price</div>
        <div className="th">Remove</div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
