import React, { useState, useEffect } from "react";
import useWindowDimensions from "../Utils/useWindowDimensions";

function Navbar() {
  const { height, width } = useWindowDimensions();
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    console.log(offset,"height",height,"width",width)
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);
 
  return (
      <nav className={`${offset>0?"headerShadow":""} navBar bg-black/[0.2]`} style={{padding:"0.7rem 0"}}>
          <ul id="nav" className="flex justify-center text-white font-semibold">
            <li className={`ml-3 text-black`}>
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li className="ml-3">
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li className="ml-3">
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li className="ml-3">
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li className="ml-3">
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        
      </nav>
  );
}

export default Navbar;