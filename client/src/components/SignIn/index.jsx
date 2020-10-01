import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../FormInput";
import CustomButton from "../CustomButton";

import { emailSignInStart, googleSignInStart } from "../../redux/user/actions";

import Container from "./styles";

const SignIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userData;

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Container>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
          // autoComplete="current-email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
          // autoComplete="current-password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </Container>
  );
};

export default SignIn;
