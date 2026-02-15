import React, { useState } from 'react';
import { TEXTOS_GERAIS, PROCESSO_CRIATIVO } from '../data';
import { Quote } from 'lucide-react';

const Manifesto: React.FC = () => {
  const { manifesto } = TEXTOS_GERAIS;
  const [activeProcess, setActiveProcess] = useState(0);

  return (
    <section>
        {/* ====================
            PART 1: O MANIFESTO
           ==================== */}
        <div className="bg-background-rose dark:bg-[#5a4242] py-24 px-6 md:px-12 w-full text-primary dark:text-gray-100 transition-colors duration-500">
            <div className="max-w-5xl mx-auto flex flex-col items-center">
                
                {/* Small Header */}
                <h3 className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-60 mb-12">
                {manifesto.titulo}
                </h3>

                {/* Big Quote Area */}
                <div className="relative mb-24 w-full text-center">
                {/* Decorative Quotes */}
                <div className="absolute -top-12 left-0 md:-left-12 opacity-10 pointer-events-none">
                    <Quote className="w-24 h-24 transform scale-x-[-1]" fill="currentColor" />
                </div>
                
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-primary dark:text-white">
                    <span className="block mb-2">{manifesto.fraseParte1}</span>
                    <span className="font-serif italic text-white dark:text-accent-pink px-2">
                    {manifesto.fraseDestaque}
                    </span>
                    <span className="block mt-2">{manifesto.fraseParte2}</span>
                </h2>

                <div className="absolute -bottom-12 right-0 md:-right-12 opacity-10 pointer-events-none">
                    <Quote className="w-24 h-24" fill="currentColor" />
                </div>
                </div>

                {/* Bottom Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full border-t border-primary/10 dark:border-white/10 pt-16">
                
                {/* Card 1 */}
                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <h4 className="font-serif text-xl md:text-2xl uppercase tracking-wider mb-6 text-primary dark:text-white border-b border-primary/20 dark:border-white/20 pb-4 inline-block">
                    {manifesto.card1Titulo}
                    </h4>
                    <p className="font-sans text-sm md:text-base leading-relaxed text-primary/80 dark:text-white/80">
                    {manifesto.card1Texto}
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <h4 className="font-serif text-xl md:text-2xl uppercase tracking-wider mb-6 text-primary dark:text-white border-b border-primary/20 dark:border-white/20 pb-4 inline-block">
                    {manifesto.card2Titulo}
                    </h4>
                    <p className="font-sans text-sm md:text-base leading-relaxed text-primary/80 dark:text-white/80">
                    {manifesto.card2Texto}
                    </p>
                </div>

                </div>
            </div>
        </div>

        {/* ====================
            PART 2: O PROCESSO CRIATIVO
           ==================== */}
        <div className="bg-[#f2eaea] dark:bg-[#1f1f1f] py-32 px-6 md:px-12 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-20">
                    <div className="w-2.5 h-2.5 border border-[#5a4242] dark:border-white/60 rounded-full"></div> 
                    <h3 className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-[#5a4242] dark:text-white/80">
                        O Processo Criativo
                    </h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    
                    {/* LEFT: Process List */}
                    <div className="flex-1 w-full flex flex-col">
                        {PROCESSO_CRIATIVO.map((item, index) => {
                            const isActive = activeProcess === index;
                            
                            return (
                                <div 
                                    key={item.id}
                                    onMouseEnter={() => setActiveProcess(index)}
                                    className={`relative cursor-pointer py-10 border-b border-[#5a4242]/10 dark:border-white/10 transition-all duration-300 group`}
                                >
                                    {/* Active Left Bar Indicator */}
                                    <div className={`absolute left-[-2rem] top-10 bottom-10 w-1 bg-[#5a4242] dark:bg-white transition-all duration-500 ease-in-out ${isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}></div>

                                    <div className="flex justify-between items-baseline">
                                        
                                        {/* Texts */}
                                        <div className="pr-8">
                                            <h4 className={`text-4xl md:text-5xl transition-all duration-300 ${
                                                isActive 
                                                ? 'font-serif italic text-[#5a4242] dark:text-white translate-x-2' 
                                                : 'font-serif text-primary dark:text-gray-500 group-hover:text-primary/70'
                                            }`}>
                                                {item.titulo}
                                            </h4>
                                            <p className={`font-sans text-sm mt-3 transition-all duration-300 ${
                                                isActive ? 'opacity-100 text-gray-600 dark:text-gray-300 translate-x-2' : 'opacity-40 text-gray-500'
                                            }`}>
                                                {item.subtitulo}
                                            </p>
                                        </div>

                                        {/* Right Side: Dot + Number */}
                                        <div className="flex items-center gap-4 shrink-0">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-[#5a4242] dark:bg-white transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
                                            <span className={`font-sans text-xs font-bold transition-colors duration-300 ${isActive ? 'text-[#5a4242] dark:text-white opacity-100' : 'text-gray-400 opacity-30'}`}>
                                                0{item.id}
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT: Content Display */}
                    <div className="flex-1 w-full lg:sticky lg:top-32 h-full min-h-[400px] flex items-center justify-center lg:justify-start lg:pl-12">
                        <div className="relative w-full max-w-lg">
                            
                            {/* Giant Background Number */}
                            <div className="absolute -top-32 -left-12 text-[15rem] md:text-[20rem] leading-none font-serif text-[#5a4242] opacity-[0.03] dark:text-white dark:opacity-[0.03] select-none pointer-events-none transition-all duration-700">
                                0{activeProcess + 1}
                            </div>

                            {/* Details Content */}
                            <div className="relative z-10 animate-fade-in-up" key={activeProcess}>
                                <h3 className="font-serif text-3xl mb-8 text-[#5a4242] dark:text-white">
                                    Detalhes da Etapa
                                </h3>
                                <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300">
                                    {PROCESSO_CRIATIVO[activeProcess].descricao}
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
};

export default Manifesto;