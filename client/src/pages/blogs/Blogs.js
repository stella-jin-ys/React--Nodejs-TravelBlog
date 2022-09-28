import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../../navbar/Hamburger";
import PostList from "./PostList";
import "./blogs.css";
import { PostsApi } from "../../contexts/PostsProvider";

export default function Blogs() {
  const { posts } = PostsApi();

  return (
    <div>
      <div className="blog-header">
        <Hamburger />
        <h1>Blogs</h1>
        <p>Share your travel story with us!</p>
      </div>

      <Link to="/blogs/newpost">
        <button className="post-btn">New post</button>
      </Link>

      <ul className="posts">
        {posts.map((post) => (
          <PostList
            key={post.id}
            id={post._id}
            image={post.photo}
            title={post.title}
            desc={post.desc}
          />
        ))}
      </ul>
    </div>
  );
}
