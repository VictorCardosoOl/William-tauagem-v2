import React from 'react';
import { TEXTOS_GERAIS, REDES_SOCIAIS } from '../data';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappLink = REDES_SOCIAIS.find(social => social.nome === 'WhatsApp')?.url || '#';

  return (
    <footer id="contact" className="bg-paper-light dark:bg-paper-dark pt-40 pb-12 px-6 md:px-12 border-t border-ink-light dark:border-white/5">
      <div className="max-w-screen-3xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-40">
          
          <div className="max-w-xl 3xl:max-w-2xl">
            <h2 className="font-serif italic font-thin text-5xl md:text-7xl 3xl:text-8xl text-ink-black dark:text-gray-100 mb-10 leading-[1.1]">
              {TEXTOS_GERAIS.rodapeChamada}
            </h2>
            <p className="font-sans text-ink-medium dark:text-gray-400 mb-16 max-w-sm leading-loose text-xs 3xl:text-sm tracking-wide font-light">
              {TEXTOS_GERAIS.rodapeTexto}
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-8 text-2xl md:text-3xl 3xl:text-4xl font-serif italic font-light border-b border-ink-black/30 dark:border-white/30 pb-4 hover:border-ink-black dark:hover:border-white hover:opacity-70 transition-all duration-500 text-ink-black dark:text-white"
            >
              <span>{TEXTOS_GERAIS.rodapeBotao}</span>
              <ArrowRight className="h-6 w-6 3xl:h-8 3xl:w-8 group-hover:translate-x-6 transition-transform duration-500 font-light" strokeWidth={1} />
            </a>
          </div>

          <div className="flex gap-24 lg:gap-40 mt-24 lg:mt-0 font-sans">
            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-ink-medium mb-10">
                Contato
              </h4>
              <ul className="space-y-6 text-[10px] 3xl:text-xs font-bold uppercase tracking-[0.2em] text-ink-black dark:text-gray-300">
                {REDES_SOCIAIS.map((social) => (
                  <li key={social.nome}>
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-ink-medium transition-colors relative group"
                    >
                      {social.nome}
                      <span className="absolute -bottom-2 left-0 w-0 h-px bg-ink-black transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-ink-medium mb-10">
                Local
              </h4>
              <address className="not-italic space-y-4 text-[10px] 3xl:text-xs font-medium tracking-wide text-ink-black dark:text-gray-300 leading-relaxed opacity-80">
                {TEXTOS_GERAIS.endereco.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </address>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-ink-light dark:bg-white/5 mb-20"></div>

        <div className="relative overflow-hidden">
            <div className="flex justify-center mb-10">
                <h1 className="font-serif font-bold text-[16vw] md:text-[19vw] leading-[0.7] text-center tracking-tighter select-none text-ink-black opacity-10 dark:text-white dark:opacity-10 mix-blend-multiply dark:mix-blend-overlay">
                    SIQUEIRA
                </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-[9px] uppercase tracking-[0.3em] text-ink-medium font-sans gap-8 font-bold">
                <span>© 2024 William Siqueira</span>
                <span>Fine Line & Contemporary Art</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
