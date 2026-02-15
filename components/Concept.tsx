import React from 'react';
import { TEXTOS_GERAIS } from '../data';

const Concept: React.FC = () => {
  const { concept } = TEXTOS_GERAIS;

  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-background-rose dark:bg-[#1f1f1f] overflow-hidden transition-colors duration-1000">
      
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        {/* Left Column: Sticky Title */}
        <div className="lg:w-1/3 relative">
          <div className="lg:sticky lg:top-32">
            <h2 className="font-serif font-light text-6xl md:text-9xl text-primary dark:text-gray-100 uppercase tracking-tighter leading-[0.8] mb-8">
              {concept.titulo}
            </h2>
            <div className="h-px w-32 bg-accent-pink mb-8"></div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-accent-sepia">
              {concept.subtitulo}
            </p>
          </div>
        </div>

        {/* Right Column: Content Flow */}
        <div className="lg:w-2/3 flex flex-col gap-32">
          
          {/* Main Manifesto Text */}
          <div className="max-w-2xl">
            <p className="font-serif text-3xl md:text-5xl leading-tight text-primary dark:text-gray-200 italic font-thin">
              "{concept.textoPrincipal}"
            </p>
          </div>

          {/* Asymmetric Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
             
             {/* Image 1 - Offset Up */}
             <div className="relative md:-mt-24 group">
                <div className="overflow-hidden aspect-[4/5] shadow-2xl relative">
                  {/* Grayscale Base */}
                  <img 
                    src={concept.imagens[0].url} 
                    alt={concept.imagens[0].alt} 
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-90" 
                  />
                  {/* Color Reveal (Bottom Up) */}
                  <div className="absolute inset-0 w-full h-full transition-[clip-path] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)] z-10">
                     <img 
                      src={concept.imagens[0].url} 
                      alt=""
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    />
                  </div>
                </div>
                <span className="absolute -bottom-10 -left-6 font-mono text-[9px] tracking-widest text-primary/50 dark:text-white/50 rotate-90 origin-left">
                  FIG. 01 — STUDY
                </span>
             </div>

             {/* Text Block + Image 2 */}
             <div className="flex flex-col gap-16">
                <p className="font-sans text-xs md:text-sm leading-loose tracking-wide text-gray-700 dark:text-gray-400 font-light border-l border-primary/20 pl-6">
                  {concept.textoSecundario}
                </p>
                <div className="overflow-hidden aspect-square shadow-2xl w-3/4 self-end group relative">
                   {/* Grayscale Base */}
                   <img 
                    src={concept.imagens[1].url} 
                    alt={concept.imagens[1].alt} 
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-90" 
                  />
                  {/* Color Reveal (Left to Right) */}
                  <div className="absolute inset-0 w-full h-full transition-[clip-path] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] [clip-path:inset(0_0_0_100%)] group-hover:[clip-path:inset(0_0_0_0)] z-10">
                     <img 
                      src={concept.imagens[1].url} 
                      alt=""
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    />
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Concept;