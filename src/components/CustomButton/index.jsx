import React from "react";

import Container from "./custom-button-styles";

const CustomButton = ({ children, ...otherProps }) => (
  <Container {...otherProps}>{children}</Container>
);

export default CustomButton;
