import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "../../navbar/Hamburger";
import "./register.css";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const usernameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/api/auth/register", {
        username: usernameInput.current.value,
        email: emailInput.current.value,
        password: passwordInput.current.value,
      });
      res.data && navigate("/login");

      usernameInput.current.value = "";
      emailInput.current.value = "";
      passwordInput.current.value = "";
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  return (
    <div>
      <Hamburger />
      <form className="container">
        <h2>Register here</h2>

        <div className="name">
          <label htmlFor="username">User name</label>
          <input
            required
            type="text"
            ref={usernameInput}
            placeholder="Enter username"
          />
        </div>

        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            ref={emailInput}
            placeholder="Enter email"
          />
        </div>

        <div className="password">
          <label htmlFor="password">Enter Password</label>
          <input
            required
            type="text"
            ref={passwordInput}
            placeholder="Enter password"
          />
        </div>

        <button className="regBtn" type="submit" onClick={handleRegister}>
          Register
        </button>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Username or email already registered!
          </span>
        )}

        <Link to="/login" name="login">
          <button className="btn">Login</button>
        </Link>
      </form>
    </div>
  );
}
