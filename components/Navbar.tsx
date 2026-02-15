import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { TEXTOS_GERAIS } from '../data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Updated links to match the "Stitch" design (English)
  const links = [
    { name: 'WORK', href: '#work' },
    { name: 'METHODOLOGY', href: '#methodology' },
    { name: 'FLASH DAY', href: '#flash' },
    { name: 'BOOKING', href: '#booking' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 mix-blend-difference text-white px-6 md:px-12 py-8 flex justify-between items-center bg-transparent">
      {/* Brand */}
      <div className="font-serif text-2xl tracking-widest uppercase z-50">
        {TEXTOS_GERAIS.marca}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-12 font-sans text-xs tracking-[0.15em] uppercase">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-accent-pink transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button 
        onClick={toggleMenu} 
        className="md:hidden z-50 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-background-dark text-white flex flex-col justify-center items-center z-40 md:hidden animate-fade-in">
          <div className="flex flex-col gap-8 font-serif text-3xl text-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-accent-pink transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;