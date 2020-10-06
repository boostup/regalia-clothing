import React, { useContext } from "react";

import CheckoutItem from "../../components/CheckoutItem";
import StripeCheckoutButton from "../../components/StripeCheckoutButton";
import { CartContext } from "../../contexts/cart";

import Container from "./styles";

const CheckoutPage = () => {
  const { getTotal, getCartItems } = useContext(CartContext);
  const cartItems = getCartItems();
  const total = getTotal();

  return (
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
      <StripeCheckoutButton price={total} />
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
  );
};

export default CheckoutPage;
