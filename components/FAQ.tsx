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
        window.gsap.from(".faq-title", {
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
        
        {/* HEADER SECTION - Matching Aftercare */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32 gap-8 border-b border-ink-black/10 dark:border-white/10 pb-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="w-2 h-2 bg-accent-sepia rounded-full animate-pulse"></span>
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-ink-medium">
                        Dúvidas Frequentes
                    </span>
                    <span className="w-2 h-2 bg-accent-sepia rounded-full animate-pulse"></span>
                </div>
                <h2 className="faq-title font-serif font-light text-5xl md:text-7xl leading-[1.1] text-ink-black dark:text-gray-100 mb-6">
                    O que você precisa <br/>
                    <span className="italic text-ink-medium/60 dark:text-gray-500">saber antes de agendar.</span>
                </h2>
                <p className="font-sans text-xs leading-relaxed text-ink-medium uppercase tracking-wider max-w-lg mx-auto">
                    Esclareça os pontos principais para uma experiência fluida.
                </p>
            </div>
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
                        <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-baseline gap-6 md:gap-12 pr-8">
                                <span className={`font-sans text-xs font-bold tracking-[0.2em] transition-colors duration-300 ${isOpen ? 'text-accent-sepia' : 'text-ink-medium'}`}>
                                    {formattedId}
                                </span>
                                <h3 className={`font-serif text-2xl md:text-4xl lg:text-5xl transition-all duration-500 ${isOpen ? 'italic text-ink-black dark:text-white translate-x-4' : 'font-light text-ink-dark dark:text-gray-400 group-hover:text-ink-black dark:group-hover:text-white'}`}>
                                    {item.pergunta}
                                </h3>
                            </div>
                            
                            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto shrink-0">
                                <span className="md:hidden text-[10px] uppercase tracking-widest text-ink-medium">Ler Resposta</span>
                                <div className={`w-10 h-10 rounded-full border border-ink-black/10 dark:border-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-ink-black text-white rotate-180 dark:bg-white dark:text-black' : 'group-hover:border-ink-black'}`}>
                                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div 
                            className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-12' : 'grid-rows-[0fr] opacity-0'}`}
                        >
                            <div className="overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-4 pl-0 md:pl-[calc(4rem+20px)]">
                                    
                                    {/* Answer Column */}
                                    <div className="md:col-span-8">
                                        <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink-dark dark:text-gray-300 italic mb-6">
                                            "{item.resposta}"
                                        </p>
                                        <div className="flex items-center gap-2 text-ink-medium dark:text-gray-500">
                                            <HelpCircle className="w-4 h-4" />
                                            <span className="text-[10px] uppercase tracking-widest font-bold">Resposta Oficial</span>
                                        </div>
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