import React from 'react';
import { TEXTOS_GERAIS, ITENS_CUIDADOS } from '../data';
import { Scissors, Brush, Droplet, Sun } from 'lucide-react';

const Aftercare: React.FC = () => {
  // Helper to match icon to index
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Brush className="w-5 h-5" />;
      case 1: return <Droplet className="w-5 h-5" />;
      case 2: return <Sun className="w-5 h-5" />;
      default: return <Brush className="w-5 h-5" />;
    }
  };

  return (
    <section id="cuidados" className="py-24 px-6 max-w-7xl mx-auto bg-background-light dark:bg-background-dark">
      
      {/* Header Section */}
      <div className="flex flex-col items-center mb-20 text-center space-y-4">
        <Scissors className="text-accent-pink w-8 h-8 transform -rotate-90" strokeWidth={1.5} />
        <h2 className="font-serif text-3xl md:text-5xl italic text-primary dark:text-gray-100 max-w-3xl leading-tight">
          {TEXTOS_GERAIS.tituloPosCuidado}
        </h2>
      </div>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ITENS_CUIDADOS.map((item, index) => (
          <article 
            key={index} 
            className="bg-white dark:bg-white/5 p-8 md:p-10 shadow-sm md:shadow-none hover:shadow-xl transition-shadow duration-300"
          >
            {/* Top Row: Phase Label + Icon */}
            <div className="flex justify-between items-center mb-8">
              <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-accent-pink uppercase">
                {item.fase}
              </span>
              <span className="text-gray-300 dark:text-gray-500">
                {getIcon(index)}
              </span>
            </div>
            
            {/* Title */}
            <h3 className="font-serif text-3xl mb-4 italic text-primary dark:text-white">
              {item.titulo}
            </h3>
            
            {/* Description */}
            <p className="font-sans text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {item.descricao}
            </p>
            
            {/* Divider */}
            <div className="w-full h-px bg-gray-100 dark:bg-gray-800 mb-8"></div>
            
            {/* Steps List */}
            <ul className="space-y-3">
              {item.lista.map((step, stepIndex) => (
                <li key={stepIndex} className="flex items-start font-sans text-xs text-primary dark:text-gray-300 leading-relaxed">
                  <span className="text-accent-pink mr-3 text-lg leading-none">•</span>
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