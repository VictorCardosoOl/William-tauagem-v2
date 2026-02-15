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
        // Animate Header
        window.gsap.from(".flash-header", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%"
            }
        });

        // Animate Cards with stagger
        window.gsap.from(".flash-card", {
            y: 100,
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".flash-grid",
                start: "top 75%"
            }
        });

    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section id="flash" ref={containerRef} className="bg-paper-light dark:bg-black py-32 3xl:py-48 px-6 border-y border-ink-light dark:border-white/10 transition-colors duration-500">
      <div className="max-w-screen-3xl mx-auto">
        
        <div className="flash-header flex flex-col md:flex-row justify-between items-end mb-24 border-b border-ink-light dark:border-white/10 pb-8">
            <div>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-ink-medium font-bold mb-6">
                Eventos & Agenda
              </p>
              <h2 className="font-serif font-light text-6xl md:text-8xl 3xl:text-9xl text-ink-black dark:text-white uppercase leading-[0.8]">
                {TEXTOS_GERAIS.tituloFlash}
              </h2>
            </div>
            
            <div className="mt-12 md:mt-0">
               <p className="font-sans text-[10px] tracking-[0.2em] uppercase opacity-50 text-right font-bold">
                 Próxima Abertura: {TEXTOS_GERAIS.dataProximoEvento}
               </p>
            </div>
        </div>

        <div className="flash-grid grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink-light dark:bg-white/10 border border-ink-light dark:border-white/10">
          
          {/* CARD 1: FLASH DAY */}
          <div className="flash-card bg-paper-light dark:bg-[#121212] text-ink-black dark:text-white p-12 md:p-20 3xl:p-28 flex flex-col justify-between min-h-[700px] 3xl:min-h-[850px] relative overflow-hidden">
            
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <Zap size={300} strokeWidth={0.2} />
            </div>

            <div>
              <div className="inline-flex items-center gap-3 border border-ink-black/20 dark:border-white/20 px-4 py-2 text-[9px] tracking-[0.25em] uppercase font-bold mb-16">
                <Zap size={10} fill="currentColor" />
                Flash Day
              </div>

              <h2 className="font-serif font-light text-6xl md:text-7xl 3xl:text-8xl leading-[0.9] text-ink-black dark:text-white mb-8">
                Sessões Rápidas <br />
                <span className="italic font-thin text-ink-medium">Catálogo Pronto</span>
              </h2>

              <p className="font-sans text-xs 3xl:text-sm text-ink-dark dark:text-gray-400 leading-loose tracking-wide max-w-sm mb-12 font-light">
                O estúdio abre as portas para o público. Desenhos autorais pré-definidos, 
                valores especiais e atendimento por ordem de chegada.
              </p>

              <ul className="space-y-4 mb-16">
                {flashFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-ink-medium">
                    <CheckCircle2 size={14} className="text-ink-black dark:text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-ink-light dark:border-white/10 pt-10">
              <div>
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-ink-medium mb-2">
                  <Calendar size={12} />
                  Próxima Data:
                </div>
                <div className="font-serif italic text-4xl text-ink-black dark:text-white">
                  15 . OUT
                </div>
              </div>

              <button className="bg-ink-black dark:bg-white text-paper-light dark:text-primary px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-ink-dark transition-colors flex items-center gap-4 group">
                Ver Designs
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>


          {/* CARD 2: FULL DAY */}
          <div className="flash-card relative bg-[#1A1A1A] text-white p-12 md:p-20 3xl:p-28 flex flex-col justify-between min-h-[700px] 3xl:min-h-[850px] overflow-hidden group">
            
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-black/70 z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1000&auto=format&fit=crop" 
                 alt="Abstract Texture" 
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-[2s]"
               />
            </div>

            <div className="relative z-20">
              <div className="inline-flex items-center gap-3 bg-white text-black px-4 py-2 text-[9px] tracking-[0.25em] uppercase font-bold mb-16">
                <Crown size={10} fill="currentColor" />
                Experiência VIP
              </div>

              <h2 className="font-serif font-light text-6xl md:text-7xl 3xl:text-8xl leading-[0.9] text-white mb-8">
                Full Day <br />
                <span className="italic font-thin text-gray-400">& Imersão Total</span>
              </h2>

              <p className="font-sans text-xs 3xl:text-sm text-gray-300 leading-loose tracking-wide max-w-sm mb-12 font-light">
                "Aluga" o artista por um dia inteiro. Foco absoluto no seu projeto, sem pressa. 
                Ideal para fechamentos de braço/costas.
              </p>

              <ul className="space-y-4 mb-16">
                {fullDayFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                    <CheckCircle2 size={14} className="text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

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

              <button className="bg-transparent border border-white text-white px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors flex items-center gap-4 group">
                Solicitar Orçamento
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