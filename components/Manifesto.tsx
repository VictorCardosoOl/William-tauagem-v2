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
    </section>
  );
};

export default Manifesto;