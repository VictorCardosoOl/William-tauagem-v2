import React, { useState, useRef, useEffect } from 'react';
import { ITENS_FAQ } from '../data';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const ctx = window.gsap.context(() => {
        // Animation for Title
        window.gsap.from(".faq-header", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%"
            }
        });

        // Animation for Lines
        window.gsap.from(".faq-line", {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.2,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: {
                trigger: ".faq-list",
                start: "top 80%"
            }
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={containerRef} className="py-24 md:py-32 px-6 bg-paper-light dark:bg-paper-dark transition-colors duration-500 overflow-hidden border-t border-ink-black/10 dark:border-white/10">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* HEADER SECTION - CENTERED (Editorial Style) */}
        <div className="faq-header flex flex-col items-center text-center mb-24 gap-6">
            <div className="flex items-center gap-4 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-sepia animate-pulse"></span>
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-ink-medium">
                    Dúvidas Frequentes
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-sepia animate-pulse"></span>
            </div>
            
            <h2 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-ink-black dark:text-gray-100 max-w-5xl mx-auto">
                O que você precisa <br/>
                <span className="italic text-ink-medium/60 dark:text-gray-500 font-thin">saber antes de agendar.</span>
            </h2>
        </div>

        {/* LIST */}
        <div className="faq-list flex flex-col">
            {ITENS_FAQ.map((item, index) => {
                const isOpen = openIndex === index;
                const formattedId = (index + 1).toString().padStart(2, '0');

                return (
                    <article key={item.id} className="group cursor-pointer" onClick={() => toggleAccordion(index)}>
                        {/* LINE */}
                        <div className="faq-line w-full h-px bg-ink-black/10 dark:bg-white/10 group-hover:bg-ink-black dark:group-hover:bg-white transition-colors duration-500"></div>
                        
                        {/* HEADER */}
                        <div className="py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            
                            <div className="flex items-baseline gap-6 md:gap-12">
                                {/* NUMBER */}
                                <span className={`font-sans text-xs font-bold tracking-[0.2em] transition-colors duration-500 ${isOpen ? 'text-accent-sepia' : 'text-ink-medium'}`}>
                                    {formattedId}
                                </span>

                                {/* TITLE - Transitions */}
                                <h3 className={`font-serif text-3xl md:text-5xl transition-all duration-500 transform ${isOpen ? 'italic text-ink-black dark:text-white translate-x-4 md:translate-x-6' : 'font-light text-ink-dark dark:text-gray-400 group-hover:text-ink-black dark:group-hover:text-white'}`}>
                                    {item.pergunta}
                                </h3>
                            </div>
                            
                            {/* ICON */}
                            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
                                <span className="md:hidden text-[10px] uppercase tracking-widest text-ink-medium">Ler Resposta</span>
                                <div className={`w-12 h-12 rounded-full border border-ink-black/10 dark:border-white/10 flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-ink-black text-white rotate-180 dark:bg-white dark:text-black border-transparent' : 'group-hover:border-ink-black dark:group-hover:border-white'}`}>
                                    {isOpen ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
                                </div>
                            </div>
                        </div>

                        {/* EXPANDABLE CONTENT */}
                        <div 
                            className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-16' : 'grid-rows-[0fr] opacity-0'}`}
                        >
                            <div className="overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pt-2 pl-0 md:pl-[calc(4rem+20px)]">
                                    
                                    {/* LEFT COLUMN: Quote/Answer */}
                                    <div className="md:col-span-5 flex flex-col justify-start">
                                        <div className="font-serif text-2xl md:text-3xl leading-relaxed text-ink-black dark:text-gray-200 italic mb-8">
                                            "{item.resposta}"
                                        </div>
                                        <div className="flex items-center gap-3 text-ink-medium dark:text-gray-500 mt-auto">
                                            <div className="p-2 border border-ink-black/10 dark:border-white/10 rounded-full">
                                                <HelpCircle className="w-5 h-5" />
                                            </div>
                                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold">Resposta Oficial</span>
                                        </div>
                                    </div>

                                    {/* RIGHT COLUMN: Checklist/Details */}
                                    <div className="md:col-span-6 md:col-start-7 border-l border-ink-black/10 dark:border-white/10 pl-8 md:pl-12 py-2">
                                        <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-ink-medium/80 dark:text-white/60 mb-8">
                                            Informações Adicionais
                                        </h4>
                                        <ul className="space-y-5">
                                            {item.detalhes.map((step, i) => (
                                                <li key={i} className="flex items-start group/li cursor-default">
                                                    {/* Diamond Bullet */}
                                                    <span className="w-1.5 h-1.5 mt-2 mr-5 bg-ink-medium/30 dark:bg-white/30 rotate-45 group-hover/li:bg-accent-sepia transition-colors duration-300"></span>
                                                    <span className="font-sans text-sm md:text-base text-ink-dark dark:text-gray-400 font-light leading-relaxed group-hover/li:text-ink-black dark:group-hover/li:text-white transition-colors duration-300">
                                                        {step}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </article>
                );
            })}
            
            {/* FINAL LINE */}
            <div className="w-full h-px bg-ink-black/10 dark:bg-white/10"></div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;