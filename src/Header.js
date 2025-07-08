import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MainPage.css';
import logo from './assets/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="main-header">
      <Link to="/" className="header-logo" onClick={handleLinkClick}>
        <img src={logo} alt="Logo" style={{ width: 48, height: 48, borderRadius: '50%' }} />
      </Link>
      <button className="hamburger" onClick={handleMenuToggle} aria-label="Toggle menu">
        &#9776;
      </button>
      <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
        <Link to="/" onClick={handleLinkClick} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" onClick={handleLinkClick} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/work" onClick={handleLinkClick} className={location.pathname === '/work' ? 'active' : ''}>Work</Link>
        <Link to="/contact" onClick={handleLinkClick} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </nav>
    </header>
  );
} 