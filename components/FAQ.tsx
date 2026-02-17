import React, { useState, useRef, useEffect } from 'react';
import { ITENS_FAQ } from '../data';
import { Plus, ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const ctx = window.gsap.context(() => {
        // Sticky Title Entrance
        window.gsap.from(".faq-sticky-content", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%"
            }
        });

        // List Items Entrance
        window.gsap.from(".faq-item", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".faq-list-container",
                start: "top 75%"
            }
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={containerRef} className="py-24 md:py-32 px-6 bg-[#EBE9E4] dark:bg-[#0a0a0a] transition-colors duration-500 border-t border-ink-black/5 dark:border-white/5">
      <div className="max-w-screen-3xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* LEFT COLUMN - STICKY HEADER */}
        <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-32 faq-sticky-content">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-10 h-px bg-ink-black dark:bg-white"></span>
                    <span className="font-sans text-xs tracking-[0.25em] uppercase font-bold text-ink-medium">
                        Suporte
                    </span>
                </div>
                
                <h2 className="font-serif font-medium text-6xl md:text-7xl text-ink-black dark:text-white leading-[0.9] mb-8">
                    Dúvidas <br/>
                    <span className="text-ink-medium/50 italic font-light">Frequentes</span>
                </h2>

                <p className="font-sans text-sm leading-relaxed text-ink-dark dark:text-gray-400 max-w-sm mb-12 font-light tracking-wide">
                    A transparência é fundamental para um processo criativo fluido. Aqui estão as respostas para as questões mais comuns sobre agendamento, criação e cuidados.
                </p>

                <div className="hidden lg:block">
                     <a href="#contact" className="inline-flex items-center gap-3 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ink-black dark:text-white border-b border-ink-black/30 dark:border-white/30 pb-2 hover:opacity-60 transition-opacity hover:border-ink-black dark:hover:border-white">
                        Falar no WhatsApp <ArrowRight size={14} />
                     </a>
                </div>
            </div>
        </div>

        {/* RIGHT COLUMN - LIST */}
        <div className="lg:col-span-7 lg:col-start-6 faq-list-container">
            {ITENS_FAQ.map((item, index) => {
                const isOpen = openIndex === index;
                
                return (
                    <div 
                        key={item.id} 
                        className="faq-item border-b border-ink-black/10 dark:border-white/10 last:border-0"
                    >
                        <button 
                            onClick={() => toggleAccordion(index)}
                            className="w-full py-10 flex items-start justify-between gap-6 group text-left"
                        >
                            {/* TITLE: Translated on Open/Hover, NO Italic */}
                            <h3 className={`font-serif text-2xl md:text-4xl transition-all duration-500 transform ${
                                isOpen 
                                ? 'text-ink-black dark:text-white translate-x-4' 
                                : 'text-ink-dark/70 dark:text-gray-500 group-hover:text-ink-black dark:group-hover:text-white group-hover:translate-x-2'
                            }`}>
                                {item.pergunta}
                            </h3>
                            
                            <span className={`mt-2 shrink-0 transition-transform duration-500 text-ink-black dark:text-white ${isOpen ? 'rotate-45' : 'rotate-0 group-hover:rotate-90'}`}>
                                <Plus size={24} strokeWidth={0.8} />
                            </span>
                        </button>

                        {/* CONTENT: Grid Template Rows Animation (Performance Optimized) */}
                        <div 
                            className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                isOpen ? 'grid-rows-[1fr] opacity-100 mb-12' : 'grid-rows-[0fr] opacity-0 mb-0'
                            }`}
                        >
                            <div className="overflow-hidden">
                                <div className="font-sans text-base leading-loose text-ink-medium dark:text-gray-400 max-w-2xl pl-4 md:pl-6 border-l border-ink-black/5 dark:border-white/5 font-light">
                                    <p className="mb-8">{item.resposta}</p>
                                    
                                    {item.detalhes && item.detalhes.length > 0 && (
                                        <div className="mt-8 pl-6 border-l-2 border-ink-black dark:border-white">
                                            <ul className="space-y-4">
                                                {item.detalhes.map((detalhe, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-wider text-ink-black dark:text-white">
                                                        <span className="w-1.5 h-1.5 bg-ink-black dark:bg-white rounded-full"></span>
                                                        {detalhe}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            
            {/* Mobile Only CTA */}
            <div className="mt-12 lg:hidden">
                 <a href="#contact" className="inline-flex items-center gap-3 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ink-black dark:text-white border-b border-ink-black/30 dark:border-white/30 pb-2">
                    Falar no WhatsApp <ArrowRight size={14} />
                 </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;