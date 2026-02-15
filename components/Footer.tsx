import React from 'react';
import { TEXTOS_GERAIS, REDES_SOCIAIS } from '../data';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-background-light dark:bg-background-dark pt-32 pb-12 px-6 md:px-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32">
          
          {/* Left Column: CTA */}
          <div className="max-w-lg">
            <h2 className="font-serif italic text-4xl md:text-5xl text-primary dark:text-gray-100 mb-6 leading-tight">
              {TEXTOS_GERAIS.rodapeChamada}
            </h2>
            <p className="font-sans text-gray-600 dark:text-gray-400 mb-10 max-w-md leading-relaxed text-base">
              {TEXTOS_GERAIS.rodapeTexto}
            </p>
            <a 
              href="#" 
              className="group inline-flex items-center gap-4 text-lg border-b border-primary dark:border-white pb-2 hover:opacity-70 transition-all duration-300 text-primary dark:text-white"
            >
              <span>{TEXTOS_GERAIS.rodapeBotao}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Right Column: Info Grid */}
          <div className="flex gap-16 lg:gap-32 mt-16 lg:mt-0 font-sans">
            {/* Contact Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-6">
                Contato
              </h4>
              <ul className="space-y-4 text-sm font-medium text-primary dark:text-gray-300">
                {REDES_SOCIAIS.map((social) => (
                  <li key={social.nome}>
                    <a href={social.url} className="hover:text-accent-pink transition-colors">
                      {social.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-6">
                Local
              </h4>
              <address className="not-italic space-y-1 text-sm font-medium text-primary dark:text-gray-300">
                {TEXTOS_GERAIS.endereco.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </address>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-12"></div>

        {/* Big Typography & Copyright Row */}
        <div className="relative">
            {/* Big Text */}
            <div className="flex justify-center mb-4">
                <h1 className="font-display text-[15vw] md:text-[18vw] leading-[0.8] text-center tracking-tighter select-none bg-gradient-to-b from-gray-400 to-gray-100 dark:from-gray-600 dark:to-gray-900 bg-clip-text text-transparent opacity-80">
                    SIQUEIRA
                </h1>
            </div>

            {/* Bottom Info */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-[10px] uppercase tracking-[0.2em] text-gray-400 font-sans gap-4">
                <span>© 2024 William Siqueira</span>
                <span>Fine Line & Contemporary Art</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;