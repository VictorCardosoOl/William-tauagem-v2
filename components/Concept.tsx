import React, { useRef, useEffect } from 'react';
import { TEXTOS_GERAIS } from '../data';

const Concept: React.FC = () => {
  const { concept } = TEXTOS_GERAIS;
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const ctx = window.gsap.context(() => {
        
        // Parallax for left image - WITH PHYSICAL INERTIA (Scrub 1)
        window.gsap.to(".concept-img-1", {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
                trigger: ".concept-img-1-wrapper",
                start: "top bottom",
                end: "bottom top",
                scrub: 1 // Physical feel
            }
        });

        // Parallax for right image
        window.gsap.to(".concept-img-2", {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".concept-img-2-wrapper",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2 // Different weight
            }
        });

        // Text Entrance
        window.gsap.from(".concept-title", {
            y: 100,
            opacity: 0,
            rotate: 2,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
                trigger: ".concept-title-wrapper",
                start: "top 80%"
            }
        });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-16 md:py-24 px-6 md:px-12 bg-paper-warm dark:bg-[#181818] overflow-hidden transition-colors duration-1000">
      
      <div className="max-w-screen-3xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        <div className="lg:w-1/3 relative">
          <div className="concept-title-wrapper lg:sticky lg:top-24">
            <h2 className="concept-title font-serif font-light text-6xl md:text-8xl 3xl:text-9xl text-ink-black dark:text-gray-100 uppercase tracking-tighter leading-[0.8] mb-6 origin-bottom-left">
              {concept.titulo}
            </h2>
            <div className="h-px w-24 bg-ink-black mb-4"></div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase font-bold text-ink-medium">
              {concept.subtitulo}
            </p>
          </div>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-12 md:gap-20">
          
          <div className="max-w-2xl 3xl:max-w-3xl">
            <p className="font-serif text-3xl md:text-4xl 3xl:text-5xl leading-tight text-ink-black dark:text-gray-200 italic font-thin">
              "{concept.textoPrincipal}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
             
             <div className="concept-img-1-wrapper relative md:-mt-8 group">
                <div className="overflow-hidden aspect-[4/5] shadow-none border border-ink-light relative">
                  <img 
                    src={concept.imagens[0].url} 
                    alt={concept.imagens[0].alt} 
                    className="concept-img-1 absolute inset-0 w-full h-[140%] -top-[20%] object-cover grayscale contrast-125 opacity-100" 
                  />
                  <div className="absolute inset-0 w-full h-full transition-[clip-path] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)] z-10">
                     <img 
                      src={concept.imagens[0].url} 
                      alt=""
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    />
                  </div>
                </div>
                <span className="absolute -bottom-8 -left-6 font-mono text-[9px] tracking-widest text-ink-black/50 dark:text-white/50 rotate-90 origin-left">
                  FIG. 01 — STUDY
                </span>
             </div>

             <div className="flex flex-col gap-8 md:gap-10">
                <p className="font-sans text-sm md:text-base leading-loose tracking-wide text-ink-dark dark:text-gray-400 font-light border-l border-ink-black/20 pl-6">
                  {concept.textoSecundario}
                </p>
                <div className="concept-img-2-wrapper overflow-hidden aspect-square shadow-none border border-ink-light w-4/5 self-end group relative">
                   <img 
                    src={concept.imagens[1].url} 
                    alt={concept.imagens[1].alt} 
                    className="concept-img-2 absolute inset-0 w-full h-[140%] -top-[20%] object-cover grayscale contrast-125 opacity-100" 
                  />
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