'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Offers', href: '#offers' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`glass-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl">✂️</span>
          <div>
            <h1 className="font-display text-xl font-bold gradient-text leading-tight">MAAN</h1>
            <p className="text-[10px] tracking-[0.3em] text-[var(--rose-gold-light)] uppercase">Unisex Salon</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm text-gray-300 hover:text-[var(--rose-gold)] transition-colors">
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/917011810776?text=Hi! I'd like to book an appointment at MAAN Unisex Salon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer px-5 py-2 rounded-full text-sm font-semibold text-white"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <path d="M6 6l12 12M6 18L18 6" />
              : <path d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--dark)] border-t border-[var(--rose-gold)]/20 px-4 py-4">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-gray-300 hover:text-[var(--rose-gold)] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/917011810776?text=Hi! I'd like to book an appointment at MAAN Unisex Salon"
            target="_blank"
            className="btn-shimmer block text-center mt-3 px-5 py-3 rounded-full text-sm font-semibold text-white"
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}