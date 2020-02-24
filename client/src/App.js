import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import jwt_Decode from "jwt-decode";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [signedOut, setSignedOut] = useState(false);

  function signOut() {
    localStorage.clear();
    setSignedOut(true);
  }

  useEffect(() => {
    if (
      localStorage.getItem("JWT") &&
      jwt_Decode(localStorage.getItem("JWT")).exp > new Date().getTime() / 1000
    ) {
      setLoggedIn(true);
      setSignedOut(false);
    } else {
      setLoggedIn(false);
    }
  }, [signedOut]);

  return (
    <Router>
      <div>
        <nav>
          {loggedIn ? (
            <ul>
              <li>
                <Link to="/">
                  <button type="button" onClick={signOut}>
                    Sign out
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard!</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/signin">
                  <button type="button">Sign in</button>
                </Link>
              </li>
            </ul>
          )}
        </nav>

        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

render(<App />, document.getElementById("root"));
