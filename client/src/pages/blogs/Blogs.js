import React,{useState, useEffect} from 'react';
import PostList from './PostList';
function Blogs() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true)
    fetch('https://travel-blog-a7715-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      let postsData = [];
      for (const key in data){
        const item = {
          id:key,
          ...data[key]
        }
        // console.log(item);
        postsData.push(item)
        };
      ;
      setLoading(false);
      setPosts(postsData)
    })
  },[])

  if(loading){
    return (
      <section>
        <p>Is loading</p>
      </section>
    )
  }

  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

export default Blogs