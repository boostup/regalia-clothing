import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header";
import Spinner from "./components/Loadable/Spinner";
import ErrorBoundary from "./components/ErrorBoundary";

import { GlobalStyle } from "./global.styles";

import { selectCurrentUser } from "./redux/user/selectors";
import { checkUserSession } from "./redux/user/actions";

const HomePage = lazy(() => import("./pages/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const SignInAndSignOutPage = lazy(() => import("./pages/SignInAndSignOutPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));


function App() {
  const currentUser = useSelector((state) => selectCurrentUser(state));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <div className="page-content">
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
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
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    </div>
  );
}

export default App;
