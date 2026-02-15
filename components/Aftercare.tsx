import React from 'react';
import { TEXTOS_GERAIS, ITENS_CUIDADOS } from '../data';
import { Scissors, Brush, Droplet, Sun } from 'lucide-react';

const Aftercare: React.FC = () => {
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Brush className="w-5 h-5" />;
      case 1: return <Droplet className="w-5 h-5" />;
      case 2: return <Sun className="w-5 h-5" />;
      default: return <Brush className="w-5 h-5" />;
    }
  };

  return (
    <section id="cuidados" className="py-32 3xl:py-48 px-6 max-w-screen-3xl mx-auto bg-paper-light dark:bg-paper-dark">
      
      <div className="flex flex-col items-center mb-24 text-center space-y-8">
        <Scissors className="text-ink-black w-6 h-6 transform -rotate-90" strokeWidth={1} />
        <h2 className="font-serif font-light text-4xl md:text-6xl 3xl:text-7xl italic text-ink-black dark:text-gray-100 max-w-3xl leading-tight">
          {TEXTOS_GERAIS.tituloPosCuidado}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 3xl:gap-12">
        {ITENS_CUIDADOS.map((item, index) => (
          <article 
            key={index} 
            className="bg-white dark:bg-white/5 p-10 md:p-12 3xl:p-16 border border-ink-light dark:border-white/5 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-sans text-[9px] tracking-[0.3em] font-bold text-ink-medium uppercase">
                {item.fase}
              </span>
              <span className="text-ink-light dark:text-gray-500">
                {getIcon(index)}
              </span>
            </div>
            
            <h3 className="font-serif font-light text-4xl 3xl:text-5xl mb-6 italic text-ink-black dark:text-white">
              {item.titulo}
            </h3>
            
            <p className="font-sans text-xs 3xl:text-sm text-ink-medium dark:text-gray-400 leading-loose tracking-wide mb-10 font-light">
              {item.descricao}
            </p>
            
            <div className="w-full h-px bg-ink-light dark:bg-gray-800 mb-8"></div>
            
            <ul className="space-y-4">
              {item.lista.map((step, stepIndex) => (
                <li key={stepIndex} className="flex items-start font-sans text-[10px] 3xl:text-xs tracking-wide text-ink-black dark:text-gray-300 leading-relaxed font-bold">
                  <span className="text-ink-medium mr-4 text-xs">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Aftercare;
