import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../../navbar/Hamburger";
import "./register.css";

export default function Register() {
  const usernameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  return (
    <div>
      <Hamburger />
      <form className="container">
        <h2>Sign up</h2>
        <div className="name">
          <label htmlFor="username">Username</label>
          <input
            required
            type="text"
            ref={usernameInput}
            placeholder="Enter username"
          />
        </div>

        <div className="email">
          <label htmlFor="email">Username</label>
          <input
            required
            type="email"
            ref={emailInput}
            placeholder="Enter email"
          />
        </div>

        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            ref={passwordInput}
            placeholder="Enter password"
          />
        </div>

        <button className="regBtn" type="submit">
          Register
        </button>

        <Link to="/login" name="login">
          <button className="btn">Login</button>
        </Link>
      </form>
    </div>
  );
}
