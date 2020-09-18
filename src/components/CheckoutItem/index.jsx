import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="CheckoutItem">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

// const mapStateToProps = (state) =>
//   createStructuredSelector({ propName: selectorFunc });

// const mapDispatchToProps = (dispatch) => ({
//   propName: () => dispatch(actionFunc()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
export default CheckoutItem;
