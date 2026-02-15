import React from 'react';
import { TEXTOS_GERAIS } from '../data';

const Concept: React.FC = () => {
  const { concept } = TEXTOS_GERAIS;

  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-gradient-to-br from-skin-light to-skin-medium dark:from-background-dark dark:to-gray-900 overflow-hidden transition-colors duration-1000">
      
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        {/* Left Column: Sticky Title */}
        <div className="lg:w-1/3 relative">
          <div className="lg:sticky lg:top-32">
            <h2 className="font-serif text-5xl md:text-8xl text-primary dark:text-gray-100 uppercase tracking-tight leading-none mb-4">
              {concept.titulo}
            </h2>
            <div className="h-px w-24 bg-accent-pink mb-6"></div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-60">
              {concept.subtitulo}
            </p>
          </div>
        </div>

        {/* Right Column: Content Flow */}
        <div className="lg:w-2/3 flex flex-col gap-24">
          
          {/* Main Manifesto Text */}
          <div className="max-w-2xl">
            <p className="font-serif text-2xl md:text-4xl leading-tight text-primary dark:text-gray-200 italic font-light">
              "{concept.textoPrincipal}"
            </p>
          </div>

          {/* Asymmetric Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
             {/* Image 1 - Offset Up */}
             <div className="relative md:-mt-12 group">
                <div className="overflow-hidden aspect-[4/5] shadow-xl">
                  <img 
                    src={concept.imagens[0]} 
                    alt="Process Sketch" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                  />
                </div>
                <span className="absolute -bottom-6 -left-4 font-mono text-xs text-primary/50 dark:text-white/50 rotate-90 origin-left">
                  FIG. 01 — STUDY
                </span>
             </div>

             {/* Text Block + Image 2 */}
             <div className="flex flex-col gap-12">
                <p className="font-sans text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  {concept.textoSecundario}
                </p>
                <div className="overflow-hidden aspect-square shadow-xl w-3/4 self-end group">
                   <img 
                    src={concept.imagens[1]} 
                    alt="Ink Texture" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                  />
                </div>
             </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Concept;