import "./Navbar.css";
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    
    navigate('/', { 
      state: { scrollTo: targetId },
      replace: true
    });
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="logo">
        <div className="logo-icons">
          <i className="fas fa-moon floating fs-2" />
          <span>
            <i className="fas fa-peace fs-2"></i>
          </span>
        </div>
        <span>
          <a className="h1" href="/" onClick={(e) => {
            e.preventDefault();
            navigate('/', { replace: true });
          }}>SereneSounds</a>
        </span>
      </div>

      <i className="fas fa-bars fs-2 menu-toggle" onClick={toggleMenu}></i>
      <i className="fas fa-close fs-2 menu-toggle" onClick={toggleMenu}></i>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <a 
            href="#asmr-section" 
            onClick={(e) => handleAnchorClick(e, 'asmr-section')}
            aria-label="Scroll to ASMR Library"
          >
            ASMR library
          </a>
        </li>
        <li>
          <Link to="/Chatbot" onClick={closeMenu}>Chat Bot</Link>
        </li>
        <li>
          <a href="/OnlineSession" onClick={closeMenu}>Online Session</a>
        </li>
      </ul>
    </nav>
  );
};

export default function WrappedNavbar() {
  return (
    <React.Suspense fallback={null}>
      <Navbar />
    </React.Suspense>
  );
}