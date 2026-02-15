import React from 'react';
import { PORTFOLIO_ITEMS } from '../data';

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
            <span className="italic text-gray-400 dark:text-gray-600">Works</span>
          </h2>
          <div className="mt-6 md:mt-0">
            <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-60 text-right">
              Galeria da Pele
            </p>
          </div>
        </div>

        {/* Gallery Grid (Asymmetric) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-16 md:gap-32">
            {col1.map((item) => (
              <div key={item.id} className="group relative">
                <div className="overflow-hidden aspect-[3/4] md:aspect-[4/5] relative bg-gray-200 dark:bg-gray-800">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out transform group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Meta Data */}
                <div className="mt-4 flex justify-between items-baseline opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="font-serif text-2xl text-primary dark:text-white">{item.title}</h3>
                    <span className="font-mono text-xs uppercase tracking-widest text-primary/60 dark:text-white/60">
                        {item.placement}
                    </span>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 (Offset by margin) */}
          <div className="flex flex-col gap-16 md:gap-32 md:mt-32">
            {col2.map((item) => (
              <div key={item.id} className="group relative">
                <div className="overflow-hidden aspect-[3/4] md:aspect-[4/5] relative bg-gray-200 dark:bg-gray-800">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out transform group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Meta Data */}
                <div className="mt-4 flex justify-between items-baseline opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="font-serif text-2xl text-primary dark:text-white">{item.title}</h3>
                    <span className="font-mono text-xs uppercase tracking-widest text-primary/60 dark:text-white/60">
                        {item.placement}
                    </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Portfolio;