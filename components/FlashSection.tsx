import React from 'react';
import { Zap, Crown, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';

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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl">
          
          {/* CARD 1: FLASH DAY (Light) */}
          <div className="bg-[#FAFAFA] text-primary p-12 md:p-16 flex flex-col justify-between min-h-[600px] relative overflow-hidden">
            
            {/* Background Texture Hint */}
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Zap size={200} strokeWidth={0.5} />
            </div>

            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 text-[10px] tracking-widest uppercase font-bold mb-12">
                <Zap size={12} fill="currentColor" />
                Flash Day
              </div>

              {/* Title */}
              <h2 className="font-serif text-5xl md:text-6xl leading-[0.9] text-primary mb-6">
                Sessões Rápidas <br />
                <span className="italic text-gray-400 font-light">& Catálogo Pronto</span>
              </h2>

              {/* Description */}
              <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-sm mb-10">
                O estúdio abre as portas para o público. Desenhos autorais pré-definidos, 
                valores especiais e atendimento por ordem de chegada.
              </p>

              {/* List */}
              <ul className="space-y-4 mb-12">
                {flashFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-wider text-gray-500">
                    <CheckCircle2 size={16} className="text-[#d48d92]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-gray-200 pt-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  <Calendar size={14} />
                  Próxima Data:
                </div>
                <div className="font-serif text-3xl text-primary">
                  15 . OUT
                </div>
              </div>

              <button className="bg-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center gap-3 group">
                Ver Designs Disponíveis
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>


          {/* CARD 2: FULL DAY (Dark/Image) */}
          <div className="relative bg-[#0f0f0f] text-white p-12 md:p-16 flex flex-col justify-between min-h-[600px] overflow-hidden group">
            
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
              <div className="inline-flex items-center gap-2 bg-[#782838] text-white px-4 py-2 text-[10px] tracking-widest uppercase font-bold mb-12 shadow-lg">
                <Crown size={12} fill="currentColor" />
                Experiência VIP
              </div>

              {/* Title */}
              <h2 className="font-serif text-5xl md:text-6xl leading-[0.9] text-white mb-6">
                Full Day <br />
                <span className="italic text-[#d48d92] opacity-80 font-light">& Imersão Total</span>
              </h2>

              {/* Description */}
              <p className="font-sans text-sm text-gray-300 leading-relaxed max-w-sm mb-10">
                "Aluga" o artista por um dia inteiro. Foco absoluto no seu projeto, sem pressa. 
                Ideal para fechamentos de braço/costas.
              </p>

              {/* List */}
              <ul className="space-y-4 mb-12">
                {fullDayFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-wider text-gray-300">
                    <CheckCircle2 size={16} className="text-[#d48d92]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Area */}
            <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  <Calendar size={14} />
                  Disponibilidade:
                </div>
                <div className="font-serif text-3xl text-white">
                  Sob Consulta
                </div>
              </div>

              <button className="bg-white text-primary px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center gap-3 group">
                Solicitar Orçamento Full Day
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FlashSection;