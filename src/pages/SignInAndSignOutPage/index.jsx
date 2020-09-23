import React from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

import Container from "./styles";

function SignInAndSignOutPage() {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
}

export default SignInAndSignOutPage;
