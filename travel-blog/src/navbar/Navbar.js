import React,{useState} from 'react';
import {BackpackOutlined, Search} from '@mui/icons-material';
import './NavbarStyles.css'

function Navbar() {
    const [inputValue, setInputValue] = useState('')
  
    const inputChange = (e) => {
        console.log(e.target.value);
    setInputValue(e.target.value)
}
  return (
    <div className='navbar'>
        <div className='nav-logo' >
            <BackpackOutlined />
            <p>Travel Blog</p>
        </div>
        <div className='nav-search'>
            <Search />
            <input type="text" 
            value={inputValue}
            onChange={inputChange}/>
        </div>
        <ul className='nav-menu'>
            <li>About</li>
            <li>Blogs</li>
            <li>Community</li>
            <li>Contact</li>
        </ul>
      
    </div>
  );
}

export default Navbar