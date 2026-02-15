import React from 'react';
import { TEXTOS_GERAIS } from '../data';

const Manifesto: React.FC = () => {
  const { manifesto } = TEXTOS_GERAIS;

  return (
    <section className="bg-[#EAE6E3] dark:bg-[#1a1a1a] transition-colors duration-500 overflow-hidden">
        {/* Editorial Grid Wrapper */}
        <div className="w-full border-t border-primary/5 dark:border-white/5">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-screen">
                
                {/* LEFT COL: Vertical Label */}
                <div className="hidden md:flex md:col-span-1 border-r border-primary/5 dark:border-white/5 justify-center py-12">
                     <span className="writing-mode-vertical text-[9px] uppercase tracking-[0.4em] text-primary/40 dark:text-white/40 font-bold rotate-180">
                        {manifesto.titulo} — Est. 2018
                     </span>
                </div>

                {/* MIDDLE COL: Massive Whitespace & Quote */}
                <div className="md:col-span-7 border-r border-primary/5 dark:border-white/5 flex flex-col justify-center items-center py-32 md:py-0 px-8 relative">
                    {/* Decorative Hairlines */}
                    <div className="absolute top-12 left-12 w-8 h-[1px] bg-primary/20 dark:bg-white/20"></div>
                    <div className="absolute top-12 left-12 w-[1px] h-8 bg-primary/20 dark:bg-white/20"></div>
                    
                    <div className="absolute bottom-12 right-12 w-8 h-[1px] bg-primary/20 dark:bg-white/20"></div>
                    <div className="absolute bottom-12 right-12 w-[1px] h-8 bg-primary/20 dark:bg-white/20"></div>

                    <div className="max-w-2xl text-center">
                        <h2 className="font-serif font-extralight text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-primary dark:text-white">
                            <span className="block opacity-100">{manifesto.fraseParte1}</span>
                            <span className="block italic font-thin text-accent-pink my-4">
                                {manifesto.fraseDestaque}
                            </span>
                            <span className="block opacity-100">{manifesto.fraseParte2}</span>
                        </h2>
                    </div>
                </div>

                {/* RIGHT COL: Information Stack */}
                <div className="md:col-span-4 flex flex-col">
                    
                    {/* Card 1 */}
                    <div className="flex-1 p-12 md:p-16 border-b border-primary/5 dark:border-white/5 hover:bg-white/40 dark:hover:bg-black/20 transition-colors duration-500 flex flex-col justify-center group">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent-pink">01</span>
                            <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] font-bold text-primary dark:text-white">
                                {manifesto.card1Titulo}
                            </h4>
                        </div>
                        <p className="font-serif italic text-2xl leading-relaxed text-primary/80 dark:text-white/80 font-light group-hover:translate-x-2 transition-transform duration-500">
                            {manifesto.card1Texto}
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex-1 p-12 md:p-16 hover:bg-white/40 dark:hover:bg-black/20 transition-colors duration-500 flex flex-col justify-center group">
                         <div className="flex items-center gap-4 mb-8">
                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent-pink">02</span>
                            <h4 className="font-sans text-[9px] uppercase tracking-[0.3em] font-bold text-primary dark:text-white">
                                {manifesto.card2Titulo}
                            </h4>
                        </div>
                        <p className="font-serif italic text-2xl leading-relaxed text-primary/80 dark:text-white/80 font-light group-hover:translate-x-2 transition-transform duration-500">
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