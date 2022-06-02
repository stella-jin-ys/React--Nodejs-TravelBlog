import React from 'react';
import video from '../assets/video4.mp4';
import './HeroStyles.css'

function Hero() {
  return (
    <div className='hero'>
        <video className='video' autoPlay loop muted id='video'>
            <source src={video} type='video/mp4'/>
        </video>
    </div>
  )
}

export default Hero