import React from 'react';
import { TEXTOS_GERAIS } from '../data';

const About: React.FC = () => {
  const { sobre } = TEXTOS_GERAIS;

  return (
    <section id="about" className="bg-white dark:bg-background-dark py-32 px-6 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Text Content (Right Aligned) */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right mb-32">
          <div className="max-w-3xl">
            <h2 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.9] uppercase text-primary dark:text-white mb-8 tracking-tighter">
              {sobre.tituloParte1} <br />
              <span className="font-serif italic text-accent-sepia dark:text-gray-500 font-light">{sobre.tituloDestaque}</span> <br />
              {sobre.tituloParte2}
            </h2>
            
            <p className="font-sans text-sm md:text-base text-gray-700 dark:text-gray-400 leading-loose tracking-wide max-w-lg ml-auto font-light border-l border-primary/10 pl-6 md:pl-0 md:border-l-0 md:border-r md:pr-6">
              {sobre.descricao}
            </p>
          </div>
        </div>

        {/* Bottom Section: Image Grid with Directional Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sobre.imagens.map((item, index) => (
            <div key={index} className="aspect-[3/4] overflow-hidden w-full relative group cursor-crosshair">
              
              {/* Layer 1: Grayscale Base */}
              <img 
                src={item.url} 
                alt={item.alt} 
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-90"
              />

              {/* Layer 2: Color Reveal Overlay (Clip Path) */}
              <div className="absolute inset-0 w-full h-full transition-[clip-path] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] z-10">
                 <img 
                  src={item.url} 
                  alt=""
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
              </div>
              
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <span className="font-sans text-[9px] tracking-[0.3em] bg-primary text-white px-3 py-1 uppercase font-bold">Fig. 0{index + 1}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;