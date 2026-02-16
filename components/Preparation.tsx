import React from 'react';
import { ITENS_PREPARO } from '../data';

const Preparation: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col bg-white dark:bg-[#1a1a1a] py-20 md:py-32 px-6 md:px-12 w-full transition-colors duration-500 border-t border-ink-light dark:border-white/5 relative">
      <div className="max-w-screen-3xl mx-auto w-full my-auto">
        
        <div className="mb-16 md:mb-24">
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-ink-medium dark:text-white/80 flex items-center gap-6">
                <span className="w-16 h-px bg-ink-medium"></span>
                O Preparo
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 3xl:gap-24">
          {ITENS_PREPARO.map((item) => (
            <div key={item.id} className="group relative">
              
              <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="font-serif italic font-thin text-8xl md:text-9xl 3xl:text-[8rem] text-ink-light opacity-60 group-hover:text-ink-medium group-hover:opacity-100 transition-all duration-500">
                  0{item.id}
                </span>
              </div>

              <h3 className="font-serif text-3xl 3xl:text-4xl font-light italic text-ink-black dark:text-white mb-6 relative inline-block">
                {item.titulo}
              </h3>

              <p className="font-sans text-xs 3xl:text-sm leading-loose tracking-wide text-ink-dark dark:text-gray-400 font-light">
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