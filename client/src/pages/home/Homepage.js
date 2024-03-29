import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../hero/Hero";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import PostList from "../blogs/PostList";
import { DestinationApi } from "../../contexts/DestinationProvider";
import { PostsApi } from "../../contexts/PostsProvider";
import "./homepage.css";

function Homepage() {
  const { destinations } = DestinationApi();
  const { posts } = PostsApi();
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Destinations */}
      <div className="destinations">
        <div className="desti-header">
          <h2>Destinations</h2>
        </div>
        <div className="img-container">
          {destinations.map((destination) => {
            return <img src={destination.image} alt="destination" />;
          })}
        </div>
      </div>

      {/* Blogs */}
      <div>
        <Link to="/blogs" className="link">
          <div className="blog-header">
            <h2>Blogs </h2>
          </div>
        </Link>

        <ul className="posts">
          {posts.map((post) => (
            <PostList
              id={post.id}
              key={post.id}
              image={post.photo}
              title={post.title}
              desc={post.desc}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
