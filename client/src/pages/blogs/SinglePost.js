import React from "react";
import "./singlePost.css";
import { RateReview, DeleteOutline } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost(props) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://travel-blog-a7715-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setPost(data);
      });
  }, [id]);
  return (
    <div className="singlePost">
      <div className="single-top">
        <img src={post.image} alt="" />
        <h3>{post.title}</h3>
      </div>
      <div className="post-icon">
        <RateReview />
        <DeleteOutline />
      </div>
      <div>
        <p>{post.desc}</p>
      </div>
    </div>
  );
}
