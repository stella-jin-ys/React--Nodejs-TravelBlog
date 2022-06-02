import React,{useState} from 'react';
import {BackpackOutlined, Search} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact'


export default function Header() {
    const [inputValue, setInputValue] = useState('')
  
    const inputChange = (e) => {
        console.log(e.target.value);
    setInputValue(e.target.value)
}
  return (
    <div>
        <div>
            <BackpackOutlined />
            <p>Travel Blog</p>
        </div>
        
        <div>
            <Search />
            <input type="text" 
            value={inputValue}
            onChange={inputChange}/>
        </div>
      
      
    </div>
  );
}
