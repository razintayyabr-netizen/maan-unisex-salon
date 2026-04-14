'use client';

import { useState, useEffect } from 'react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Offers', href: '#offers' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`glass-header fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-[var(--rose)]/30 flex items-center justify-center bg-[var(--rose)]/5 group-hover:bg-[var(--rose)]/10 transition-colors">
            <span className="text-lg">✂️</span>
          </div>
          <div className="leading-tight">
            <h1 className="font-display text-2xl font-bold gradient-text tracking-wide">MAAN</h1>
            <p className="text-[9px] tracking-[0.35em] text-[var(--rose-light)]/70 uppercase">Unisex Salon</p>
          </div>
        </a>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map(l => (
            <a key={l.name} href={l.href} className="text-sm text-gray-400 hover:text-[var(--rose-light)] transition-colors relative group">
              {l.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--rose)] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="https://wa.me/917011810776?text=Hi! I'd like to book an appointment at MAAN Unisex Salon"
            target="_blank"
            className="btn-primary px-6 py-2.5 rounded-full text-sm font-medium"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center text-white">
          <div className="space-y-1.5">
            <span className={`block w-6 h-[1.5px] bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-6 space-y-1 border-t border-[var(--rose)]/5">
          {links.map(l => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-400 hover:text-[var(--rose-light)] hover:pl-2 transition-all"
            >
              {l.name}
            </a>
          ))}
          <a
            href="https://wa.me/917011810776?text=Hi! I'd like to book an appointment at MAAN Unisex Salon"
            target="_blank"
            className="btn-primary block text-center mt-4 px-6 py-3 rounded-full text-sm font-medium"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}