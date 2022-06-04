import React, {useState} from 'react';
import {BackpackOutlined,  PersonOutline, KeyboardArrowDown, Menu, Clear, Facebook, Instagram, Twitter, GitHub} from '@mui/icons-material';
import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav]=useState(false)
  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <div className= 'navbar'>
        <div className='nav-logo' >
            <BackpackOutlined />
            <h3>|TRAVEL BLOG|</h3>
        </div>
    
        <ul className='nav-menu'>
            <li>About</li>
            <li>Blogs</li>
            <li>Community</li>
            <li>Contact</li>
        </ul>
        <div className='nav-icon'>
            <PersonOutline />
            <KeyboardArrowDown />
        </div>
    
        <div className='hamburger' onClick={handleClick}>
            {nav ? <Clear /> : <Menu  />}
        </div>
        <div className={nav ? 'mobile-nav active' : 'mobile-nav'}>
            <ul className='mobile-menu'>
                <li>About</li>
                <li>Blogs</li>
                <li>Community</li>
                <li>Contact</li>
            </ul>
            <div className='mobile-menu-bottom'>
                <div className='mobile-btn'>
                    <button>Login</button>
                    <button>Register</button>
                </div>
                <div className='mobile-icon'>
                    <Facebook className='icon' />
                    <Instagram className='icon' />
                    <Twitter className='icon' />
                    <GitHub className='icon' />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;