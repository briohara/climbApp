import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import jwt_Decode from "jwt-decode";

import Button from "@material-ui/core/Button";

import Main from "./components/Main";
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
  }, [signedOut, loggedIn]);

  return (
    <Router>
      <div>
        <header>
          <nav>
            {loggedIn ? (
              <ul>
                <li>
                  <Link to="/dashboard">
                    <Button variant="outlined" color="primary">
                      Dashboard!
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={signOut}
                    >
                      Sign out
                    </Button>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/signin">
                    <Button variant="outlined" color="primary">
                      Sign in
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </header>

        <Switch>
          <Route path="/signin">
            <SignIn setLoggedIn={setLoggedIn} />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

render(<App />, document.getElementById("root"));
