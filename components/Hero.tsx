import React from 'react';
import { ArrowDown } from 'lucide-react';
import { TEXTOS_GERAIS } from '../data';

const Hero: React.FC = () => {
  return (
    <header id="home" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden border-b border-gray-300 dark:border-gray-800 bg-background-light dark:bg-background-dark transition-colors duration-500">
      
      {/* Wave Background Pattern */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='40' viewBox='0 0 100 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q25 40 50 20 T100 20' fill='none' stroke='%23a1a1aa' stroke-opacity='0.1' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 40px'
        }}
      ></div>

      {/* Main Content */}
      <div className="z-10 text-center flex flex-col items-center px-4 animate-fade-in-up">
        
        {/* Slogan */}
        <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-50 mb-4 md:mb-6 text-primary dark:text-gray-300">
          {TEXTOS_GERAIS.slogan}
        </p>
        
        {/* Main Title "WILLIAM" */}
        <h1 className="font-serif text-[15vw] md:text-9xl lg:text-[10rem] leading-[0.8] text-primary dark:text-gray-100 uppercase tracking-tight">
          {TEXTOS_GERAIS.heroTituloPrincipal}
        </h1>
        
        {/* Subtitle "Etching Silence" */}
        <p className="font-serif italic text-3xl md:text-5xl lg:text-6xl text-gray-500 dark:text-gray-400 mt-2 font-light">
          {TEXTOS_GERAIS.heroTituloSecundario}
        </p>
      </div>

      {/* Vertical Text (EST. 2018) - Bottom Left */}
      <div className="absolute bottom-12 left-8 hidden md:block">
        <p className="text-[10px] font-sans -rotate-90 text-vertical tracking-[0.2em] opacity-40 text-primary dark:text-white uppercase">
          {TEXTOS_GERAIS.anoEstabelecimento}
        </p>
      </div>

      {/* Scroll Indicator - Bottom Right */}
      <div className="absolute bottom-12 right-8">
        <ArrowDown className="h-5 w-5 opacity-40 text-primary dark:text-white stroke-[1.5]" />
      </div>
    </header>
  );
};

export default Hero;