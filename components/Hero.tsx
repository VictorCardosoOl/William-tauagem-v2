import React from 'react';
import { TEXTOS_GERAIS } from '../data';

const Hero: React.FC = () => {
  return (
    <header 
      id="home" 
      className="relative h-screen w-full flex flex-col justify-end overflow-hidden bg-background-light dark:bg-background-dark text-primary dark:text-gray-100 transition-colors duration-500"
    >
      
      {/* Decorative Gradient Overlay (Subtle Bone Texture) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#E5E0DC] via-transparent to-transparent opacity-40 pointer-events-none"></div>

      {/* RIGHT SIDE: Narrative Text (Positioned absolutely for editorial layout) */}
      <div className="absolute top-[20%] right-[5%] md:top-[28%] md:right-[8%] z-10 w-full max-w-sm md:max-w-md text-right px-6 md:px-0">
         <p className="font-sans text-sm md:text-base leading-relaxed text-gray-800 dark:text-gray-300">
           {TEXTOS_GERAIS.heroTextoDescritivo}
         </p>
      </div>

      {/* MAIN TITLE: Huge Typography Anchored Bottom */}
      <div className="relative w-full overflow-hidden select-none pb-0 md:pb-0 z-0 leading-none">
        <h1 
          className="font-sans font-black text-[26vw] md:text-[24vw] tracking-tighter text-primary dark:text-white leading-[0.75] text-center md:text-left transform origin-bottom"
        >
          {TEXTOS_GERAIS.heroTituloPrincipal}
        </h1>
      </div>

    </header>
  );
};

export default Hero;