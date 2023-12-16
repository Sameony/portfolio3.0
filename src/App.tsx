import {  useRef } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  const headRef = useRef(null)
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollTo = (ref:any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <Navbar
        onHeadClick={() => handleScrollTo(headRef)}
        onAboutClick={() => handleScrollTo(aboutRef)}
        onExperienceClick={() => handleScrollTo(experienceRef)}
        onProjectsClick={() => handleScrollTo(projectsRef)}
        onContactClick={() => handleScrollTo(contactRef)}
      />
      <div className="lg:ml-56">
        <Header ref={headRef} />
        <About ref={aboutRef} />
        <Experience ref={experienceRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </>
  );
}

export default App;
