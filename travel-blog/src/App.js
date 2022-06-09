import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/home/Homepage'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Blogs from './pages/blogs/Blogs';
import NotFound from './pages/noPage/NotFound';
import Settings from './pages/settings/Settings'

function App() {
  const user = false
  return (
    <BrowserRouter>
      <Routes>
        <>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='login' element={user ? <Homepage/> : <Login/>} />
        <Route path='register' element={user ? <Homepage/> : <Register/>}
         />
         <Route path='settings' element={user ? <Settings /> : <Login/>}/>
        <Route path='blogs/:postId' element={<Blogs/>}/>
        <Route path='' element={<NotFound/>}/>
         </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
