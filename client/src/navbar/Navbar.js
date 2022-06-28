import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {BackpackOutlined,  PersonOutline, KeyboardArrowDown, Menu, Clear, Facebook, Instagram, Twitter, GitHub} from '@mui/icons-material';
import './navbar.css'

function Navbar() {
    const [nav, setNav]=useState(false);
    const handleClick = () => {
    setNav(!nav);
  }
  return (
    <div className= 'navbar'>
        <div className='nav-logo' >
            <BackpackOutlined />
            <h3>|TRAVEL BLOG|</h3>
        </div>
    
        <ul className='nav-menu'>
            <li><Link to='/' className='link'>Home</Link></li>
            <li><Link to='/destinations' className='link'>Destinations</Link></li>
            <li><Link to='/blogs' className='link'>Blogs</Link></li>
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
            <li><Link to='/' className='link'> Home</Link></li>
            <li><Link to='/destinations' className='link'>Destinations</Link></li>
            <li><Link to='/blogs' className='link'>Blogs</Link></li>
            </ul>
            <div className='mobile-menu-bottom'>
                <div className='mobile-btn'>
                    <button><Link to='/login' className='link'></Link>Login</button>
                    <button><Link to='/register' className='link'></Link>Register</button>
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