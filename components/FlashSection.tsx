import React from 'react';
import { TEXTOS_GERAIS, ITENS_FLASH } from '../data';

const FlashSection: React.FC = () => {
  return (
    <section id="flash" className="bg-primary text-background-light dark:bg-black dark:text-gray-200 py-24 px-6 border-y border-white/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/20 pb-8">
          <h2 className="font-display text-5xl md:text-8xl uppercase tracking-tighter whitespace-pre-line">
            {TEXTOS_GERAIS.tituloFlash}
          </h2>
          <div className="mt-8 md:mt-0 text-right">
            <p className="font-mono text-sm uppercase mb-2 text-white/60">Próximo Evento</p>
            <p className="font-sans text-xl">{TEXTOS_GERAIS.dataProximoEvento}</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-white/20">
          {ITENS_FLASH.map((item) => {
            const isSold = item.status === 'VENDIDO';
            
            return (
              <div 
                key={item.id} 
                className="border-r border-b border-white/20 p-8 hover:bg-white/5 transition-colors relative group h-96 flex flex-col justify-between"
              >
                {/* Top Row: Badge & Number */}
                <div className="flex justify-between items-start">
                  <span 
                    className={`font-mono text-xs border border-white/30 px-2 py-1 rounded-full ${
                      isSold ? 'bg-white text-black' : 'text-white'
                    }`}
                  >
                    {item.status === 'VENDIDO' ? 'VENDIDO' : 'DISP'}
                  </span>
                  <span 
                    className={`font-serif italic text-2xl transition-colors ${
                      isSold ? 'line-through opacity-50' : 'group-hover:text-accent-pink'
                    }`}
                  >
                    {item.numero}
                  </span>
                </div>

                {/* Center SVG Graphic (Revealed on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <svg className="w-32 h-32" viewBox="0 0 100 100">
                    {item.svgPath}
                  </svg>
                </div>

                {/* Bottom Row: Title & Details */}
                <div>
                  <h4 
                    className={`font-sans text-lg uppercase tracking-wider mb-2 ${
                      isSold ? 'line-through opacity-50' : ''
                    }`}
                  >
                    {item.titulo}
                  </h4>
                  <p className="text-xs opacity-60 font-mono">
                    {item.detalhes}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block px-12 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 font-sans text-sm tracking-widest uppercase"
          >
            Ver Todos os Flashes
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlashSection;