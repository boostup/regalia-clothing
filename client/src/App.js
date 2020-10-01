import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SignInAndSignOutPage from "./pages/SignInAndSignOutPage";
import CheckoutPage from "./pages/CheckoutPage";

import { selectCurrentUser } from "./redux/user/selectors";
import { checkUserSession } from "./redux/user/actions";

function App() {
  const currentUser = useSelector((state) => selectCurrentUser(state));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignOutPage />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
