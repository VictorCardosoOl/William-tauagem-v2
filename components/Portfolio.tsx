import React from 'react';
import { PORTFOLIO_ITEMS } from '../data';

interface PortfolioItemProps {
  item: typeof PORTFOLIO_ITEMS[0];
}

// Component separated to handle state/animations better and prevent re-renders issues
const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => (
  <div className="group relative cursor-none">
    {/* 
       IMAGE CONTAINER
       Effect: Grayscale bottom layer. Color top layer with Clip-Path Reveal.
       This simulates a directional wipe/reveal, offering the requested "distortion" feel via reveal.
    */}
    <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5] bg-gray-200 dark:bg-gray-800">
      
      {/* Layer 1: Grayscale Base (Bone/Ink feel) */}
      <img 
        src={item.image} 
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-90 transition-transform duration-1000 group-hover:scale-105"
      />

      {/* Layer 2: Color Reveal Overlay (Clip Path) */}
      {/* Starts clipped fully to the right (inset 0 100% 0 0), reveals to 0 */}
      <div className="absolute inset-0 w-full h-full transition-[clip-path] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] z-10 bg-accent-pink/10 mix-blend-multiply">
         <img 
          src={item.image} 
          alt=""
          loading="lazy"
          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
        />
      </div>
      
      {/* Optional: Subtle Overlay for "Ink" feel */}
      <div className="absolute inset-0 bg-primary/10 pointer-events-none mix-blend-overlay"></div>

    </div>
    
    {/* Meta Data */}
    <div className="mt-4 flex justify-between items-baseline opacity-70 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="font-serif text-2xl text-primary dark:text-white">{item.title}</h3>
        <span className="font-sans text-xs uppercase tracking-widest text-accent-sepia dark:text-white/60 font-bold">
            {item.placement}
        </span>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  // Divindo os itens em colunas para o efeito masonry manual
  const col1 = PORTFOLIO_ITEMS.filter((_, i) => i % 2 === 0);
  const col2 = PORTFOLIO_ITEMS.filter((_, i) => i % 2 !== 0);

  return (
    <section id="work" className="w-full bg-background-light dark:bg-background-dark py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-primary/10 dark:border-white/10 pb-8">
          <h2 className="font-serif text-5xl md:text-7xl text-primary dark:text-gray-100 uppercase leading-none">
            Selected <br/> 
            <span className="italic text-accent-sepia dark:text-gray-500">Works</span>
          </h2>
          <div className="mt-6 md:mt-0">
            <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-60 text-right font-bold text-accent-pink">
              Galeria da Pele
            </p>
          </div>
        </div>

        {/* Gallery Grid (Asymmetric) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-16 md:gap-32">
            {col1.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </div>

          {/* Column 2 (Offset by margin) */}
          <div className="flex flex-col gap-16 md:gap-32 md:mt-32">
            {col2.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Portfolio;