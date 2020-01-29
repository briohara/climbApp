import React, { useState, useEffect, useImperativeHandle } from "react";
import { Router, Link, navigate } from "@reach/router";

import { createUser } from "../api/api";
import Login from "./Login";

const Signup = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    createUser({
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value
    })
      .then(navigate("login"))
      .catch(alert("Username/Password is invalid."));
  }

  // Add validation to form
  return (
    <div id="sign-up-form">
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
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Email..."
          className="form-control"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-light">
          Submit
        </button>
      </form>

      <Link to="/login">login to an account.</Link>
    </div>
  );
};

export default Signup;
