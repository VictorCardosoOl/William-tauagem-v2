import React from 'react';
import { TEXTOS_GERAIS, REDES_SOCIAIS } from '../data';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-background-light dark:bg-background-dark pt-32 pb-12 px-6 md:px-12 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32">
          
          {/* Left Column: CTA */}
          <div className="max-w-xl">
            <h2 className="font-serif italic text-5xl md:text-6xl text-primary dark:text-gray-100 mb-8 leading-[1.1] font-light">
              {TEXTOS_GERAIS.rodapeChamada}
            </h2>
            <p className="font-sans text-gray-600 dark:text-gray-400 mb-12 max-w-md leading-relaxed text-sm font-light">
              {TEXTOS_GERAIS.rodapeTexto}
            </p>
            <a 
              href="#" 
              className="group inline-flex items-center gap-6 text-xl md:text-2xl font-serif italic border-b border-primary/30 dark:border-white/30 pb-2 hover:border-primary dark:hover:border-white hover:opacity-70 transition-all duration-500 text-primary dark:text-white"
            >
              <span>{TEXTOS_GERAIS.rodapeBotao}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-4 transition-transform duration-500 font-light" />
            </a>
          </div>

          {/* Right Column: Info Grid */}
          <div className="flex gap-24 lg:gap-32 mt-20 lg:mt-0 font-sans">
            {/* Contact Column */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-ultra text-gray-400 mb-8">
                Contato
              </h4>
              <ul className="space-y-4 text-sm font-light text-primary dark:text-gray-300 tracking-wide">
                {REDES_SOCIAIS.map((social) => (
                  <li key={social.nome}>
                    <a href={social.url} className="hover:text-accent-pink transition-colors relative group">
                      {social.nome}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-pink transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location Column */}
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-ultra text-gray-400 mb-8">
                Local
              </h4>
              <address className="not-italic space-y-2 text-sm font-light text-primary dark:text-gray-300 tracking-wide">
                {TEXTOS_GERAIS.endereco.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </address>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-200 dark:bg-white/5 mb-16"></div>

        {/* Big Typography & Copyright Row */}
        <div className="relative overflow-hidden">
            {/* Big Text with Gradient (Dark Top -> Light Bottom) */}
            <div className="flex justify-center mb-8">
                <h1 className="font-serif text-[16vw] md:text-[19vw] leading-[0.7] text-center tracking-tighter select-none bg-gradient-to-b from-gray-900 to-transparent dark:from-white dark:to-transparent bg-clip-text text-transparent opacity-80 mix-blend-overlay">
                    SIQUEIRA
                </h1>
            </div>

            {/* Bottom Info */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-[10px] uppercase tracking-ultra text-gray-400 font-sans gap-6 font-medium">
                <span>© 2024 William Siqueira</span>
                <span>Fine Line & Contemporary Art</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;