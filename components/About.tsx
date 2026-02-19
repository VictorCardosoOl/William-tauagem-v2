import React, { useRef, useEffect } from 'react';
import { TEXTOS_GERAIS } from '../data';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const { sobre } = TEXTOS_GERAIS;
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const ctx = window.gsap.context(() => {
      
      // Animate Title text (Lines)
      window.gsap.from(".about-title-line", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text-container",
          start: "top 80%",
        }
      });

      // Animate Body Text & Button
      window.gsap.from([".about-body", ".about-cta"], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-text-container",
          start: "top 80%",
        }
      });

      // Animate Images Stagger
      window.gsap.from(".about-image-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 85%",
        }
      });

      // Parallax for Images
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
    <section id="about" ref={containerRef} className="bg-white dark:bg-background-dark py-16 md:py-24 px-6 w-full overflow-hidden">
      <div className="max-w-screen-3xl mx-auto">
        
        {/* Top Section: Text Content - Aligned to RIGHT */}
        <div className="about-text-container flex flex-col items-end text-right mb-16 md:mb-24">
          <div className="max-w-4xl 3xl:max-w-5xl">
            
            {/* New Title Format */}
            <h2 className="font-sans font-black text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl leading-[0.9] text-ink-black dark:text-white mb-8 tracking-tighter uppercase">
              <div className="overflow-hidden"><span className="about-title-line block">EU SOU WILLIAM</span></div>
              <div className="overflow-hidden"><span className="about-title-line block">SIQUEIRA, E EU</span></div>
              <div className="overflow-hidden"><span className="about-title-line block text-[#C0C0C0] dark:text-[#4a4a4a]">MATERIALIZO</span></div>
              <div className="overflow-hidden"><span className="about-title-line block">HISTÓRIAS.</span></div>
            </h2>
            
            {/* New Description Format - Aligned Right */}
            <div className="about-body max-w-lg mt-8 mb-10 ml-auto">
               <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink-dark dark:text-gray-300">
                  Especialista em Neotradicional.<br/>
                  Transformo narrativas pessoais em anatomia e arte perene.
               </p>
            </div>

            {/* CTA Button */}
            <div className="about-cta flex justify-end">
                <a href="#concept" className="group inline-flex items-center gap-3 font-sans text-xs font-bold tracking-[0.2em] uppercase text-accent-sepia dark:text-gray-400 hover:text-ink-black dark:hover:text-white transition-colors">
                    Entenda o Processo 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

          </div>
        </div>

        {/* Bottom Section: Image Grid (Maintained) */}
        <div className="about-grid grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 3xl:gap-8">
          {sobre.imagens.map((item, index) => (
            <div key={index} className="about-image-card aspect-[3/4] overflow-hidden w-full relative group cursor-crosshair will-change-transform">
              
              {/* Layer 1: Grayscale Base with Parallax Wrapper */}
              <div className="w-full h-[120%] -mt-[10%] relative">
                 <img 
                    src={item.url} 
                    alt={item.alt}
                    loading="lazy" 
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-90 will-change-transform"
                 />
              </div>

              {/* Layer 2: Color Reveal Overlay */}
              <div className="absolute inset-0 w-full h-full transition-[clip-path] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] z-10 overflow-hidden">
                 <div className="w-full h-[120%] -mt-[10%] relative">
                    <img 
                      src={item.url} 
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 will-change-transform"
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