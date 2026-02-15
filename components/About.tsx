import React, { useRef, useEffect } from 'react';
import { TEXTOS_GERAIS } from '../data';

const About: React.FC = () => {
  const { sobre } = TEXTOS_GERAIS;
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const ctx = window.gsap.context(() => {
      
      // Animate Title text - triggers sooner, moves faster
      window.gsap.from(".about-title-line", {
        y: 80,
        opacity: 0,
        duration: 0.7, // Reduced from 1
        stagger: 0.05, // Much tighter stagger
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text-container",
          start: "top 85%", // Starts earlier
        }
      });

      // Animate Description Paragraph - immediate follow up
      window.gsap.from(".about-desc", {
        x: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.1, // Reduced delay
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-text-container",
          start: "top 85%",
        }
      });

      // Animate Images Stagger
      window.gsap.from(".about-image-card", {
        y: 60, // Less distance to travel
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 85%", // Starts earlier
        }
      });

      // Parallax for Images (subtle movement on scroll)
      window.gsap.utils.toArray(".about-image-card").forEach((card: any, i) => {
        window.gsap.to(card.querySelector('img'), {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-white dark:bg-background-dark py-32 3xl:py-48 px-6 w-full overflow-hidden">
      <div className="max-w-screen-3xl mx-auto">
        
        {/* Top Section: Text Content */}
        <div className="about-text-container flex flex-col items-start md:items-end text-left md:text-right mb-32">
          <div className="max-w-3xl 3xl:max-w-4xl overflow-hidden">
            <h2 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl 3xl:text-8xl leading-[0.9] uppercase text-primary dark:text-white mb-8 tracking-tighter">
              <div className="overflow-hidden"><span className="about-title-line block">{sobre.tituloParte1}</span></div>
              <div className="overflow-hidden"><span className="about-title-line block font-serif italic text-accent-sepia dark:text-gray-500 font-light">{sobre.tituloDestaque}</span></div>
              <div className="overflow-hidden"><span className="about-title-line block">{sobre.tituloParte2}</span></div>
            </h2>
            
            <p className="about-desc font-sans text-sm md:text-base 3xl:text-lg text-gray-700 dark:text-gray-400 leading-loose tracking-wide max-w-lg 3xl:max-w-xl ml-auto font-light border-l border-primary/10 pl-6 md:pl-0 md:border-l-0 md:border-r md:pr-6">
              {sobre.descricao}
            </p>
          </div>
        </div>

        {/* Bottom Section: Image Grid */}
        <div className="about-grid grid grid-cols-1 md:grid-cols-3 gap-8 3xl:gap-12">
          {sobre.imagens.map((item, index) => (
            <div key={index} className="about-image-card aspect-[3/4] overflow-hidden w-full relative group cursor-crosshair">
              
              {/* Layer 1: Grayscale Base with Parallax Wrapper */}
              <div className="w-full h-[120%] -mt-[10%] relative">
                 <img 
                    src={item.url} 
                    alt={item.alt} 
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-90"
                 />
              </div>

              {/* Layer 2: Color Reveal Overlay */}
              <div className="absolute inset-0 w-full h-full transition-[clip-path] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] z-10 overflow-hidden">
                 <div className="w-full h-[120%] -mt-[10%] relative">
                    <img 
                      src={item.url} 
                      alt=""
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    />
                 </div>
              </div>
              
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <span className="font-sans text-[9px] tracking-[0.3em] bg-primary text-white px-3 py-1 uppercase font-bold">Fig. 0{index + 1}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;