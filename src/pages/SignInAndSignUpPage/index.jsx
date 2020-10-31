import React from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

import Container from "./sigin-and-signup-page-styles";

function SignInAndSignUpPage() {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
}

export default SignInAndSignUpPage;
