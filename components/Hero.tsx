import React, { useRef, useLayoutEffect } from 'react';
import { TEXTOS_GERAIS } from '../data';

// Declare GSAP
declare global {
  interface Window {
    gsap: any;
  }
}

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!window.gsap || !titleRef.current) return;

    const ctx = window.gsap.context(() => {
      // Animate Main Title: Reveal from bottom
      window.gsap.fromTo(titleRef.current, 
        { y: '110%', opacity: 0 }, 
        { 
          y: '0%', 
          opacity: 1, 
          duration: 1.8, 
          ease: 'power4.out',
          delay: 0.5 // Wait a bit for preloader to clear
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header 
      id="home" 
      ref={containerRef}
      className="relative h-screen w-full flex flex-col justify-end overflow-hidden bg-background-light dark:bg-background-dark text-primary dark:text-gray-100 transition-colors duration-500"
    >
      
      {/* Decorative Gradient Overlay (Subtle Bone Texture) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#E5E0DC] via-transparent to-transparent opacity-40 pointer-events-none"></div>

      {/* RIGHT SIDE: Narrative Text (Editorial Style) */}
      <div className="absolute top-[20%] right-[5%] md:top-[28%] md:right-[8%] z-10 w-full max-w-xs text-right px-6 md:px-0">
         <p className="font-sans text-[11px] md:text-xs leading-loose tracking-wide font-light text-gray-800 dark:text-gray-400">
           {TEXTOS_GERAIS.heroTextoDescritivo}
         </p>
         <div className="mt-4 h-px w-12 bg-primary dark:bg-white ml-auto"></div>
      </div>

      {/* MAIN TITLE: Huge Typography Anchored Bottom */}
      {/* Mask Container for Reveal Effect */}
      <div className="relative w-full overflow-hidden select-none pb-0 md:pb-0 z-0 leading-none">
        <h1 
          ref={titleRef}
          className="font-sans font-black text-[26vw] md:text-[24vw] tracking-tighter text-primary dark:text-white leading-[0.75] text-center md:text-left transform origin-bottom"
        >
          {TEXTOS_GERAIS.heroTituloPrincipal}
        </h1>
      </div>

    </header>
  );
};

export default Hero;