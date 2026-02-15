import React, { useEffect, useRef } from 'react';
import { TEXTOS_GERAIS } from '../data';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Simple Parallax Effect on Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const title = containerRef.current.querySelector('#hero-title') as HTMLElement;
      
      if (title) {
        title.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="home" 
      ref={containerRef}
      className="relative h-screen w-full flex flex-col justify-end overflow-hidden bg-[#fff0f0] dark:bg-background-dark text-primary dark:text-gray-100 transition-colors duration-500"
    >
      
      {/* Decorative Gradient Overlay (Subtle) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#f8e1e1] via-transparent to-transparent opacity-20 pointer-events-none"></div>

      {/* RIGHT SIDE: Narrative Text (Positioned absolutely for editorial layout) */}
      <div className="absolute top-[20%] right-[5%] md:top-[28%] md:right-[8%] z-10 w-full max-w-sm md:max-w-md text-right px-6 md:px-0">
         <p className="font-sans text-sm md:text-base leading-relaxed text-gray-800 dark:text-gray-300">
           <strong className="block text-primary dark:text-white mb-2 font-bold tracking-wide">
             A {TEXTOS_GERAIS.heroTituloPrincipal} SIQUEIRA
           </strong>
           {TEXTOS_GERAIS.heroTextoDescritivo.replace('A WILLIAM SIQUEIRA ', '')}
         </p>
      </div>

      {/* MAIN TITLE: Huge Typography Anchored Bottom */}
      <div className="relative w-full overflow-hidden select-none pb-0 md:pb-0 z-0 leading-none">
        <h1 
          id="hero-title"
          className="font-sans font-black text-[26vw] md:text-[24vw] tracking-tighter text-[#1a1a1a] dark:text-white leading-[0.75] text-center md:text-left transform origin-bottom"
        >
          {TEXTOS_GERAIS.heroTituloPrincipal}
        </h1>
      </div>

      {/* BOTTOM LEFT: Metadata */}
      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 z-20">
        <div className="flex flex-col gap-1">
          <p className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary dark:text-white">
            Estúdio Privado
          </p>
          <p className="font-sans text-[10px] md:text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
            São Paulo, Brasil
          </p>
        </div>
      </div>

      {/* BOTTOM RIGHT: Circular CTA (Overlapping the text) */}
      <div className="absolute bottom-16 right-6 md:bottom-24 md:right-24 z-20">
        <a 
          href="#contact"
          className="group relative flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-full bg-transparent border border-primary dark:border-white overflow-hidden transition-all duration-300 hover:scale-105"
        >
          {/* Hover Fill Effect */}
          <div className="absolute inset-0 bg-primary dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          
          <div className="relative z-10 flex flex-col items-center text-primary dark:text-white group-hover:text-white dark:group-hover:text-primary transition-colors duration-300">
            <span className="font-serif italic text-lg md:text-2xl leading-none">Orçar</span>
            <span className="font-serif italic text-lg md:text-2xl leading-none">Projeto</span>
          </div>
        </a>
      </div>

    </header>
  );
};

export default Hero;