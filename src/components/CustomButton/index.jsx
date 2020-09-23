import React from "react";

import Container from "./styles";

const CustomButton = ({ children, ...otherProps }) => (
  <Container {...otherProps}>{children}</Container>
);

export default CustomButton;
