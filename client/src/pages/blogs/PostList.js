import React from 'react';
import {Link} from 'react-router-dom';
import Post from './Post';
import './postList.css'

function PostList(props) {
  return (
    <div>
      <div className='blog-header'>
      <h1 >Blogs</h1>
      <p>Share your travel story with us!</p>
      </div>
       <Link to='/blogs/newpost'>
         <button className='post-btn'>New post</button>
      </Link>
      <ul className='posts'>
        {props.posts.map((post) => (
          <Post 
          key={post.id}
          photo={post.image}
          title={post.title}
          desc={post.desc}
          />
        ))}
      </ul>
    </div>
  )
}

export default PostList