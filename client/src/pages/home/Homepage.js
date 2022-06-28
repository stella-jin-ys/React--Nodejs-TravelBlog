import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../hero/Hero";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import PostList from "../blogs/PostList";
import { DestinationApi } from "../../dataProvider/DestinationProvider";
import { PostsApi } from "../../dataProvider/PostsProvider";
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
          <h4>Luxury vacation or backpack trip </h4>
        </div>
        <div className="img-container">
          {destinations.map((destination) => {
            return <img src={destination.image} alt="destination" />;
          })}
        </div>
      </div>

      {/* Blogs */}
      <div >
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
                image={post.image}
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
