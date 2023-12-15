import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <div className="ml-48">
        <Header />
        <About />
      </div>
    </>
  );
}

export default App;
