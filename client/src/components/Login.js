import React, { useState, useEffect, useImperativeHandle } from "react";
import { Router, Link, navigate } from "@reach/router";
import { useCookies } from "react-cookie";
import jwt_Decode from "jwt-decode";

import { signIn } from "../api/api";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["jwt"]);

  if (jwt_Decode(cookies.JWT).exp > new Date().getTime() / 1000) {
    console.log("Token is not expired.");
    navigate("userpage");
  }

  function handleSubmit(e) {
    e.preventDefault();

    //try signing in
    signIn({
      username: e.target.username.value,
      password: e.target.password.value
    })
      .then(res => {
        setCookie("JWT", res.token, { path: "/" });

        alert("Successful!!!");
        navigate("userpage");
      })
      .catch(err => console.log(err));
  }

  return (
    <div id="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username..."
          className="form-control"
          value={username}
          onChange={e => setUsername(e.target.value)}
          autoFocus
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          placeholder="Password..."
          className="form-control"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-light">
          Submit
        </button>
      </form>

      <Link to="/signup">create an account.</Link>
    </div>
  );
};

export default Login;
