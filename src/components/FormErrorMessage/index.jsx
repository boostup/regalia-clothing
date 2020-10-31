import React from "react";

import Container from "./form-error-message-styles";

function FormErrorMessage({ error }) {
  return error ? (
    <Container>{`${error.code} : ${error.message}`}</Container>
  ) : null;
}

export default FormErrorMessage;
