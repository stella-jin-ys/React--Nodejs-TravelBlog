import "./singlePost.css";
import { DeleteOutline, AppRegistrationOutlined } from "@mui/icons-material";
import Hamburger from "../../navbar/Hamburger";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("http://localhost:8000/api/posts/" + id);
      console.log(res.data);
      setPost(res.data);
    };
    fetchPost();
  }, [id]);

  // const handleEdit = () => {};

  // const handleDelete = async () => {};

  return (
    <>
      <div>
        <Hamburger />
        <div className="singlePost">
          <div className="single-top">
            {post.photo && <img src={post?.photo} alt="" />}
            <h3>{post?.title}</h3>
          </div>
          <div className="single-content">
            <div className="single-icon">
              <AppRegistrationOutlined />
              <DeleteOutline className="deleteBtn" />
            </div>
            <div className="single-date">
              {new Date(post.createdAt).toDateString()}
            </div>
            <div className="single-desc">
              <p>{post?.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
