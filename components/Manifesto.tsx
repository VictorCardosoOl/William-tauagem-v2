import React from 'react';
import { TEXTOS_GERAIS } from '../data';
import { Quote } from 'lucide-react';

const Manifesto: React.FC = () => {
  const { manifesto } = TEXTOS_GERAIS;

  return (
    <section>
        {/* ====================
            PART 1: O MANIFESTO
           ==================== */}
        <div className="bg-background-rose dark:bg-[#5a4242] py-32 px-6 md:px-12 w-full text-primary dark:text-gray-100 transition-colors duration-500">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                
                {/* Small Header */}
                <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase font-bold opacity-60 mb-16">
                {manifesto.titulo}
                </h3>

                {/* Big Quote Area */}
                <div className="relative mb-32 w-full text-center">
                    {/* Decorative Quotes */}
                    <div className="absolute -top-16 left-0 md:-left-12 opacity-5 pointer-events-none">
                        <Quote className="w-32 h-32 transform scale-x-[-1]" fill="currentColor" />
                    </div>
                    
                    <h2 className="font-serif font-light text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight text-primary dark:text-white mix-blend-darken dark:mix-blend-normal">
                        <span className="block mb-4">{manifesto.fraseParte1}</span>
                        <span className="font-serif italic font-thin text-accent-pink dark:text-accent-pink px-2">
                        {manifesto.fraseDestaque}
                        </span>
                        <span className="block mt-4">{manifesto.fraseParte2}</span>
                    </h2>

                    <div className="absolute -bottom-16 right-0 md:-right-12 opacity-5 pointer-events-none">
                        <Quote className="w-32 h-32" fill="currentColor" />
                    </div>
                </div>

                {/* Bottom Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 w-full border-t border-primary/10 dark:border-white/10 pt-20">
                
                {/* Card 1 */}
                <div className="p-10 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                    <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-primary dark:text-white border-b border-primary/20 dark:border-white/20 pb-4 inline-block group-hover:border-accent-pink transition-colors">
                    {manifesto.card1Titulo}
                    </h4>
                    <p className="font-serif italic text-2xl md:text-3xl leading-snug text-primary/80 dark:text-white/80 font-light">
                    {manifesto.card1Texto}
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-10 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300 group">
                    <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-primary dark:text-white border-b border-primary/20 dark:border-white/20 pb-4 inline-block group-hover:border-accent-pink transition-colors">
                    {manifesto.card2Titulo}
                    </h4>
                    <p className="font-serif italic text-2xl md:text-3xl leading-snug text-primary/80 dark:text-white/80 font-light">
                    {manifesto.card2Texto}
                    </p>
                </div>

                </div>
            </div>
        </div>
    </section>
  );
};

export default Manifesto;