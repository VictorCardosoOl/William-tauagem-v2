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
              <span className="font-serif italic text-gray-400 dark:text-gray-600 font-normal">{sobre.tituloDestaque}</span> <br />
              {sobre.tituloParte2}
            </h2>
            
            <p className="font-sans text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg ml-auto font-light">
              {sobre.descricao}
            </p>
          </div>
        </div>

        {/* Bottom Section: Image Grid with Directional Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sobre.imagens.map((item, index) => (
            <div key={index} className="aspect-[3/4] overflow-hidden w-full relative group">
              
              {/* Layer 1: Grayscale Base */}
              <img 
                src={item.url} 
                alt={item.alt} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
              />

              {/* Layer 2: Color Reveal Overlay (Clip Path) */}
              <div className="absolute inset-0 w-full h-full transition-[clip-path] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] z-10">
                 <img 
                  src={item.url} 
                  alt=""
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;