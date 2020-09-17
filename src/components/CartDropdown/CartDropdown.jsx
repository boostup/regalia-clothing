import React from "react";

import CustomButton from "../CustomButton";

import "./CartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="CartDropdown">
      <div className="items" />
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
