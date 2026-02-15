import React from 'react';
import { TEXTOS_GERAIS } from '../data';

const About: React.FC = () => {
  const { sobre } = TEXTOS_GERAIS;

  return (
    <section id="about" className="bg-white dark:bg-background-dark py-32 px-6 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Text Content (Right Aligned) */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right mb-24">
          <div className="max-w-2xl">
            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl leading-tight uppercase text-primary dark:text-white mb-6">
              {sobre.tituloParte1} <br />
              <span className="text-gray-400 dark:text-gray-600">{sobre.tituloDestaque}</span> <br />
              {sobre.tituloParte2}
            </h2>
            
            <p className="font-serif text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg ml-auto">
              {sobre.descricao}
            </p>
          </div>
        </div>

        {/* Bottom Section: Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sobre.imagens.map((imgUrl, index) => (
            <div key={index} className="aspect-[3/4] overflow-hidden w-full relative">
              <img 
                src={imgUrl} 
                alt={`Atmosphere ${index + 1}`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
              {/* Optional: Add a subtle darkening overlay that vanishes on hover if desired, 
                  but keeping it clean as per screenshot */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;