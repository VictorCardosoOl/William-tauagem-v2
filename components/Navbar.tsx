import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { TEXTOS_GERAIS } from '../data';
import { useNavbar } from '../hooks/useNavbar';

const Navbar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  
  const { isVisible } = useNavbar(isExpanded);

  // Links Configuration
  const links = [
    { name: 'HOME', href: '#home' },
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'FLASH DAY', href: '#flash' },
    { name: 'CONTACT', href: '#contact' },
  ];

  // GSAP Animation Logic (UI Concern)
  useEffect(() => {
    if (!window.gsap || !navContainerRef.current) return;

    const ctx = window.gsap.context(() => {
      if (isExpanded) {
        // OPEN STATE
        document.body.style.overflow = 'hidden';
        const width = window.innerWidth;
        const isMobile = width < 768;
        const isUltraWide = width > 1920;
        
        // Dynamic width calculation based on screen size
        let targetWidth = '940px';
        if (isMobile) targetWidth = '95vw';
        else if (isUltraWide) targetWidth = '1400px'; // Wider menu for 4K screens

        window.gsap.to(navContainerRef.current, {
          width: targetWidth,
          height: isMobile ? '85vh' : '80px',
          borderRadius: '2px', // Sharper corners for editorial feel
          duration: 0.6,
          ease: 'power4.inOut',
          backgroundColor: '#1A1A1A', // Ink Black
          backdropFilter: 'blur(0px)', // Solid color for editorial look
        });

        window.gsap.to('.nav-link-item', {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          delay: 0.3,
          ease: 'power2.out'
        });

      } else {
        // CLOSED STATE
        document.body.style.overflow = '';
        window.gsap.to('.nav-link-item', {
          y: 20,
          opacity: 0,
          duration: 0.2,
          overwrite: true
        });

        window.gsap.to(navContainerRef.current, {
          width: '64px',
          height: '64px',
          borderRadius: '999px',
          duration: 0.5,
          delay: 0.1,
          ease: 'power4.inOut',
          backgroundColor: 'rgba(26, 26, 26, 0.05)', // Very subtle on light mode
          backdropFilter: 'blur(12px)',
        });
      }
    }, navContainerRef);

    return () => ctx.revert();
  }, [isExpanded]);

  // Handle ESC Key to Close Menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsExpanded(false);
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  return (
    <>
      {/* LOGO */}
      <div 
        ref={logoRef}
        className={`fixed top-8 left-6 md:left-12 3xl:left-24 z-50 transition-transform duration-500 ease-in-out cursor-pointer text-ink-black dark:text-paper-light mix-blend-difference`}
        style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-150%)' }}
      >
        <span className="font-serif text-2xl 3xl:text-3xl tracking-widest uppercase select-none font-bold">
          {TEXTOS_GERAIS.marca.split(' ')[0]}.S
        </span>
      </div>

      {/* MENU CONTAINER */}
      <div 
        ref={navContainerRef}
        className={`fixed top-8 right-6 md:right-12 3xl:right-24 z-50 flex items-center justify-center overflow-hidden shadow-none transition-transform duration-500 ease-in-out border border-ink-black/10 dark:border-white/10`}
        style={{ 
           transform: isVisible || isExpanded ? 'translateY(0)' : 'translateY(-150%)',
           width: '64px',
           height: '64px',
           borderRadius: '999px',
           background: 'rgba(26,26,26,0.05)',
           backdropFilter: 'blur(12px)'
        }}
      >
        
        {/* TRIGGER */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`absolute inset-0 flex items-center justify-center w-full h-full focus:outline-none z-20 group ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-label="Open Menu"
        >
          <div className="flex flex-col gap-1.5 items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <div className="w-6 h-px bg-ink-black dark:bg-paper-light"></div>
            <div className="w-6 h-px bg-ink-black dark:bg-paper-light"></div>
          </div>
        </button>

        {/* CLOSE */}
        <button
          onClick={() => setIsExpanded(false)}
          className={`absolute top-6 right-8 md:top-1/2 md:-translate-y-1/2 md:right-8 z-20 transition-opacity duration-300 ${isExpanded ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'}`}
        >
          <X className="w-6 h-6 text-paper-light/70 hover:text-paper-light transition-colors" strokeWidth={1} />
        </button>

        {/* LINKS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full h-full opacity-100">
           {links.map((link) => (
             <a
               key={link.name}
               href={link.href}
               onClick={(e) => handleNavClick(e, link.href)}
               className="nav-link-item opacity-0 translate-y-4 font-sans text-xl md:text-xs tracking-ultra font-bold text-paper-light hover:text-ink-medium transition-colors uppercase relative group"
             >
                {link.name}
             </a>
           ))}
        </div>

      </div>
    </>
  );
};

export default Navbar;