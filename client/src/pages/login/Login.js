import {Link} from 'react-router-dom';
import './login.css';
import React from 'react';



export default function Login() {
  return (
    <form className='container' >
      <h2>Log In</h2>
      <div className='name'>
        <label htmlFor="username">Username</label>
        <input required type="text" placeholder='Enter username'
        />
      </div>

      <div className='password'>
        <label htmlFor="password">Password</label>
        <input required type="password" placeholder='Enter password' 
        />
      </div>

      <button className='loginBtn' type='submit'>LOG IN</button>
     
      <Link to='/register' name='register'>
        <button className='btn'>Register</button>
      </Link>
    </form>  
  )}

 
