import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>}
         />
        <Route path='Blog' element={<Blog/>}/>
        <Route path='*' element={<NotFound/>}/>
         </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
