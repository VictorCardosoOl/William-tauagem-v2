import React from 'react';
import { TEXTOS_GERAIS, ITENS_METODOLOGIA, IMAGENS } from '../data';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="relative py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-5 space-y-20">
          <div className="space-y-6">
            <p className="text-accent-pink font-sans text-[10px] tracking-[0.3em] uppercase font-bold">
              Metodologia
            </p>
            <h2 className="font-serif font-light text-6xl md:text-8xl leading-[0.85] text-primary dark:text-gray-100">
              <span className="block">{TEXTOS_GERAIS.tituloMetodologia.linha1}</span>
              <span className="italic font-thin ml-8 md:ml-16 text-gray-400">
                {TEXTOS_GERAIS.tituloMetodologia.linha2}
              </span>
            </h2>
          </div>

          <div className="space-y-16">
            {ITENS_METODOLOGIA.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-accent-pink font-serif italic text-xl">
                    {item.numero}
                  </span>
                  <h3 className="font-serif font-light text-4xl text-primary dark:text-white group-hover:italic transition-all duration-300">
                    {item.titulo}
                  </h3>
                </div>
                <p className="font-sans text-xs tracking-wide leading-loose text-gray-600 dark:text-gray-400 pl-12 max-w-sm font-light">
                  {item.descricao}
                </p>
                <div className="h-px w-full bg-gray-200 dark:bg-gray-800 mt-8 group-hover:bg-accent-pink transition-colors duration-500 origin-left scale-x-50 group-hover:scale-x-100 ease-out"></div>
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
              <p className="font-serif italic font-light text-2xl leading-relaxed text-gray-800 dark:text-gray-200">
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