// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <div className="site-logo">
            <Link to="/" className="site-link">Hepta</Link>
          </div>
          <div className="site-menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <nav className={`fullscreen-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>×</button>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/hotels" onClick={closeMenu}>Hotels</Link></li>
          <li><Link to="/aboutus" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
          <li><Link to="/news" onClick={closeMenu}>News</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
