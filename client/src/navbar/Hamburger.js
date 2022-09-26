import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Clear,
  Facebook,
  Instagram,
  Twitter,
  GitHub,
} from "@mui/icons-material";
import "./hamburger.css";
import { Context } from "../contexts/userContext/Context";

function Hamburger() {
  const { user } = useContext(Context);
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div>
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
            <Link to="/blogs/newpost" className="link">
              Write Blog
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="link">
              Blogs
            </Link>
          </li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="mobile-btn">
            {user ? (
              <Link to="/" className="link">
                <button>Log out</button>
              </Link>
            ) : (
              <Link to="/login" className="link">
                <button>Log in</button>
              </Link>
            )}
            <button>
              <Link to="/register" className="link"></Link>Register
            </button>
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

export default Hamburger;
