import React from 'react';
import { ITENS_PREPARO } from '../data';

const Preparation: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#1a1a1a] py-32 px-6 md:px-12 w-full transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Decorator */}
        <div className="mb-24">
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-[#5a4242] dark:text-white/80 flex items-center gap-6">
                <span className="w-16 h-px bg-[#d48d92]"></span>
                O Preparo
            </h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {ITENS_PREPARO.map((item) => (
            <div key={item.id} className="group relative">
              
              {/* Giant Number */}
              <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="font-serif italic font-thin text-8xl md:text-9xl text-[#d48d92] opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  0{item.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl font-light italic text-[#1a1a1a] dark:text-white mb-6 relative inline-block">
                {item.titulo}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs leading-loose tracking-wide text-gray-600 dark:text-gray-400 font-light">
                {item.descricao}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Preparation;