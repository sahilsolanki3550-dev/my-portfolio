import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu on click
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Sahil Solanki</div>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#experience" className="nav-link" onClick={handleLinkClick}>Experience</a></li>
          <li><a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;