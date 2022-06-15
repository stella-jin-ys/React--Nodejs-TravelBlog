import {Link} from 'react-router-dom';
import './register.css';
import React from 'react';



export default function Register() {
  return (
    <form className='container' >
      <h2>Sign up</h2>
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

      <button className='regBtn' type='submit'>Register</button>
     
      <Link to='/login' name='login'>
        <button className='btn'>Login</button>
      </Link>
    </form>  
  )}