import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { TEXTOS_GERAIS } from '../data';

// Define GSAP on window for TS
declare global {
  interface Window {
    gsap: any;
  }
}

const Navbar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const navContainerRef = useRef<HTMLDivElement>(null);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const logoClickCount = useRef(0);
  const logoClickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Links Configuration
  const links = [
    { name: 'HOME', href: '#home' },
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' }, // Assuming About section has id
    { name: 'METHODOLOGY', href: '#methodology' },
    { name: 'FLASH DAY', href: '#flash' },
    { name: 'CONTACT', href: '#contact' }, // Footer often serves as contact
  ];

  // ==========================================
  // 1. SMART VISIBILITY & INACTIVITY LOGIC
  // ==========================================
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show on scroll up or at top
      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setIsVisible(true);
      } 
      // Hide on scroll down (if menu is closed)
      else if (currentScrollY > lastScrollY.current && !isExpanded) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
      resetInactivityTimer();
    };

    const handleMouseMove = () => {
      if (!isVisible && !isExpanded) setIsVisible(true);
      resetInactivityTimer();
    };

    const resetInactivityTimer = () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      // Only set timer to hide if menu is CLOSED
      if (!isExpanded) {
        inactivityTimer.current = setTimeout(() => {
          if (window.scrollY > 50) setIsVisible(false);
        }, 4000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    };
  }, [isVisible, isExpanded]);

  // ==========================================
  // 2. MORPHING ANIMATION (GSAP)
  // ==========================================
  useEffect(() => {
    if (!window.gsap || !navContainerRef.current) return;

    const ctx = window.gsap.context(() => {
      if (isExpanded) {
        // OPEN STATE
        // 1. Lock Body Scroll
        document.body.style.overflow = 'hidden';

        // 2. Animate Container Expansion
        const isMobile = window.innerWidth < 768;
        
        window.gsap.to(navContainerRef.current, {
          width: isMobile ? '95vw' : '940px',
          height: isMobile ? '85vh' : '80px',
          borderRadius: '40px',
          duration: 0.6,
          ease: 'power4.inOut',
          backgroundColor: 'rgba(20, 20, 20, 0.95)', // Dark background when open
          backdropFilter: 'blur(24px)',
        });

        // 3. Reveal Links (Staggered)
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
        // 1. Unlock Body Scroll
        document.body.style.overflow = '';

        // 2. Hide Links immediately
        window.gsap.to('.nav-link-item', {
          y: 20,
          opacity: 0,
          duration: 0.2,
          overwrite: true
        });

        // 3. Shrink Container back to button
        window.gsap.to(navContainerRef.current, {
          width: '64px',
          height: '64px',
          borderRadius: '999px',
          duration: 0.5,
          delay: 0.1,
          ease: 'power4.inOut',
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect when closed
          backdropFilter: 'blur(12px)',
        });
      }
    }, navContainerRef); // Scope to container

    return () => ctx.revert();
  }, [isExpanded]);


  // ==========================================
  // 3. NAVIGATION HANDLER
  // ==========================================
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    // Close menu
    setIsExpanded(false);
    
    // Smooth scroll logic (Native)
    // Wait for close animation to start/finish slightly
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400); // 400ms matches close animation roughly
  };


  // ==========================================
  // 4. EASTER EGG (INVERT COLORS)
  // ==========================================
  const handleLogoClick = () => {
    logoClickCount.current += 1;
    
    if (logoClickTimer.current) clearTimeout(logoClickTimer.current);
    
    logoClickTimer.current = setTimeout(() => {
      logoClickCount.current = 0;
    }, 500); // Reset count if not clicked within 500ms

    if (logoClickCount.current === 3) {
      const html = document.documentElement;
      const currentFilter = html.style.filter;
      
      if (currentFilter.includes('invert(1)')) {
         window.gsap.to(html, { filter: 'invert(0)', duration: 0.5 });
      } else {
         window.gsap.to(html, { filter: 'invert(1)', duration: 0.5 });
      }
      logoClickCount.current = 0;
    }
  };


  return (
    <>
      {/* 
        LOGO CONTAINER (Fixed Top-Left) 
        Changes visibility based on scroll direction
      */}
      <div 
        ref={logoRef}
        className={`fixed top-8 left-6 md:left-12 z-50 transition-transform duration-500 ease-in-out cursor-pointer mix-blend-difference text-white`}
        style={{ 
          transform: isVisible ? 'translateY(0)' : 'translateY(-150%)',
        }}
        onClick={handleLogoClick}
      >
        <span className="font-serif text-2xl tracking-widest uppercase select-none font-medium">
          {TEXTOS_GERAIS.marca.split(' ')[0]}.S
        </span>
      </div>

      {/* 
        NAVBAR CONTAINER (Fixed Top-Right)
        This is the element that morphs from a button to the menu
      */}
      <div 
        ref={navContainerRef}
        className={`fixed top-8 right-6 md:right-12 z-50 flex items-center justify-center overflow-hidden shadow-2xl transition-transform duration-500 ease-in-out border border-white/10`}
        style={{ 
           transform: isVisible || isExpanded ? 'translateY(0)' : 'translateY(-150%)',
           // Initial state handled by GSAP, but fallback styles here:
           width: '64px',
           height: '64px',
           borderRadius: '999px',
           background: 'rgba(255,255,255,0.1)',
           backdropFilter: 'blur(12px)'
        }}
      >
        
        {/* TRIGGER BUTTON (Visible when collapsed) */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`absolute inset-0 flex items-center justify-center w-full h-full focus:outline-none z-20 group ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-label="Open Menu"
        >
          <div className="flex flex-col gap-1.5 items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <div className="w-6 h-px bg-primary dark:bg-white/90"></div>
            <div className="w-6 h-px bg-primary dark:bg-white/90"></div>
          </div>
        </button>

        {/* CLOSE BUTTON (Visible when expanded) */}
        <button
          onClick={() => setIsExpanded(false)}
          className={`absolute top-6 right-8 md:top-1/2 md:-translate-y-1/2 md:right-8 z-20 transition-opacity duration-300 ${isExpanded ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'}`}
        >
          <X className="w-6 h-6 text-white/70 hover:text-white transition-colors" strokeWidth={1} />
        </button>


        {/* LINKS CONTENT (Visible when expanded) */}
        <div 
          ref={linksContainerRef}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full h-full opacity-100"
        >
           {links.map((link, index) => (
             <a
               key={link.name}
               href={link.href}
               onClick={(e) => handleNavClick(e, link.href)}
               className="nav-link-item opacity-0 translate-y-4 font-sans text-xl md:text-xs tracking-ultra font-medium text-white hover:text-accent-pink transition-colors uppercase relative group"
             >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent-pink transition-all duration-300 group-hover:w-full"></span>
             </a>
           ))}
        </div>

      </div>
    </>
  );
};

export default Navbar;