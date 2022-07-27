import React, { useRef } from "react";
import Hamburger from "../../navbar/Hamburger";
import "./newPostForm.css";

function NewPostForm(props) {
  const titleInput = useRef();
  const imageInput = useRef();
  const descInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const title = titleInput.current.value;
    const image = imageInput.current.value;
    const desc = descInput.current.value;

    const newPost = {
      title: title,
      image: image,
      desc: desc,
    };
    props.addNewPost(newPost);
  };

  return (
    <div>
      <Hamburger />
      <form className="container" onSubmit={submitHandler}>
        <h2>New Post</h2>
        <div className="image">
          <label htmlFor="image">Post Image</label>
          <input type="text" ref={imageInput} id="image" />
        </div>
        <div className="title">
          <label htmlFor="title">Post Title</label>
          <input required type="text" ref={titleInput} id="title" />
        </div>
        <div className="desc">
          <label htmlFor="desc">Post Content</label>
          <textarea required type="text" ref={descInput} rows="8" id="desc" />
        </div>

        <button className="submit-btn" onClick={submitHandler}>
          New Post
        </button>
      </form>
    </div>
  );
}

export default NewPostForm;
