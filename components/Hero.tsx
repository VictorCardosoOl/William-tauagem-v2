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

      // 1. Glamorous Entrance (Explosive Scale + Fade)
      // Começa maior e "cai" na posição com elegância
      tl.fromTo(titleRef.current,
        { yPercent: 100, scale: 1.2, rotate: 3, opacity: 0 },
        { yPercent: 0, scale: 1, rotate: 0, opacity: 1, duration: 1.4, ease: "expo.out" }
      );

      // 2. Text Snaps in (Rápido e preciso)
      tl.fromTo(".hero-anim-text", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power4.out" },
        "-=1.0"
      );

      // 3. Line Expands
      tl.fromTo(".anim-line",
        { scaleX: 0, transformOrigin: "right center" },
        { scaleX: 1, duration: 1, ease: "expo.out" },
        "-=0.8"
      );

      // 4. Physical Parallax on Scroll (Sensação de peso)
      window.gsap.to(titleRef.current, {
        yPercent: 30, // Move mais lento que o scroll
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1 // Inércia física (1s de delay para alcançar)
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

      {/* MAIN TITLE: Mask Container - Adjusted Scaling */}
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