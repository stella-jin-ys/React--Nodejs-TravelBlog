import React from "react";
import { Link } from "react-router-dom";
import "./postList.css";

export default function PostList(props) {
  return (
    <li className="post">
      <Link to={`/blogs/${props.id}`} className="link">
        <div className="post-top">
          <img src={props.image} alt="" />
          <h3>{props.title}</h3>
        </div>
        <div>
          <p>{props.desc}</p>
        </div>
      </Link>
    </li>
  );
}
