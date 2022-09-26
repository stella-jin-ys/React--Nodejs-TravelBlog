import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  BackpackOutlined,
  PersonOutline,
  KeyboardArrowDown,
  Menu,
  Clear,
  Facebook,
  Instagram,
  Twitter,
  GitHub,
} from "@mui/icons-material";
import "./navbar.css";
import { Context } from "../contexts/userContext/Context";

function Navbar() {
  const { user, dispatch } = useContext(Context);

  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <BackpackOutlined />
        <h3>|TRAVEL BLOG|</h3>
      </div>

      <ul className="nav-menu">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="link">
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/blogs/newpost" className="link">
            Write Blog
          </Link>
        </li>
        <li>
          <Link to="/login" className="link">
            Login/ Register
          </Link>
        </li>
      </ul>
      <div className="nav-icon">
        <PersonOutline />
        <KeyboardArrowDown />
      </div>

      <div className="hamburger" onClick={handleClick}>
        {nav ? <Clear /> : <Menu />}
      </div>
      <div className={nav ? "mobile-nav active" : "mobile-nav"}>
        <ul className="mobile-menu">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="link">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/blogs/newpost" className="link">
              Write Blog
            </Link>
          </li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="mobile-btn">
            {user ? (
              <Link to="/" className="link">
                <button onClick={handleLogout}>Log out</button>
              </Link>
            ) : (
              <Link to="/login" className="link">
                <button>Log in</button>
              </Link>
            )}

            <Link to="/register" className="link">
              <button>Register</button>
            </Link>
          </div>
          <div className="mobile-icon">
            <Facebook className="icon" />
            <Instagram className="icon" />
            <Twitter className="icon" />
            <GitHub className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
