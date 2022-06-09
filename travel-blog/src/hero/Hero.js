import React from 'react';
import video from '../assets/video.mp4';
import './hero.css';
import {Search} from '@mui/icons-material'

function Hero() {
  return (
    <div className='hero'>
        <video className='video' autoPlay loop muted >
            <source src={video} type='video/mp4'/>
        </video>
        <div className='content'>
          <h1>Extraordinary experience</h1>
          <h2>what is next destination?</h2>
          <form className='form'>
            <input type="text" placeholder='Search destinations'/>
            <button><Search /></button>
          </form>
          </div>
    </div>
  )
}

export default Hero