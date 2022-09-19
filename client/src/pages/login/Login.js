import { Link } from "react-router-dom";
import "./login.css";
import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:8000/api/auth/login", {
          username: username,
          password: password,
        })
        .then((res) => console.log(res.data));
    } catch {
      setError("Username and password don't match!");
    }
  };
  return (
    <form className="container">
      <h2>Log In</h2>
      <div className="name">
        <label htmlFor="username">User name</label>
        <input
          required
          type="username"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="password">
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="loginBtn" type="submit" onClick={handleLogin}>
        LOG IN
      </button>

      <Link to="/register" name="register">
        <button className="btn">Register</button>
      </Link>
    </form>
  );
}
