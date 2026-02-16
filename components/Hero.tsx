import React, { useRef, useEffect } from 'react';
import { TEXTOS_GERAIS } from '../data';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.gsap) return;

    const ctx = window.gsap.context(() => {
      const tl = window.gsap.timeline();

      // 1. Title Reveal
      tl.fromTo(titleRef.current,
        { y: "100%", rotate: 2 },
        { y: "0%", rotate: 0, duration: 1.1, ease: "power3.out" }
      );

      // 2. Text & Line Reveal
      tl.fromTo(textRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.8"
      );

      // 3. Parallax Effect on Scroll
      if (window.ScrollTrigger) {
        window.gsap.to(titleRef.current, {
          yPercent: 50,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }

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
        ref={textRef}
        className="absolute top-[18%] right-[5%] md:top-[25%] md:right-[6%] z-10 w-full max-w-xs md:max-w-md text-right px-6 md:px-0 opacity-0"
      >
         <p className="font-sans text-sm md:text-base leading-relaxed tracking-wide font-light text-gray-800 dark:text-gray-300">
           {TEXTOS_GERAIS.heroTextoDescritivo}
         </p>
         <div className="mt-6 h-px w-1/2 bg-primary dark:bg-white ml-auto anim-line"></div>
      </div>

      {/* MAIN TITLE: Mask Container - Adjusted Scaling */}
      <div className="relative w-full overflow-hidden select-none z-0 leading-none">
        <h1 
          ref={titleRef}
          className="font-sans font-black text-[22vw] md:text-[23vw] tracking-tighter text-primary dark:text-white leading-[0.8] text-center md:text-left transform origin-bottom scale-y-110 will-change-transform"
        >
          {TEXTOS_GERAIS.heroTituloPrincipal}
        </h1>
      </div>

    </header>
  );
};

export default Hero;