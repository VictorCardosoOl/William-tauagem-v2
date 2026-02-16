import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem } from '../types';
import { X, ArrowRight, ArrowDown } from 'lucide-react';

interface ProjectDetailProps {
  item: PortfolioItem;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ item, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Entrance Animation
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const ctx = window.gsap && containerRef.current ? window.gsap.context(() => {
      const tl = window.gsap.timeline();

      // 1. Cinematic Curtain Reveal
      tl.fromTo(containerRef.current, 
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power4.inOut" }
      );

      // 2. Image "Landing" Effect
      tl.fromTo(".modal-img-hero",
        { scale: 1.15, filter: "blur(10px)" },
        { scale: 1, filter: "blur(0px)", duration: 1.2, ease: "expo.out" },
        "-=0.6"
      );

      // 3. Left Panel Content Stagger
      tl.fromTo(".modal-text-anim", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: "power3.out" },
        "-=0.8"
      );

      // 4. Secondary Images Reveal
      tl.fromTo(".modal-img-secondary",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
        "-=0.6"
      );

    }, containerRef) : null;

    return () => {
      document.body.style.overflow = '';
      if (ctx) ctx.revert();
    };
  }, []);

  // Close Logic
  const handleClose = useCallback(() => {
    if (window.gsap && containerRef.current) {
        const tl = window.gsap.timeline({
            onComplete: onClose
        });

        tl.to([".modal-text-anim", ".modal-img-hero", ".modal-img-secondary"], {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: "power2.in"
        });

        tl.to(containerRef.current, {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.6,
            ease: "power4.inOut"
        }, "-=0.2");

    } else {
        onClose();
    }
  }, [onClose]);

  // Handle ESC Key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-[#F6F5F0] dark:bg-[#0F0F0F] w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div className="flex flex-col w-full relative min-h-screen">
        
        {/* WRAPPER FOR SPLIT CONTENT */}
        <div className="flex flex-col lg:flex-row w-full relative z-10 flex-grow">
            
            {/* LEFT PANEL: TEXT & INFO (Sticky) */}
            <div className="lg:w-[35%] w-full lg:h-screen lg:sticky lg:top-0 bg-[#F6F5F0] dark:bg-[#0F0F0F] text-ink-black dark:text-paper-light flex flex-col justify-between p-8 md:p-12 border-r border-ink-black/10 dark:border-white/10 z-20">
              
              <div className="modal-text-anim flex justify-between items-start mb-12 lg:mb-0">
                <div>
                  <p className="font-sans text-xs tracking-[0.3em] uppercase font-bold text-ink-medium mb-2">Project 0{item.id}</p>
                  <h1 id="project-title" className="font-serif italic text-5xl md:text-6xl font-light leading-none">{item.title}</h1>
                </div>
                <button 
                    onClick={handleClose} 
                    className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-ink-medium transition-colors p-2"
                    aria-label="Close project details"
                >
                    Close <X size={20} className="group-hover:rotate-90 transition-transform duration-300" strokeWidth={1} />
                </button>
              </div>

              <div className="lg:hidden modal-text-anim mb-8 text-ink-medium animate-bounce">
                <ArrowDown size={24} />
              </div>

              <div className="hidden lg:block space-y-12">
                <div className="space-y-6 modal-text-anim">
                    <div className="w-12 h-px bg-ink-black dark:bg-white mb-6"></div>
                    <p className="font-serif text-2xl italic leading-relaxed text-ink-dark dark:text-gray-300">
                        "A anatomia dita o fluxo. A tinta sela o pacto."
                    </p>
                    <p className="font-sans text-base leading-loose text-ink-medium dark:text-gray-400 max-w-sm">
                        Este projeto explora a tensão entre o orgânico e o geométrico. 
                        Desenhado à mão livre (freehand) para se adaptar perfeitamente à curvatura do {item.placement.toLowerCase()}.
                        A cicatrização respeita o tom de pele natural, garantindo contraste vitalício.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 border-t border-ink-black/10 dark:border-white/10 pt-8 modal-text-anim">
                    <div>
                        <h4 className="font-sans text-[10px] uppercase tracking-widest text-ink-medium mb-2">Technique</h4>
                        <p className="font-serif text-xl">Fine Line / Dotwork</p>
                    </div>
                    <div>
                        <h4 className="font-sans text-[10px] uppercase tracking-widest text-ink-medium mb-2">Session</h4>
                        <p className="font-serif text-xl">6 Hours</p>
                    </div>
                    <div>
                        <h4 className="font-sans text-[10px] uppercase tracking-widest text-ink-medium mb-2">Healed</h4>
                        <p className="font-serif text-xl">4 Weeks</p>
                    </div>
                </div>
              </div>

              <div className="pt-12 lg:pt-0 modal-text-anim">
                <button className="w-full bg-ink-black dark:bg-white text-paper-light dark:text-ink-black py-4 px-6 flex justify-between items-center group hover:bg-ink-dark transition-colors">
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.2em]">Agendar Projeto Similar</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            {/* RIGHT PANEL: VISUALS (Scrolling) */}
            <div className="lg:w-[65%] w-full bg-[#E5E5E5] dark:bg-[#1a1a1a] flex flex-col pb-24 lg:pb-0">
              
              {/* Main Hero Image */}
              <div className="w-full h-screen relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.title} main view`} 
                    className="modal-img-hero w-full h-full object-cover origin-center" 
                  />
              </div>

              {/* Detail Box */}
              <div className="w-full min-h-[80vh] bg-white dark:bg-black p-12 md:p-24 flex items-center justify-center">
                  <div className="modal-img-secondary w-full aspect-[4/5] relative overflow-hidden shadow-2xl">
                    <img src={item.image} alt={`${item.title} detail view`} className="w-full h-full object-cover scale-150 origin-top-left grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
              </div>

              {/* Texture/Artistic View - Full Height */}
              <div className="modal-img-secondary w-full h-screen relative overflow-hidden grayscale">
                  <img src={item.image} alt={`${item.title} texture view`} className="w-full h-full object-cover scale-125 hover:scale-110 transition-transform duration-[3s]" />
                  <div className="absolute bottom-12 left-12 bg-white/10 backdrop-blur-md p-4 border border-white/20">
                    <p className="font-mono text-xs text-white uppercase tracking-widest">Fig 03. — Texture Analysis</p>
                  </div>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
};

interface PortfolioItemProps {
    item: PortfolioItem;
    onClick: (item: PortfolioItem) => void;
}

const PortfolioItemComponent: React.FC<PortfolioItemProps> = ({ item, onClick }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const filterRef = useRef<SVGFEDisplacementMapElement>(null);
  const filterId = `liquid-${item.id}`;

  const handleMouseEnter = () => {
     if (window.gsap && filterRef.current) {
         window.gsap.to(filterRef.current, { 
             attr: { scale: 25 }, 
             duration: 1.2, 
             ease: "expo.out" 
         });
         if (imageRef.current) {
             window.gsap.to(imageRef.current, { 
                 scale: 1.05, 
                 duration: 1.2, 
                 ease: "expo.out" 
             });
         }
     }
  };

  const handleMouseLeave = () => {
    if (window.gsap && filterRef.current) {
         window.gsap.to(filterRef.current, { 
             attr: { scale: 0 }, 
             duration: 1, 
             ease: "power2.out" 
         });
         if (imageRef.current) {
             window.gsap.to(imageRef.current, { 
                 scale: 1, 
                 duration: 1, 
                 ease: "power2.out" 
             });
         }
     }
  };

  return (
    <div 
        className="group relative cursor-pointer mb-16 md:mb-20 w-full block"
        onClick={() => onClick(item)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') onClick(item); }}
    >
        <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
            <defs>
                <filter id={filterId}>
                    <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="1" result="warp" />
                    <feDisplacementMap ref={filterRef} xChannelSelector="R" yChannelSelector="G" scale="0" in="SourceGraphic" in2="warp" />
                </filter>
            </defs>
        </svg>

        <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5] bg-gray-200 dark:bg-gray-800">
            <img 
                ref={imageRef}
                src={item.image} 
                alt={`${item.title} tattoo on ${item.placement}`}
                loading="lazy"
                style={{ filter: `url(#${filterId})` }} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0 opacity-100 will-change-transform"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <span className="text-white text-[10px] uppercase tracking-widest font-bold">View Project</span>
                </div>
            </div>
        </div>

        <div className="mt-5 flex flex-col items-start gap-1 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-ink-medium font-bold group-hover:text-ink-black dark:group-hover:text-white transition-colors duration-300">
                {item.placement}
            </span>
            <h3 className="font-serif font-light italic text-3xl md:text-4xl text-ink-black dark:text-paper-light">
                {item.title}
            </h3>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const col1 = PORTFOLIO_ITEMS.filter((_, i) => i % 2 === 0);
  const col2 = PORTFOLIO_ITEMS.filter((_, i) => i % 2 !== 0);

  return (
    <section id="work" className="w-full bg-paper-light dark:bg-paper-dark py-20 md:py-28 px-6 relative">
      <div className="max-w-screen-3xl mx-auto mb-20 border-b border-ink-light dark:border-white/10 pb-6 flex flex-col md:flex-row justify-between items-end">
          <h2 className="font-serif font-light text-6xl md:text-8xl 3xl:text-9xl text-ink-black dark:text-paper-light uppercase leading-[0.85]">
            Selected <br/> 
            <span className="italic font-extralight text-ink-medium">Works</span>
          </h2>
          <p className="font-sans text-xs tracking-[0.3em] uppercase opacity-100 text-right font-bold text-ink-black mt-6 md:mt-0">
            Galeria da Pele
          </p>
      </div>

      <div className="max-w-screen-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 3xl:gap-24">
          <div className="flex flex-col gap-10 md:gap-16">
            {col1.map((item) => (
              <PortfolioItemComponent key={item.id} item={item} onClick={setSelectedItem} />
            ))}
          </div>
          <div className="flex flex-col gap-10 md:gap-16 md:mt-24">
            {col2.map((item) => (
              <PortfolioItemComponent key={item.id} item={item} onClick={setSelectedItem} />
            ))}
          </div>
      </div>

      {selectedItem && (
        <ProjectDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
};

export default Portfolio;