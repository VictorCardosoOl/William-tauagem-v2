import React from 'react';
import { ITENS_PREPARO } from '../data';

const Preparation: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#1a1a1a] py-32 px-6 md:px-12 w-full transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Decorator */}
        <div className="mb-20">
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-[#5a4242] dark:text-white/80 flex items-center gap-4">
                <span className="w-12 h-px bg-[#d48d92]"></span>
                O Preparo
            </h3>
            {/* Curved line decoration similar to image */}
            <div className="mt-4 hidden md:block">
                 <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 25 C 20 25, 40 5, 100 5" stroke="#d48d92" strokeWidth="1" strokeOpacity="0.5" fill="none" />
                 </svg>
            </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {ITENS_PREPARO.map((item) => (
            <div key={item.id} className="group relative">
              
              {/* Giant Number */}
              <div className="mb-4">
                <span className="font-serif text-7xl md:text-8xl text-[#d48d92] opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                  0{item.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl font-bold text-[#1a1a1a] dark:text-white mb-6 relative inline-block">
                {item.titulo}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                {item.descricao}
              </p>
              
              {/* Optional: Tiny dot decoration */}
              {item.id === 2 && (
                 <div className="absolute top-8 right-8 w-2 h-2 bg-black dark:bg-white rounded-full hidden lg:block"></div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Preparation;