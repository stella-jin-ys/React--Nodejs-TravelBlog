import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Blogs from "./pages/blogs/Blogs";
import NewPost from "./pages/blogs/NewPost";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Destinations from "./pages/destinations/Destinations";
import SinglePost from "./pages/blogs/SinglePost";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/login" element={user ? <Homepage /> : <Login />} />
            <Route
              path="/register"
              element={user ? <Homepage /> : <Register />}
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<SinglePost />} />
            <Route path="/blogs/newpost" element={<NewPost />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="*" element={<PageNotFound />} />
          </>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
