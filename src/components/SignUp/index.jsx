import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../redux/user/actions";

import CustomButton from "../CustomButton";
import FormInput from "../FormInput";

import Container from "./styles";

const SignUp = () => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userData;

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
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
      <span>Sign up with your email and password</span>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
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
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </Container>
  );
};

export default SignUp;
