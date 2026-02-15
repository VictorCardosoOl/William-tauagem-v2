import React from 'react';
import { ChevronDown } from 'lucide-react';
import { TEXTOS_GERAIS, IMAGENS } from '../data';

const Hero: React.FC = () => {
  return (
    <header id="work" className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-gray-300 dark:border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGENS.heroBg}
          alt="Fundo abstrato com textura de pele"
          className="w-full h-full object-cover opacity-20 dark:opacity-10 grayscale"
        />
        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-light/20 dark:to-background-dark/50"></div>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center space-y-6 px-4 animate-fade-in-up">
        <p className="font-sans text-xs tracking-[0.3em] uppercase opacity-70">
          {TEXTOS_GERAIS.slogan}
        </p>
        <h1 className="font-serif text-6xl md:text-9xl italic font-light leading-none text-primary dark:text-gray-100">
          {TEXTOS_GERAIS.heroTituloPrincipal} <br />
          <span className="not-italic font-display block mt-2">
            {TEXTOS_GERAIS.heroTituloSecundario}
          </span>
        </h1>
      </div>

      {/* Vertical Text (EST. 2018) */}
      <div className="absolute bottom-10 left-6 hidden md:block">
        <p className="text-xs font-sans rotate-180 text-vertical tracking-widest opacity-60 dark:text-white">
          {TEXTOS_GERAIS.anoEstabelecimento}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-6 animate-bounce">
        <ChevronDown className="h-6 w-6 opacity-60 dark:text-white" />
      </div>
    </header>
  );
};

export default Hero;