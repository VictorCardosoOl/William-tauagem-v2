import React, { useRef, useEffect } from 'react';
import { TEXTOS_GERAIS } from '../data';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const ctx = window.gsap.context(() => {
      const tl = window.gsap.timeline();

      // 1. Title Entrance REMOVED explicitly.
      // O título "WILLIAM" agora é estático no carregamento (renderiza nativamente via CSS).

      // 2. Text Snaps in (Texto lateral entra suavemente)
      tl.fromTo(".hero-anim-text", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power4.out", delay: 0.2 }
      );

      // 3. Line Expands (Linha decorativa)
      tl.fromTo(".anim-line",
        { scaleX: 0, transformOrigin: "right center" },
        { scaleX: 1, duration: 1, ease: "expo.out" },
        "-=0.6"
      );

      // 4. Physical Parallax on Scroll (Sensação de peso apenas ao rolar a página)
      window.gsap.to(titleRef.current, {
        yPercent: 50, // Move mais lento que o scroll
        opacity: 0,
        scale: 0.9,
        filter: "blur(8px)",
        ease: "none",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom 20%",
            scrub: 1 // Inércia física
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header 
      id="home" 
      ref={containerRef}
      className="relative h-screen w-full flex flex-col justify-end overflow-hidden bg-background-light dark:bg-background-dark text-primary dark:text-gray-100 transition-colors duration-500 pb-12 md:pb-0"
    >
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#E5E0DC] via-transparent to-transparent opacity-40 pointer-events-none"></div>

      {/* RIGHT SIDE: Narrative Text - Adjusted Position */}
      <div 
        ref={textWrapperRef}
        className="absolute top-[18%] right-[5%] md:top-[25%] md:right-[6%] z-10 w-full max-w-xs md:max-w-md text-right px-6 md:px-0"
      >
         <div className="overflow-hidden">
            <p className="hero-anim-text font-sans text-sm md:text-base leading-relaxed tracking-wide font-light text-gray-800 dark:text-gray-300">
            {TEXTOS_GERAIS.heroTextoDescritivo}
            </p>
         </div>
         <div className="mt-6 h-px w-1/2 bg-primary dark:bg-white ml-auto anim-line"></div>
      </div>

      {/* MAIN TITLE: Mask Container */}
      <div className="relative w-full overflow-hidden select-none z-0 leading-none pb-2">
        <h1 
          ref={titleRef}
          className="font-sans font-black text-[22vw] md:text-[23vw] tracking-tighter text-primary dark:text-white leading-[0.8] text-center md:text-left will-change-transform origin-bottom"
        >
          {TEXTOS_GERAIS.heroTituloPrincipal}
        </h1>
      </div>

    </header>
  );
};

export default Hero;