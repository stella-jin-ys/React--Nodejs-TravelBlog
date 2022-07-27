import React from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import RegisterForm from "./RegisterForm";

export default function Register() {
  const navigate = useNavigate();

  function registerUser(newUser) {
    fetch(
      "https://travel-blog-a7715-default-rtdb.europe-west1.firebasedatabase.app/users.json",
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }

  return <RegisterForm registerUser={registerUser} />;
}
