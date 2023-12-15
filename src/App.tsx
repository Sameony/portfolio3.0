import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <Navbar />
      <div className="ml-56">
        <Header />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
