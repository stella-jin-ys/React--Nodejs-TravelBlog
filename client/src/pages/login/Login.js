import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import React, { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../contexts/userContext/Context";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:8000/api/auth/login", {
        username: username,
        password: password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
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

      <button
        className="loginBtn"
        type="submit"
        onClick={handleLogin}
        disabled={isFetching}
      >
        LOG IN
      </button>

      <Link to="/register" name="register">
        <button className="btn">Register</button>
      </Link>
    </form>
  );
}
