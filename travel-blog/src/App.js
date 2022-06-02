import './App.css';
import React from 'react';
import Header from './Header';
import Navbar from './navbar/Navbar';
import Hero from './hero/Hero'

function App() {

  return (
    <div className="App">
      <Navbar/> 
      <Hero />
    </div>
  );
}

export default App;
