import "./navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    // <div className="header-navbar">
    //   <div className="logo">
    //     <div style={{ position: "absolute", left: "5%", top: "35%" }}>
    //     <strong style={{color:"#42e386"}}>AD</strong><span><ins style={{textDecorationColor:"#42e386"}}>Works</ins></span>
    //     </div>
    <nav className="navigation">
      <a href="/" className="brand-name">
        <span style={{color:"#75DFED"}}>AD</span><span><span style={{borderBottom:"0.130vw solid #75DFED"}}>Works</span></span>
      </a>
      {/* mint color : #42e386 
          light blue : #75DFED
      */}
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a className="nav-link nav-link-ltr" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link nav-link-ltr" href="/services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link nav-link-ltr" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link nav-link-ltr" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
