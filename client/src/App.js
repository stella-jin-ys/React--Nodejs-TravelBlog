import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/home/Homepage'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Blogs from './pages/blogs/Blogs';
import NewPost from './pages/blogs/NewPost';
import NotFound from './pages/noPage/NotFound';
import Settings from './pages/settings/Settings';
import Destinations from './pages/destinations/Destinations'

function App() {
  const user = false
  return (
    <BrowserRouter>
      <Routes>
        <>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/login' element={user ? <Homepage/> : <Login/>} />
        <Route path='/register' element={user ? <Homepage/> : <Register/>}
         />
         <Route path='/settings' element={user ? <Settings /> : <Login/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/newpost' element={<NewPost />} />
        <Route path='/destinations' element={<Destinations/>}/>
        <Route path='' element={<NotFound/>}/>
         </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
