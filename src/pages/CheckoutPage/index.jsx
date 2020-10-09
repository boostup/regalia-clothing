import React from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "../../components/CheckoutItem";
import StripeCheckoutButton from "../../components/StripeCheckoutButton";

import { selectCartItems, selectCartTotal } from "../../redux/cart/selectors";

import Container, { PayButtonWrapper } from "./checkout-page-styles";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div>
      <PayButtonWrapper>
        <StripeCheckoutButton price={total} />
      </PayButtonWrapper>
      <Container>
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

        <div className="test-warning">
          Test credit card for trying out payments :
        <br />
          <br />
        4242 4242 4242 4242 4242
        <br />
        Exp: 01/21*
        <br />
        CVV: 123
        <br />
          <br />
          <div className="note">
            *As of January 2021, the expiration date is <u>any future date</u>
          </div>
        </div>
      </Container>
    </div>

  );
};

export default CheckoutPage;
