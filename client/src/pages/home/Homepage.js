import React from 'react';
import Hero from '../../hero/Hero';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import asia from '../../assets/asia.jpeg';
import europe from '../../assets/europe.jpeg';
import africa from '../../assets/africa.webp';
import northamerica from '../../assets/northamerica.jpeg';
import southamerica from '../../assets/southamerica.jpeg';
import post1 from '../../assets/post1.jpeg';
import post2 from '../../assets/post2.jpeg';
import post3 from '../../assets/post3.jpeg';
import post4 from '../../assets/post4.jpeg';
import './homepage.css'

const imgs = [asia, europe, africa, northamerica, southamerica]
const posts = [post1, post2, post3, post4]

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Destinations */}
      <div className='destinations'>
        <div className='desti-header'>
          <h2>Destinations</h2>
          <h4>Luxury vacation or backpack trip </h4>
        </div>
        <div className='img-container'>
          {imgs.map(img => { 
            return <img src={img} alt='destination'/>
          })}
        </div>
      </div>

      {/* Blogs */}
      <div className='blog'>
        <div className='blog-header'>
            <h2>Blogs</h2>
        </div>
      <div className='posts'>
        {posts.map(post => {
        return ( 
        <div >
          <img src={post} alt="Post" />
          <h2>Post title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sint dolores nulla delectus numquam beatae eveniet libero ducimus porro, dicta voluptates vero unde omnis obcaecati corporis quia natus architecto vel!
          Labore sint dolores nulla delectus numquam beatae eveniet libero ducimus porro, dicta voluptates vero unde omnis obcaecati corporis quia natus architecto vel! </p>
        </div>
        )
      })} 
      </div>
      </div>
        
        <Footer />
    </div>
  )
}

export default Homepage