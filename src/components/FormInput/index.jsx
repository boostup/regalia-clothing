import React from "react";

import "./FormInput.scss";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input
        type="text"
        className="FormInput"
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
    </div>
  );
}

export default FormInput;
