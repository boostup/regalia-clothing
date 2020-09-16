import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SignInAndSignOutPage from "./pages/SignInAndSignOutPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/actions";

function App({ setCurrentUser }) {
  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //when user Signs IN
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      //when user Signs OUT => userAuth === null
      setCurrentUser(userAuth);
    });
    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignOutPage} />
      </Switch>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
