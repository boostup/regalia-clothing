import React from "react";

import Container from "./form-input-styles";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <Container>
      <input
        type="text"
        className="formInput"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          // htmlFor=""
          className={`${otherProps.value.length ? "shrink" : ""} label`}
        >
          {label}
        </label>
      ) : null}
    </Container>
  );
}

export default FormInput;
