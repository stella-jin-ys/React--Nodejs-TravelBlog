import {Link} from 'react-router-dom';
import './register.css';
import Login from '../login/Login'


export default function Register() {
  
  return (
    <form className='container'>
      <h2>Register</h2>
      <div className='name'>
        <label htmlFor="username">Username</label>
        <input required type="text" placeholder='Enter username'/>
      </div>

      <div className='email'>
        <label htmlFor="email">Email Address</label>
        <input required  type="email" placeholder='Enter email ' />
      </div>

      <div className='password'>
        <label htmlFor="password">Password</label>
        <input required type="password" placeholder='Password' />
      </div>

      <button className='regBtn' type='submit'>Register</button>
      
      <Link to='/login' name='login'>
        <button className='btn'>Login</button>
      </Link>
      
    </form>  
  )}