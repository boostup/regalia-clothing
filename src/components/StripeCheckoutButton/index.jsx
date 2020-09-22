import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./StripeCheckoutButton.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HU5U2KAQTtsBep1dQ8uL4AH0zOMK8UdgDmATRQTfitDrs7KOODaw7Xxv6wwVOIwULhjVmtD8BrjkzfSMXFFsF1J00XkMBfntR";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="images/stripe/crown-logo.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
