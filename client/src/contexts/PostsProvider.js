import React, { createContext, useState, useEffect, useContext } from 'react';

const PostsContext = createContext();
export function PostsProvider({children}) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
       fetch("https://travel-blog-a7715-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //  console.log(Object.entries(data));
        const postList = [];
        for (const key in data) {
          const post = {
            id: key,
            ...data[key]
          };
          postList.push(post);
        };
      
        setLoading(false);
        setPosts(postList);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
  <PostsContext.Provider value={{
    posts,
    loading}}>
      {children}
  </PostsContext.Provider>)
 };

export function PostsApi(){
    const context = useContext(PostsContext)
    return context
}