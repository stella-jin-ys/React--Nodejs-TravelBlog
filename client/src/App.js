import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Blogs from "./pages/blogs/Blogs";
import NewPost from "./pages/blogs/NewPost";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import SinglePost from "./pages/blogs/SinglePost";
import { AuthProvider } from "./contexts/AuthProvider";
import { Context } from "./contexts/userContext/Context";
import Settings from "./pages/settings/Settings";

function App() {
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/register"
              element={user ? <Homepage /> : <Register />}
            />
            <Route path="/blogs" element={user && <Blogs />} />
            <Route path="/blogs/:id" element={user && <SinglePost />} />
            <Route path="/blogs/newpost" element={user && <NewPost />} />
            <Route path="/settings" element={user && <Settings />} />
            <Route path="*" element={<PageNotFound />} />
          </>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
