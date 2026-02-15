import React, { useState, useRef, useLayoutEffect } from 'react';
import { PORTFOLIO_ITEMS } from '../data';
import { X } from 'lucide-react';

// GSAP types
declare global {
  interface Window {
    gsap: any;
    Flip: any;
    ScrollTrigger: any;
  }
}

interface PortfolioItemProps {
  item: typeof PORTFOLIO_ITEMS[0];
  onClick: (item: typeof PORTFOLIO_ITEMS[0], element: HTMLElement) => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, onClick }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const filterRef = useRef<SVGFEDisplacementMapElement>(null);
  const filterId = `liquid-${item.id}`;

  const handleMouseEnter = () => {
     if (window.gsap && filterRef.current) {
         window.gsap.to(filterRef.current, {
             attr: { scale: 30 }, // Distort intensity
             duration: 0.8,
             ease: "power2.out"
         });
         if (imageRef.current) {
             window.gsap.to(imageRef.current, { scale: 1.05, duration: 1 });
         }
     }
  };

  const handleMouseLeave = () => {
    if (window.gsap && filterRef.current) {
         window.gsap.to(filterRef.current, {
             attr: { scale: 0 },
             duration: 0.8,
             ease: "power2.out"
         });
         if (imageRef.current) {
             window.gsap.to(imageRef.current, { scale: 1, duration: 1 });
         }
     }
  };

  return (
    <div 
        className="group relative cursor-pointer mb-24 w-full"
        onClick={(e) => onClick(item, e.currentTarget)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        {/* Local SVG Filter Definition for this specific item */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
            <defs>
                <filter id={filterId}>
                    <feTurbulence type="fractalNoise" baseFrequency="0.015 0.015" numOctaves="1" result="warp" />
                    <feDisplacementMap 
                        ref={filterRef}
                        xChannelSelector="R" 
                        yChannelSelector="G" 
                        scale="0" 
                        in="SourceGraphic" 
                        in2="warp" 
                    />
                </filter>
            </defs>
        </svg>

        <div 
            className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5] bg-gray-200 dark:bg-gray-800"
            data-flip-id={`img-${item.id}`} // Marker for GSAP Flip
        >
            <img 
                ref={imageRef}
                src={item.image} 
                alt={item.title}
                loading="lazy"
                style={{ filter: `url(#${filterId})` }} // Apply liquid filter
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100 will-change-transform"
            />
        </div>

        <div className="mt-6 flex flex-col items-start gap-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-accent-sepia dark:text-white/60 font-bold">
                {item.placement}
            </span>
            <h3 className="font-serif font-light italic text-4xl md:text-5xl text-primary dark:text-white">
                {item.title}
            </h3>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  // Parallax Effect
  useLayoutEffect(() => {
    if (!window.gsap || !window.ScrollTrigger || !col2Ref.current || !containerRef.current) return;
    
    // Only apply parallax on desktop
    if (window.innerWidth >= 768) {
      const ctx = window.gsap.context(() => {
        window.gsap.to(col2Ref.current, {
          y: -120, // Move up slightly faster than scroll
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1 // Smooth scrubbing
          }
        });
      }, containerRef);
      
      return () => ctx.revert();
    }
  }, []);

  // FLIP Logic
  const handleItemClick = (item: typeof PORTFOLIO_ITEMS[0]) => {
    if (!window.gsap || !window.Flip) {
        setSelectedItem(item);
        return;
    }

    const state = window.Flip.getState(`[data-flip-id="img-${item.id}"]`);
    setSelectedItem(item);

    // Animate AFTER render
    requestAnimationFrame(() => {
        const target = document.querySelector('.detail-image');
        if (target) {
            window.Flip.from(state, {
                targets: target,
                duration: 0.8,
                ease: "power3.inOut",
                absolute: true,
                zIndex: 50,
                onComplete: () => {
                    // Animation complete callback
                    window.gsap.to('.detail-content', { opacity: 1, y: 0, duration: 0.5 });
                }
            });
        }
    });
  };

  const handleClose = () => {
    if (!selectedItem) return;
    
    // We need to capture state of the FULL SCREEN image before removing it
    const state = window.Flip.getState('.detail-image');
    
    // Remove selected item (state change)
    setSelectedItem(null);

    // Animate BACK to original position
    requestAnimationFrame(() => {
        // We need to find the original grid item again. Since selectedItem is null, the grid renders normally.
        const original = document.querySelector(`[data-flip-id="img-${selectedItem.id}"]`);
        if (original) {
             window.Flip.from(state, {
                targets: original,
                duration: 0.6,
                ease: "power3.inOut",
                scale: true // Important for ensuring image scales back correctly
             });
        }
    });
  };

  const col1 = PORTFOLIO_ITEMS.filter((_, i) => i % 2 === 0);
  const col2 = PORTFOLIO_ITEMS.filter((_, i) => i % 2 !== 0);

  return (
    <section id="work" className="w-full bg-background-light dark:bg-background-dark py-24 md:py-32 px-6 relative" ref={containerRef}>
      
      {/* HEADER */}
      <div className="max-w-[1400px] mx-auto mb-32 border-b border-primary/10 dark:border-white/10 pb-8 flex flex-col md:flex-row justify-between items-end">
          <h2 className="font-serif font-light text-6xl md:text-8xl text-primary dark:text-gray-100 uppercase leading-[0.85]">
            Selected <br/> 
            <span className="italic font-extralight text-accent-sepia dark:text-gray-500">Works</span>
          </h2>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-60 text-right font-bold text-accent-pink mt-6 md:mt-0">
            Galeria da Pele
          </p>
      </div>

      {/* MASONRY GRID */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
          <div className="flex flex-col gap-16 md:gap-32">
            {col1.map((item) => (
              <PortfolioItem key={item.id} item={item} onClick={handleItemClick} />
            ))}
          </div>
          <div ref={col2Ref} className="flex flex-col gap-16 md:gap-32 md:mt-48 will-change-transform">
            {col2.map((item) => (
              <PortfolioItem key={item.id} item={item} onClick={handleItemClick} />
            ))}
          </div>
      </div>

      {/* FULLSCREEN OVERLAY (FLIP TARGET) */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] bg-background-light dark:bg-[#0A0A0A] flex flex-col md:flex-row">
            
            {/* Left: Image Container */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-full relative bg-black">
                <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title}
                    className="detail-image w-full h-full object-cover" // Target for FLIP
                    data-flip-id={`img-${selectedItem.id}`} // Shared ID
                />
                
                <button 
                    onClick={handleClose}
                    className="absolute top-6 left-6 md:hidden z-50 text-white bg-black/50 p-2 rounded-full backdrop-blur-md"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Right: Content (Fade In) */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-full flex flex-col justify-center px-8 md:px-24 relative">
                <button 
                    onClick={handleClose}
                    className="absolute top-12 right-12 hidden md:block text-primary dark:text-white hover:rotate-90 transition-transform duration-300"
                >
                    <X size={32} strokeWidth={1} />
                </button>

                <div className="detail-content opacity-0 translate-y-10">
                    <span className="font-sans text-[10px] tracking-[0.4em] uppercase font-bold text-accent-pink mb-6 block">
                        Project 0{selectedItem.id}
                    </span>
                    <h2 className="font-serif italic font-light text-6xl md:text-8xl text-primary dark:text-white mb-8 leading-none">
                        {selectedItem.title}
                    </h2>
                    <div className="w-12 h-[1px] bg-primary/20 dark:bg-white/20 mb-8"></div>
                    <div className="grid grid-cols-2 gap-12 mb-12">
                        <div>
                            <h4 className="font-sans text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2">Placement</h4>
                            <p className="font-serif text-2xl text-primary dark:text-gray-200">{selectedItem.placement}</p>
                        </div>
                        <div>
                            <h4 className="font-sans text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2">Technique</h4>
                            <p className="font-serif text-2xl text-primary dark:text-gray-200">Fine Line / Texture</p>
                        </div>
                    </div>
                    <p className="font-sans text-xs leading-loose text-gray-600 dark:text-gray-400 max-w-md">
                        This piece explores the relationship between organic form and geometric constraint. 
                        Designed specifically to flow with the muscle structure of the {selectedItem.placement.toLowerCase()}.
                    </p>
                </div>
            </div>
        </div>
      )}

    </section>
  );
};

export default Portfolio;