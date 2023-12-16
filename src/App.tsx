import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar />
      <div className="lg:ml-56">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
