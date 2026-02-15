import React from 'react';
import { Zap, Crown, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { TEXTOS_GERAIS } from '../data';

const FlashSection: React.FC = () => {
  const flashFeatures = [
    "Desenhos exclusivos do dia",
    "Valores promocionais",
    "Ordem de chegada"
  ];

  const fullDayFeatures = [
    "Diária fechada (6h - 8h)",
    "Projetos autorais extensos",
    "Privacidade total"
  ];

  return (
    <section id="flash" className="bg-background-light dark:bg-black py-32 px-6 border-y border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Reintroduced */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gray-200 dark:border-white/10 pb-8">
            <div>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-pink font-bold mb-6">
                Eventos & Agenda
              </p>
              <h2 className="font-serif font-light text-6xl md:text-8xl text-primary dark:text-white uppercase leading-[0.8]">
                {TEXTOS_GERAIS.tituloFlash}
              </h2>
            </div>
            
            <div className="mt-12 md:mt-0">
               <p className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-50 text-right font-bold">
                 Próxima Abertura: {TEXTOS_GERAIS.dataProximoEvento}
               </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl">
          
          {/* CARD 1: FLASH DAY (Light) */}
          <div className="bg-[#FAFAFA] text-primary p-12 md:p-20 flex flex-col justify-between min-h-[700px] relative overflow-hidden">
            
            {/* Background Texture Hint */}
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Zap size={300} strokeWidth={0.2} />
            </div>

            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-3 border border-primary/20 px-4 py-2 text-[9px] tracking-[0.25em] uppercase font-bold mb-16">
                <Zap size={10} fill="currentColor" />
                Flash Day
              </div>

              {/* Title */}
              <h2 className="font-serif font-light text-6xl md:text-7xl leading-[0.9] text-primary mb-8">
                Sessões Rápidas <br />
                <span className="italic font-thin text-gray-400">& Catálogo Pronto</span>
              </h2>

              {/* Description */}
              <p className="font-sans text-xs text-gray-600 leading-loose tracking-wide max-w-sm mb-12 font-light">
                O estúdio abre as portas para o público. Desenhos autorais pré-definidos, 
                valores especiais e atendimento por ordem de chegada.
              </p>

              {/* List */}
              <ul className="space-y-4 mb-16">
                {flashFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500">
                    <CheckCircle2 size={14} className="text-[#d48d92]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-gray-200 pt-10">
              <div>
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
                  <Calendar size={12} />
                  Próxima Data:
                </div>
                <div className="font-serif italic text-4xl text-primary">
                  15 . OUT
                </div>
              </div>

              <button className="bg-primary text-white px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors flex items-center gap-4 group">
                Ver Designs Disponíveis
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>


          {/* CARD 2: FULL DAY (Dark/Image) */}
          <div className="relative bg-[#0f0f0f] text-white p-12 md:p-20 flex flex-col justify-between min-h-[700px] overflow-hidden group">
            
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-black/60 z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1000&auto=format&fit=crop" 
                 alt="Abstract Texture" 
                 className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-[2s]"
               />
            </div>

            <div className="relative z-20">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-[#782838] text-white px-4 py-2 text-[9px] tracking-[0.25em] uppercase font-bold mb-16 shadow-lg">
                <Crown size={10} fill="currentColor" />
                Experiência VIP
              </div>

              {/* Title */}
              <h2 className="font-serif font-light text-6xl md:text-7xl leading-[0.9] text-white mb-8">
                Full Day <br />
                <span className="italic font-thin text-[#d48d92] opacity-80">& Imersão Total</span>
              </h2>

              {/* Description */}
              <p className="font-sans text-xs text-gray-300 leading-loose tracking-wide max-w-sm mb-12 font-light">
                "Aluga" o artista por um dia inteiro. Foco absoluto no seu projeto, sem pressa. 
                Ideal para fechamentos de braço/costas.
              </p>

              {/* List */}
              <ul className="space-y-4 mb-16">
                {fullDayFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-gray-300">
                    <CheckCircle2 size={14} className="text-[#d48d92]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Area */}
            <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-white/10 pt-10">
              <div>
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
                  <Calendar size={12} />
                  Disponibilidade:
                </div>
                <div className="font-serif italic text-4xl text-white">
                  Sob Consulta
                </div>
              </div>

              <button className="bg-white text-primary px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors flex items-center gap-4 group">
                Solicitar Orçamento Full Day
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FlashSection;