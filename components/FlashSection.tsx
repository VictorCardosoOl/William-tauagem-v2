import React, { useRef, useEffect } from 'react';
import { Zap, Crown, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { TEXTOS_GERAIS } from '../data';

const FlashSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const flashFeatures = [
    "Desenhos exclusivos",
    "Valores promocionais",
    "Ordem de chegada"
  ];

  const fullDayFeatures = [
    "Diária fechada (6h - 8h)",
    "Projetos autorais",
    "Privacidade total"
  ];

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const ctx = window.gsap.context(() => {
        // Animate Header - Fast
        window.gsap.from(".flash-header", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%"
            }
        });

        // Animate Cards with tight stagger
        window.gsap.from(".flash-card", {
            y: 50,
            opacity: 0,
            scale: 0.98,
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".flash-grid",
                start: "top 85%"
            }
        });

    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section id="flash" ref={containerRef} className="bg-paper-light dark:bg-black py-20 md:py-32 px-6 border-y border-ink-light dark:border-white/10 transition-colors duration-500">
      <div className="max-w-screen-3xl mx-auto">
        
        <div className="flash-header flex flex-col md:flex-row justify-between items-end mb-20 border-b border-ink-light dark:border-white/10 pb-8">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-ink-medium font-bold mb-4">
                Eventos & Agenda
              </p>
              <h2 className="font-serif font-light text-6xl md:text-8xl 3xl:text-9xl text-ink-black dark:text-white uppercase leading-[0.8]">
                {TEXTOS_GERAIS.tituloFlash}
              </h2>
            </div>
            
            <div className="mt-10 md:mt-0">
               <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-50 text-right font-bold">
                 Próxima Abertura: {TEXTOS_GERAIS.dataProximoEvento}
               </p>
            </div>
        </div>

        <div className="flash-grid grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink-light dark:bg-white/10 border border-ink-light dark:border-white/10">
          
          {/* CARD 1: FLASH DAY */}
          <div className="flash-card bg-paper-light dark:bg-[#121212] text-ink-black dark:text-white p-8 md:p-16 flex flex-col justify-between min-h-[600px] md:min-h-[700px] relative overflow-hidden">
            
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <Zap size={300} strokeWidth={0.2} />
            </div>

            <div>
              <div className="inline-flex items-center gap-3 border border-ink-black/20 dark:border-white/20 px-4 py-2 text-xs tracking-[0.25em] uppercase font-bold mb-12">
                <Zap size={12} fill="currentColor" />
                Flash Day
              </div>

              <h2 className="font-serif font-light text-5xl md:text-6xl leading-[0.9] text-ink-black dark:text-white mb-6">
                Sessões Rápidas <br />
                <span className="italic font-thin text-ink-medium">Catálogo Pronto</span>
              </h2>

              <p className="font-sans text-base text-ink-dark dark:text-gray-400 leading-relaxed tracking-wide max-w-sm mb-10 font-light">
                O estúdio abre as portas para o público. Desenhos autorais pré-definidos, 
                valores especiais e atendimento por ordem de chegada.
              </p>

              <ul className="space-y-4 mb-12">
                {flashFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 font-sans text-xs font-bold uppercase tracking-[0.15em] text-ink-medium">
                    <CheckCircle2 size={16} className="text-ink-black dark:text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-ink-light dark:border-white/10 pt-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ink-medium mb-2">
                  <Calendar size={14} />
                  Próxima Data:
                </div>
                <div className="font-serif italic text-3xl text-ink-black dark:text-white">
                  15 . OUT
                </div>
              </div>

              <button className="bg-ink-black dark:bg-white text-paper-light dark:text-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-ink-dark transition-colors flex items-center gap-4 group w-full md:w-auto justify-center">
                Ver Designs
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>


          {/* CARD 2: FULL DAY */}
          <div className="flash-card relative bg-[#1A1A1A] text-white p-8 md:p-16 flex flex-col justify-between min-h-[600px] md:min-h-[700px] overflow-hidden group">
            
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-black/70 z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1000&auto=format&fit=crop" 
                 alt="Abstract Texture" 
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-[2s]"
               />
            </div>

            <div className="relative z-20">
              <div className="inline-flex items-center gap-3 bg-white text-black px-4 py-2 text-xs tracking-[0.25em] uppercase font-bold mb-12">
                <Crown size={12} fill="currentColor" />
                Experiência VIP
              </div>

              <h2 className="font-serif font-light text-5xl md:text-6xl leading-[0.9] text-white mb-6">
                Full Day <br />
                <span className="italic font-thin text-gray-400">& Imersão Total</span>
              </h2>

              <p className="font-sans text-base text-gray-300 leading-relaxed tracking-wide max-w-sm mb-10 font-light">
                "Aluga" o artista por um dia inteiro. Foco absoluto no seu projeto, sem pressa. 
                Ideal para fechamentos de braço/costas.
              </p>

              <ul className="space-y-4 mb-12">
                {fullDayFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 font-sans text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                    <CheckCircle2 size={16} className="text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
                  <Calendar size={14} />
                  Disponibilidade:
                </div>
                <div className="font-serif italic text-3xl text-white">
                  Sob Consulta
                </div>
              </div>

              <button className="bg-transparent border border-white text-white px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors flex items-center gap-4 group w-full md:w-auto justify-center">
                Solicitar Orçamento
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FlashSection;