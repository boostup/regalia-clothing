import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SignInAndSignOutPage from "./pages/SignInAndSignOutPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

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
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignOutPage} />
      </Switch>
    </div>
  );
}

export default App;
