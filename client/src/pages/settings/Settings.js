import React from "react";
import { PersonOutline } from "@mui/icons-material";
import "./settings.css";

function Settings() {
  return (
    <div className="settings">
      <div className="setting-title">
        <span>Update your account</span>
        <span>Delete your account</span>
      </div>
      <form className="setting-form">
        <label htmlFor="">Profile Picture</label>
        <div>
          <img src="" alt="" />
          <label htmlFor="fileInput">
            <PersonOutline />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
        </div>
        <label>Username</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
      </form>
    </div>
  );
}

export default Settings;
