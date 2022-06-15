import React from 'react';
import {useNavigate} from 'react-router-dom';
import NewPostForm from './NewPostForm'

function NewPost() {
    const navigate = useNavigate();

    function addNewPost(newPost){
        fetch('https://travel-blog-a7715-default-rtdb.europe-west1.firebasedatabase.app/posts.json',{
            method:'POST',
            body: JSON.stringify(newPost),
            headers:{
                'Content-type':'application/json'
            }
        }).then(()=>{
             navigate('/blogs');
        })
    }
  return (
    <div>
        <NewPostForm addNewPost={addNewPost}/>
    </div>
  )
}

export default NewPost