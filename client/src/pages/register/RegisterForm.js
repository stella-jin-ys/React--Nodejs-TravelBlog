import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../../navbar/Hamburger";

export default function RegisterForm(props) {
  const usernameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const username = usernameInput.current.value;
    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    props.registerUser(newUser);
  };
  return (
    <div>
      <Hamburger />
      <form className="container" onSubmit={submitHandler}>
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

        <button className="regBtn" type="submit" onClick={submitHandler}>
          Register
        </button>

        <Link to="/login" name="login">
          <button className="btn">Login</button>
        </Link>
      </form>
    </div>
  );
}
