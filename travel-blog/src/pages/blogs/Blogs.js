import React from 'react';
import post1 from '../../assets/post1.jpeg';
import post2 from '../../assets/post2.jpeg';
import post3 from '../../assets/post3.jpeg';
import post4 from '../../assets/post4.jpeg';
import './blogs.css'

const posts = [post1, post2, post3, post4]

function Blogs() {
  return (
    <div className='posts'>
        {posts.map(post => {
        return ( 
        <div className='post-wrapper'>
          <img src={post} alt="Post" />
          <h2>Post title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sint dolores nulla delectus numquam beatae eveniet libero ducimus porro, dicta voluptates vero unde omnis obcaecati corporis quia natus architecto vel!
          Labore sint dolores nulla delectus numquam beatae eveniet libero ducimus porro, dicta voluptates vero unde omnis obcaecati corporis quia natus architecto vel! </p>
      </div>
        )
      })} 
      </div>
  )
}

export default Blogs