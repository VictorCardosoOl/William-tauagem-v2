import React from 'react';
import { TEXTOS_GERAIS, ITENS_METODOLOGIA, IMAGENS } from '../data';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="relative py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-5 space-y-16">
          <div className="space-y-4">
            <p className="text-accent-pink font-sans text-xs tracking-[0.2em] uppercase font-bold">
              Metodologia
            </p>
            <h2 className="font-serif text-6xl md:text-7xl leading-tight text-primary dark:text-gray-100">
              <span className="block">{TEXTOS_GERAIS.tituloMetodologia.linha1}</span>
              <span className="italic font-light ml-8 md:ml-16">
                {TEXTOS_GERAIS.tituloMetodologia.linha2}
              </span>
            </h2>
          </div>

          <div className="space-y-12">
            {ITENS_METODOLOGIA.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-accent-pink font-mono text-xs font-bold">
                    {item.numero}
                  </span>
                  <h3 className="font-serif text-2xl text-primary dark:text-white group-hover:italic transition-all duration-300">
                    {item.titulo}
                  </h3>
                </div>
                <p className="font-sans text-sm text-gray-600 dark:text-gray-400 pl-8 leading-relaxed max-w-sm">
                  {item.descricao}
                </p>
                <div className="h-px w-full bg-gray-300 dark:bg-gray-800 mt-6 group-hover:bg-accent-pink transition-colors duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-7 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-t-[1000px] overflow-hidden shadow-2xl group">
            <img
              src={IMAGENS.metodologiaDestaque}
              alt="Textura de pele em close"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
            />
            <div className="absolute bottom-12 right-0 bg-white dark:bg-gray-900 p-8 shadow-xl max-w-xs transform translate-x-4 transition-transform hover:translate-x-0">
              <p className="font-serif italic text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                {TEXTOS_GERAIS.citacaoImagem}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;