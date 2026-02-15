import React, { useState, useEffect, useRef } from 'react';
import { PROCESSO_CRIATIVO } from '../data';

// Declare GSAP global for TypeScript
declare global {
  interface Window {
    gsap: any;
  }
}

const CreativeProcess: React.FC = () => {
  const [activeProcess, setActiveProcess] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // GSAP Animation when activeProcess changes
  useEffect(() => {
    if (!window.gsap || !contentRef.current) return;

    const ctx = window.gsap.context(() => {
      // Kill previous animations to prevent overlap
      window.gsap.killTweensOf('.anim-text');

      // Animate text elements entering (Slide Up + Fade In)
      window.gsap.fromTo(
        '.anim-text',
        { 
          y: 20, 
          opacity: 0, 
          filter: 'blur(4px)' 
        },
        { 
          y: 0, 
          opacity: 1, 
          filter: 'blur(0px)',
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'power3.out',
          overwrite: 'auto'
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, [activeProcess]);

  return (
    <section className="bg-background-rose dark:bg-[#1f1f1f] py-32 px-6 md:px-12 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-20">
                <div className="w-2.5 h-2.5 border border-accent-sepia dark:border-white/60 rounded-full"></div> 
                <h3 className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-accent-sepia dark:text-white/80">
                    O Processo Criativo
                </h3>
            </div>

            <div className="flex flex-col lg:flex-row gap-20 items-start">
                
                {/* LEFT: Process List */}
                <div className="flex-1 w-full flex flex-col">
                    {PROCESSO_CRIATIVO.map((item, index) => {
                        const isActive = activeProcess === index;
                        
                        return (
                            <div 
                                key={item.id}
                                onMouseEnter={() => setActiveProcess(index)}
                                className={`relative cursor-pointer py-10 border-b border-primary/10 dark:border-white/10 transition-all duration-300 group`}
                            >
                                {/* Active Left Bar Indicator */}
                                <div className={`absolute left-[-2rem] top-10 bottom-10 w-1 bg-accent-pink dark:bg-white transition-all duration-500 ease-in-out ${isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}></div>

                                <div className="flex justify-between items-baseline">
                                    
                                    {/* Texts */}
                                    <div className="pr-8">
                                        <h4 className={`text-4xl md:text-5xl transition-all duration-300 ${
                                            isActive 
                                            ? 'font-serif italic text-primary dark:text-white translate-x-2' 
                                            : 'font-serif text-primary/60 dark:text-gray-500 group-hover:text-primary'
                                        }`}>
                                            {item.titulo}
                                        </h4>
                                        <p className={`font-sans text-sm mt-3 transition-all duration-300 ${
                                            isActive ? 'opacity-100 text-accent-sepia dark:text-gray-300 translate-x-2' : 'opacity-40 text-gray-500'
                                        }`}>
                                            {item.subtitulo}
                                        </p>
                                    </div>

                                    {/* Right Side: Dot + Number */}
                                    <div className="flex items-center gap-4 shrink-0">
                                        <div className={`w-1.5 h-1.5 rounded-full bg-accent-pink dark:bg-white transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
                                        <span className={`font-sans text-xs font-bold transition-colors duration-300 ${isActive ? 'text-accent-pink dark:text-white opacity-100' : 'text-gray-400 opacity-30'}`}>
                                            0{item.id}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* RIGHT: Content Display */}
                <div className="flex-1 w-full lg:sticky lg:top-32 h-full min-h-[400px] flex items-center justify-center lg:justify-start lg:pl-12">
                    <div className="relative w-full max-w-lg" ref={contentRef}>
                        
                        {/* Giant Background Number */}
                        <div className="absolute -top-32 -left-12 text-[15rem] md:text-[20rem] leading-none font-serif text-primary opacity-[0.02] dark:text-white dark:opacity-[0.03] select-none pointer-events-none transition-all duration-700">
                            0{activeProcess + 1}
                        </div>

                        {/* Details Content */}
                        <div className="relative z-10" key={activeProcess}>
                            <h3 className="anim-text font-serif text-3xl mb-8 text-primary dark:text-white border-b border-accent-pink/30 dark:border-white/20 pb-4 inline-block">
                                Detalhes da Etapa
                            </h3>
                            <p className="anim-text font-sans text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                                {PROCESSO_CRIATIVO[activeProcess].descricao}
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default CreativeProcess;