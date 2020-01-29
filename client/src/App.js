import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import { CookiesProvider } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Userpage from "./components/Userpage";

const App = () => {
  return (
    <CookiesProvider>
      <div>
        <header>
          <Link to="login">Go to login</Link>
        </header>
        <Router>
          <Login path="login" />
          <Signup path="signup" />
          <Userpage path="userpage" />
        </Router>
      </div>
    </CookiesProvider>
  );
};

render(<App />, document.getElementById("root"));
