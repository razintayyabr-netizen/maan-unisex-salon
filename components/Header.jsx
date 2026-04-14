'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#home" className="logo">
          <div className="logo-icon">✂️</div>
          <div className="logo-text">
            <h1 className="gradient-text">MAAN</h1>
            <p>Unisex Salon</p>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#offers">Offers</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <a href="https://wa.me/917011810776?text=Hi! I'd like to book an appointment at MAAN Unisex Salon" target="_blank" className="btn-primary">Book Now</a>
        </nav>

        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(5.5px)' : '' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-5.5px)' : '' }} />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#offers" onClick={() => setMenuOpen(false)}>Offers</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a href="https://wa.me/917011810776?text=Hi!" target="_blank" className="btn-primary">Book Appointment</a>
      </div>
    </header>
  );
}