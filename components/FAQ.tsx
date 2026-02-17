
import React, { useState, useRef, useEffect } from 'react';
import { ITENS_FAQ } from '../data';
import { ArrowDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const ctx = window.gsap.context(() => {
        window.gsap.from(".faq-header", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%"
            }
        });

        window.gsap.from(".faq-item", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".faq-list",
                start: "top 85%"
            }
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#F6F5F0] dark:bg-[#0F0F0F] transition-colors duration-500 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        
        {/* HEADER */}
        <div className="faq-header mb-20 text-center md:text-left md:ml-[100px]">
             <h2 className="font-serif font-light text-5xl md:text-6xl text-ink-black dark:text-white mb-4">
                O que você precisa saber?
             </h2>
             <p className="font-sans text-xs tracking-[0.2em] uppercase text-ink-medium">
                Dúvidas comuns antes da sua sessão
             </p>
        </div>

        {/* LIST */}
        <div className="faq-list flex flex-col gap-0">
            {ITENS_FAQ.map((item, index) => {
                const isOpen = openIndex === index;
                const formattedId = (index + 1).toString().padStart(2, '0');

                return (
                    <article 
                        key={item.id} 
                        className="faq-item group cursor-pointer border-t border-ink-black/10 dark:border-white/10 last:border-b py-8 md:py-10 transition-colors duration-300 hover:bg-white/40 dark:hover:bg-white/5"
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
                            
                            {/* NUMBER + LINE */}
                            <div className="flex items-center min-w-[150px] shrink-0">
                                <span className={`font-sans text-xs font-bold tracking-widest transition-colors duration-300 ${isOpen ? 'text-ink-black dark:text-white' : 'text-ink-medium/50'}`}>
                                    {formattedId}
                                </span>
                                <div className={`h-px flex-grow mx-4 transition-colors duration-300 ${isOpen ? 'bg-ink-black dark:bg-white' : 'bg-ink-black/10 dark:bg-white/10'}`}></div>
                            </div>

                            {/* QUESTION */}
                            <div className="flex-grow pr-8">
                                <h3 className={`font-serif text-2xl md:text-3xl transition-colors duration-300 ${isOpen ? 'text-ink-black dark:text-white italic' : 'text-ink-dark dark:text-gray-400 group-hover:text-ink-black dark:group-hover:text-white'}`}>
                                    {item.pergunta}
                                </h3>
                            </div>

                            {/* ICON */}
                            <div className="shrink-0">
                                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'border-ink-black bg-ink-black text-white dark:border-white dark:bg-white dark:text-black rotate-180' : 'border-ink-black/10 text-ink-medium group-hover:border-ink-black group-hover:text-ink-black dark:border-white/10 dark:group-hover:border-white dark:group-hover:text-white'}`}>
                                    <ArrowDown size={16} strokeWidth={1.5} />
                                </div>
                            </div>
                        </div>

                        {/* ANSWER (EXPANDABLE) */}
                        <div 
                            className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6 md:mt-0' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                        >
                            <div className="overflow-hidden">
                                <div className="md:ml-[150px] md:pr-20">
                                    <p className="font-sans text-sm md:text-base leading-loose text-ink-medium dark:text-gray-400 font-light max-w-3xl">
                                        {item.resposta}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
