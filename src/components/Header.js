// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Neha Singh</div>
      <div className="navbar-nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
}

export default Header;

