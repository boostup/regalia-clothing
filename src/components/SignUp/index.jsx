import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signUpStart, signUpFailure } from "../../redux/user/actions";

import CustomButton from "../CustomButton";
import FormInput from "../FormInput";
import FormErrorMessage from "../FormErrorMessage";

import Container from "./sign-up-styles";

const SignUp = () => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userData;

  const signUpError = useSelector((state) => state.user.signUpError);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      dispatch(
        signUpFailure({
          code: "passwords unmatched",
          message:
            "the provided password and password confirmation do not match",
        })
      );
      return;
    }
    dispatch(signUpStart({ displayName, email, password }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [name]: value,
      };
    });
  };

  return (
    <Container>
      <h2 className="title">I do not have an account</h2>
      <span className="instructions">Sign up with your email and password</span>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <FormErrorMessage error={signUpError} />
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          // autoComplete="new-displayName"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          // autoComplete="new-email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          // autoComplete="new-password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          // autoComplete="confirm-password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
