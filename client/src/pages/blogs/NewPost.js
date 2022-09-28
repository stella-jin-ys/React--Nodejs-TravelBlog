import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Hamburger from "../../navbar/Hamburger";
import "./newPost.css";

export default function NewPost() {
  const navigate = useNavigate();
  const titleInput = useRef();
  const imageInput = useRef();
  const descInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/posts", {
        title: titleInput.current.value,
        photo: imageInput.current.value,
        desc: descInput.current.value,
      });
      res.data && navigate("/blogs");

      titleInput.current.value = "";
      imageInput.current.value = "";
      descInput.current.value = "";
    } catch (err) {
      new Error(err);
    }
  };

  return (
    <div>
      <Hamburger />
      <form className="container">
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

        <button className="submit-btn" onClick={handleSubmit}>
          New Post
        </button>
      </form>
    </div>
  );
}
