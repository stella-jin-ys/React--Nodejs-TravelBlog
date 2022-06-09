import React from 'react';
import Hero from '../../hero/Hero';
import Navbar from '../../navbar/Navbar';
import Destinations from '../destinations/Destinations';
import Blogs from '../blogs/Blogs'

function Homepage() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Destinations />
        <Blogs />
      
    </div>
  )
}

export default Homepage