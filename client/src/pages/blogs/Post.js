import React from 'react';
import './post.css'

function Post(props) {
    return( 
        <li className='post'>
            <div>
                <img  src={props.photo} alt="" />
            </div>
            <div className='post-content'>
            <h3 >{props.title}</h3>
            <p>{props.desc}</p>
            </div>
            
        </li>)
}

export default Post