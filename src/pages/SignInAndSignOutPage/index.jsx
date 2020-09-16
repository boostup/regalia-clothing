import React from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp/SignUp";

import "./SignInAndSignOutPage.scss";

function SignInAndSignOutPage() {
  return (
    <div className="SignInAndSignOutPage">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignOutPage;
