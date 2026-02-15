import React, { useState, useRef } from 'react';
import { PORTFOLIO_ITEMS } from '../data';
import { X } from 'lucide-react';

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
             attr: { scale: 30 }, 
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
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick(item, e.currentTarget as HTMLElement);
            }
        }}
        className="group relative cursor-pointer mb-24 3xl:mb-32 w-full block focus:outline-none focus:ring-1 focus:ring-ink-black"
        onClick={(e) => onClick(item, e.currentTarget as HTMLElement)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
            <defs>
                <filter id={filterId}>
                    <feTurbulence type="fractalNoise" baseFrequency="0.015 0.015" numOctaves="1" result="warp" />
                    <feDisplacementMap ref={filterRef} xChannelSelector="R" yChannelSelector="G" scale="0" in="SourceGraphic" in2="warp" />
                </filter>
            </defs>
        </svg>

        <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5] bg-gray-200 dark:bg-gray-800" data-flip-id={`img-${item.id}`}>
            <img 
                ref={imageRef}
                src={item.image} 
                alt={item.title}
                loading="lazy"
                style={{ filter: `url(#${filterId})` }} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0 opacity-100 will-change-transform"
            />
        </div>

        <div className="mt-6 flex flex-col items-start gap-2 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-ink-medium font-bold">
                {item.placement}
            </span>
            <h3 className="font-serif font-light italic text-4xl md:text-5xl 3xl:text-6xl text-ink-black dark:text-paper-light">
                {item.title}
            </h3>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (item: typeof PORTFOLIO_ITEMS[0]) => {
    if (!window.gsap || !window.Flip) {
        setSelectedItem(item);
        return;
    }
    const state = window.Flip.getState(`[data-flip-id="img-${item.id}"]`);
    setSelectedItem(item);
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
                    window.gsap.to('.detail-content', { opacity: 1, y: 0, duration: 0.5 });
                }
            });
        }
    });
  };

  const handleClose = () => {
    if (!selectedItem) return;
    const state = window.Flip.getState('.detail-image');
    setSelectedItem(null);
    requestAnimationFrame(() => {
        const original = document.querySelector(`[data-flip-id="img-${selectedItem.id}"]`);
        if (original) {
             window.Flip.from(state, {
                targets: original,
                duration: 0.6,
                ease: "power3.inOut",
                scale: true 
             });
        }
    });
  };

  const col1 = PORTFOLIO_ITEMS.filter((_, i) => i % 2 === 0);
  const col2 = PORTFOLIO_ITEMS.filter((_, i) => i % 2 !== 0);

  return (
    <section id="work" className="w-full bg-paper-light dark:bg-paper-dark py-24 md:py-32 3xl:py-48 px-6 relative" ref={containerRef}>
      
      {/* HEADER - Editorial Lines */}
      {/* Expanded Max-Width */}
      <div className="max-w-screen-3xl mx-auto mb-32 border-b border-ink-light dark:border-white/10 pb-8 flex flex-col md:flex-row justify-between items-end">
          <h2 className="font-serif font-light text-6xl md:text-8xl 3xl:text-9xl text-ink-black dark:text-paper-light uppercase leading-[0.85]">
            Selected <br/> 
            <span className="italic font-extralight text-ink-medium">Works</span>
          </h2>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-100 text-right font-bold text-ink-black mt-6 md:mt-0">
            Galeria da Pele
          </p>
      </div>

      {/* GRID CONTAINER - Wide Immersive Layout */}
      <div className="max-w-screen-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 3xl:gap-32">
          <div className="flex flex-col gap-16 md:gap-32">
            {col1.map((item) => (
              <PortfolioItem key={item.id} item={item} onClick={handleItemClick} />
            ))}
          </div>
          <div className="flex flex-col gap-16 md:gap-32 md:mt-48">
            {col2.map((item) => (
              <PortfolioItem key={item.id} item={item} onClick={handleItemClick} />
            ))}
          </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-[60] bg-paper-light dark:bg-paper-dark flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-[50vh] md:h-full relative bg-black">
                <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title}
                    className="detail-image w-full h-full object-cover" 
                    data-flip-id={`img-${selectedItem.id}`}
                />
                <button 
                    onClick={handleClose}
                    className="absolute top-6 left-6 md:hidden z-50 text-paper-light bg-black/50 p-2 rounded-full backdrop-blur-md"
                >
                    <X size={24} />
                </button>
            </div>
            <div className="w-full md:w-1/2 h-[50vh] md:h-full flex flex-col justify-center px-8 md:px-24 3xl:px-40 relative">
                <button 
                    onClick={handleClose}
                    className="absolute top-12 right-12 hidden md:block text-ink-black dark:text-paper-light hover:rotate-90 transition-transform duration-300"
                >
                    <X size={32} strokeWidth={1} />
                </button>

                <div className="detail-content opacity-0 translate-y-10">
                    <span className="font-sans text-[10px] tracking-[0.4em] uppercase font-bold text-ink-medium mb-6 block">
                        Project 0{selectedItem.id}
                    </span>
                    <h2 className="font-serif italic font-light text-6xl md:text-8xl 3xl:text-9xl text-ink-black dark:text-paper-light mb-8 leading-none">
                        {selectedItem.title}
                    </h2>
                    <div className="w-12 h-[1px] bg-ink-black dark:bg-paper-light mb-8"></div>
                    <div className="grid grid-cols-2 gap-12 mb-12">
                        <div>
                            <h4 className="font-sans text-[9px] uppercase tracking-[0.2em] text-ink-medium mb-2">Placement</h4>
                            <p className="font-serif text-2xl text-ink-black dark:text-paper-light">{selectedItem.placement}</p>
                        </div>
                        <div>
                            <h4 className="font-sans text-[9px] uppercase tracking-[0.2em] text-ink-medium mb-2">Technique</h4>
                            <p className="font-serif text-2xl text-ink-black dark:text-paper-light">Fine Line / Texture</p>
                        </div>
                    </div>
                    {/* Constrained text width for readability */}
                    <p className="font-sans text-xs 3xl:text-sm leading-loose text-ink-dark dark:text-gray-400 max-w-md">
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
