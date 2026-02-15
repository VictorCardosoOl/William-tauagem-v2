import React, { useRef, useEffect } from 'react';
import { TEXTOS_GERAIS, ITENS_METODOLOGIA, IMAGENS } from '../data';

const Methodology: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const ctx = window.gsap.context(() => {
      
      const tl = window.gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%" // Earlier trigger
        }
      });

      tl.from(".method-title span", {
        y: 80,
        opacity: 0,
        duration: 0.7, // Faster title
        stagger: 0.05,
        ease: "power4.out"
      })
      .from(".method-item", {
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08, // Very fast ripple
        ease: "power2.out"
      }, "-=0.4") // Larger overlap
      .from(".method-image", {
        scale: 0.9,
        opacity: 0,
        duration: 1.0, // Reduced from 1.5
        ease: "expo.out"
      }, "-=0.8");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="methodology" ref={containerRef} className="relative py-24 md:py-40 3xl:py-64 px-6 md:px-12 max-w-screen-3xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 3xl:gap-24 items-center">
        
        <div className="lg:col-span-5 space-y-20 3xl:space-y-32">
          <div className="space-y-6">
            <p className="text-ink-black font-sans text-[10px] tracking-[0.3em] uppercase font-bold">
              Metodologia
            </p>
            <h2 className="method-title font-serif font-light text-6xl md:text-8xl 3xl:text-9xl leading-[0.85] text-ink-black dark:text-gray-100 overflow-hidden">
              <span className="block">{TEXTOS_GERAIS.tituloMetodologia.linha1}</span>
              <span className="italic font-thin ml-8 md:ml-16 text-ink-medium dark:text-gray-500 block">
                {TEXTOS_GERAIS.tituloMetodologia.linha2}
              </span>
            </h2>
          </div>

          <div className="space-y-16">
            {ITENS_METODOLOGIA.map((item) => (
              <div key={item.id} className="method-item group cursor-pointer">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-ink-medium font-serif italic text-xl 3xl:text-2xl">
                    {item.numero}
                  </span>
                  <h3 className="font-serif font-light text-4xl 3xl:text-5xl text-ink-black dark:text-white group-hover:italic transition-all duration-300">
                    {item.titulo}
                  </h3>
                </div>
                {/* Constrained Text */}
                <p className="font-sans text-xs 3xl:text-sm tracking-wide leading-loose text-ink-dark dark:text-gray-400 pl-12 max-w-sm font-light">
                  {item.descricao}
                </p>
                <div className="h-px w-full bg-ink-light dark:bg-gray-800 mt-8 group-hover:bg-ink-black transition-colors duration-500 origin-left scale-x-50 group-hover:scale-x-100 ease-out"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="method-image relative w-full max-w-md 3xl:max-w-2xl aspect-[3/4] rounded-t-[1000px] overflow-hidden shadow-none group">
            <img
              src={IMAGENS.metodologiaDestaque}
              alt="Textura de pele em close"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-100 opacity-90 mix-blend-multiply dark:mix-blend-normal"
            />
            <div className="absolute bottom-12 right-0 bg-paper-light dark:bg-gray-900 p-8 shadow-sm border border-ink-light max-w-xs transform translate-x-4 transition-transform hover:translate-x-0">
              <p className="font-serif italic font-light text-2xl leading-relaxed text-ink-black dark:text-gray-200">
                {TEXTOS_GERAIS.citacaoImagem}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;