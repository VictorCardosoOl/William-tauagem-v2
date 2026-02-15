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

      {/* RIGHT SIDE: Narrative Text (Editorial Style) */}
      {/* Updated positioning and max-width for large screens */}
      <div className="absolute top-[20%] right-[5%] md:top-[28%] md:right-[8%] 3xl:right-[12%] z-10 w-full max-w-xs 3xl:max-w-md text-right px-6 md:px-0">
         <p className="font-sans text-[11px] md:text-xs 3xl:text-sm leading-loose tracking-wide font-light text-gray-800 dark:text-gray-400">
           {TEXTOS_GERAIS.heroTextoDescritivo}
         </p>
         <div className="mt-4 h-px w-12 bg-primary dark:bg-white ml-auto"></div>
      </div>

      {/* MAIN TITLE: Huge Typography Anchored Bottom */}
      {/* Used relative vw units, ensuring it scales massively on 4k */}
      <div className="relative w-full overflow-hidden select-none pb-0 md:pb-0 z-0 leading-none">
        <h1 
          className="font-sans font-black text-[26vw] md:text-[24vw] tracking-tighter text-primary dark:text-white leading-[0.75] text-center md:text-left transform origin-bottom scale-y-110"
        >
          {TEXTOS_GERAIS.heroTituloPrincipal}
        </h1>
      </div>

    </header>
  );
};

export default Hero;
