import React from 'react';
import { TEXTOS_GERAIS, ITENS_FLASH } from '../data';

const FlashSection: React.FC = () => {
  return (
    <section id="flash" className="bg-primary text-background-light dark:bg-black dark:text-gray-200 py-32 px-6 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
          <h2 className="font-serif text-6xl md:text-8xl uppercase tracking-tighter whitespace-pre-line leading-[0.9] font-light">
            {TEXTOS_GERAIS.tituloFlash}
          </h2>
          <div className="mt-8 md:mt-0 text-right">
            <p className="font-sans text-xs uppercase tracking-ultra mb-2 text-white/50">Próximo Evento</p>
            <p className="font-serif italic text-2xl md:text-3xl text-white/90">{TEXTOS_GERAIS.dataProximoEvento}</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {ITENS_FLASH.map((item) => {
            const isSold = item.status === 'VENDIDO';
            
            return (
              <div 
                key={item.id} 
                className="bg-primary dark:bg-black p-12 hover:bg-white/5 transition-colors relative group h-[450px] flex flex-col justify-between"
              >
                {/* Top Row: Badge & Number */}
                <div className="flex justify-between items-start">
                  <span 
                    className={`font-sans text-[10px] tracking-widest border border-white/20 px-3 py-1 rounded-full uppercase ${
                      isSold ? 'bg-white text-black font-bold' : 'text-white/70'
                    }`}
                  >
                    {item.status === 'VENDIDO' ? 'VENDIDO' : 'DISP'}
                  </span>
                  <span 
                    className={`font-serif text-3xl transition-colors font-light ${
                      isSold ? 'line-through opacity-30' : 'group-hover:text-accent-pink opacity-50'
                    }`}
                  >
                    {item.numero}
                  </span>
                </div>

                {/* Center SVG Graphic (Revealed on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <svg className="w-40 h-40 drop-shadow-2xl" viewBox="0 0 100 100">
                    {item.svgPath}
                  </svg>
                </div>

                {/* Bottom Row: Title & Details */}
                <div className="z-10">
                  <h4 
                    className={`font-serif text-3xl tracking-tight mb-3 font-light ${
                      isSold ? 'line-through opacity-40' : ''
                    }`}
                  >
                    {item.titulo}
                  </h4>
                  <p className="text-xs text-white/50 font-sans tracking-widest uppercase">
                    {item.detalhes}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block px-12 py-4 border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-500 font-sans text-xs tracking-ultra uppercase font-medium"
          >
            Ver Todos os Flashes
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlashSection;