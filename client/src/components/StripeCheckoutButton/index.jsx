import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HU5U2KAQTtsBep1dQ8uL4AH0zOMK8UdgDmATRQTfitDrs7KOODaw7Xxv6wwVOIwULhjVmtD8BrjkzfSMXFFsF1J00XkMBfntR";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("payment successful");
      })
      .catch((error) => {
        console.log("Payment error:", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided TEST credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Regalia Clothing Ltd."
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
