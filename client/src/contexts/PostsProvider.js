import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const PostsContext = createContext();
export function PostsProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8000/api/posts");
      setPosts(res.data);
    };
    fetchPosts();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        loading,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function PostsApi() {
  const context = useContext(PostsContext);
  return context;
}
