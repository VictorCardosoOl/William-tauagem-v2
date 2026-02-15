import React, { useState, useRef, useLayoutEffect } from 'react';
import { PORTFOLIO_ITEMS } from '../data';
import { X, ArrowRight } from 'lucide-react';

interface PortfolioItemProps {
  item: typeof PORTFOLIO_ITEMS[0];
  onClick: (item: typeof PORTFOLIO_ITEMS[0]) => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, onClick }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const filterRef = useRef<SVGFEDisplacementMapElement>(null);
  const filterId = `liquid-${item.id}`;

  // Efeito de Hover Líquido (apenas visual, não afeta o layout)
  const handleMouseEnter = () => {
     if (window.gsap && filterRef.current) {
         window.gsap.to(filterRef.current, { attr: { scale: 30 }, duration: 0.8, ease: "power2.out" });
         if (imageRef.current) window.gsap.to(imageRef.current, { scale: 1.05, duration: 1 });
     }
  };

  const handleMouseLeave = () => {
    if (window.gsap && filterRef.current) {
         window.gsap.to(filterRef.current, { attr: { scale: 0 }, duration: 0.8, ease: "power2.out" });
         if (imageRef.current) window.gsap.to(imageRef.current, { scale: 1, duration: 1 });
     }
  };

  return (
    <div 
        className="group relative cursor-pointer mb-24 3xl:mb-32 w-full block"
        onClick={() => onClick(item)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        {/* SVG Filter Definition */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
            <defs>
                <filter id={filterId}>
                    <feTurbulence type="fractalNoise" baseFrequency="0.015 0.015" numOctaves="1" result="warp" />
                    <feDisplacementMap ref={filterRef} xChannelSelector="R" yChannelSelector="G" scale="0" in="SourceGraphic" in2="warp" />
                </filter>
            </defs>
        </svg>

        {/* Thumbnail Image Container */}
        <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5] bg-gray-200 dark:bg-gray-800">
            {/* O ID aqui é crucial para o FLIP encontrar o elemento de origem */}
            <img 
                id={`img-source-${item.id}`}
                ref={imageRef}
                src={item.image} 
                alt={item.title}
                loading="lazy"
                style={{ filter: `url(#${filterId})` }} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0 opacity-100 will-change-transform"
            />
        </div>

        <div className="mt-6 flex flex-col items-start gap-2 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-ink-medium font-bold">
                {item.placement}
            </span>
            <h3 className="font-serif font-light italic text-4xl md:text-5xl 3xl:text-6xl text-ink-black dark:text-paper-light">
                {item.title}
            </h3>
        </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lógica de Abertura (Expandir)
  const handleItemClick = (item: typeof PORTFOLIO_ITEMS[0]) => {
    if (!window.gsap || !window.Flip) {
        setSelectedItem(item);
        return;
    }

    // 1. Capturar o estado inicial (imagem pequena na grid)
    const state = window.Flip.getState(`#img-source-${item.id}`);

    // 2. Atualizar o estado do React para renderizar o layout expandido
    setSelectedItem(item);

    // 3. Animar a transição
    // Usamos um pequeno timeout ou requestAnimationFrame para garantir que o DOM atualizou
    requestAnimationFrame(() => {
        const targetImage = document.querySelector('.detail-image-target');
        
        if (targetImage) {
            window.Flip.from(state, {
                targets: targetImage,
                duration: 0.8,
                ease: "power4.inOut",
                absolute: true, // Importante: faz a imagem flutuar sobre o layout
                zIndex: 9999,
                scale: true,
                onStart: () => {
                    // Animação de entrada dos elementos complementares (Fundo e Texto)
                    window.gsap.fromTo('.detail-overlay-bg', 
                        { opacity: 0 }, 
                        { opacity: 1, duration: 0.4 }
                    );
                    window.gsap.fromTo('.detail-content-anim', 
                        { y: 50, opacity: 0 }, 
                        { y: 0, opacity: 1, duration: 0.6, delay: 0.3, stagger: 0.1 }
                    );
                }
            });
        }
    });
  };

  // Lógica de Fechamento (Recolher)
  const handleClose = () => {
    if (!selectedItem || !window.gsap || !window.Flip) {
        setSelectedItem(null);
        return;
    }

    // 1. Capturar o estado atual (imagem grande no modal)
    const state = window.Flip.getState('.detail-image-target');
    const sourceId = `img-source-${selectedItem.id}`;

    // Animamos o desaparecimento do texto antes de iniciar o Flip
    window.gsap.to('.detail-content-anim', { opacity: 0, y: 20, duration: 0.2 });
    window.gsap.to('.detail-overlay-bg', { opacity: 0, delay: 0.2, duration: 0.4 });

    // 2. Limpar o estado do React (imagem volta para a grid)
    // Precisamos fazer isso DENTRO do Flip para ele saber para onde voltar?
    // Não, com React, geralmente mudamos o estado e o Flip faz a mágica "from" o estado capturado.
    
    // TRUQUE: Para Flip com React, capturamos o estado 'grande', setamos null, e fazemos Flip.from(state) para o alvo pequeno.
    setSelectedItem(null);

    requestAnimationFrame(() => {
        const sourceElement = document.getElementById(sourceId);
        if (sourceElement) {
            window.Flip.from(state, {
                targets: sourceElement,
                duration: 0.7,
                ease: "power4.inOut",
                scale: true,
                absolute: true, // Mantém a fluidez
                zIndex: 9999,
                onComplete: () => {
                    // Limpeza final se necessário
                    window.gsap.set(sourceElement, { clearProps: "all" }); // Remove estilos inline do GSAP
                }
            });
        }
    });
  };

  const col1 = PORTFOLIO_ITEMS.filter((_, i) => i % 2 === 0);
  const col2 = PORTFOLIO_ITEMS.filter((_, i) => i % 2 !== 0);

  return (
    <section id="work" className="w-full bg-paper-light dark:bg-paper-dark py-24 md:py-32 3xl:py-48 px-6 relative" ref={containerRef}>
      
      {/* HEADER */}
      <div className="max-w-screen-3xl mx-auto mb-32 border-b border-ink-light dark:border-white/10 pb-8 flex flex-col md:flex-row justify-between items-end">
          <h2 className="font-serif font-light text-6xl md:text-8xl 3xl:text-9xl text-ink-black dark:text-paper-light uppercase leading-[0.85]">
            Selected <br/> 
            <span className="italic font-extralight text-ink-medium">Works</span>
          </h2>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-100 text-right font-bold text-ink-black mt-6 md:mt-0">
            Galeria da Pele
          </p>
      </div>

      {/* GRID CONTAINER */}
      <div className="max-w-screen-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 3xl:gap-32">
          <div className="flex flex-col gap-16 md:gap-32">
            {col1.map((item) => (
              <PortfolioItem key={item.id} item={item} onClick={handleItemClick} />
            ))}
          </div>
          <div className="flex flex-col gap-16 md:gap-32 md:mt-48">
            {col2.map((item) => (
              <PortfolioItem key={item.id} item={item} onClick={handleItemClick} />
            ))}
          </div>
      </div>

      {/* DETAIL OVERLAY (Renderizado condicionalmente) */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            
            {/* Background Layer (Fades In) */}
            <div 
                className="detail-overlay-bg absolute inset-0 bg-[#F6F5F0] dark:bg-[#0F0F0F] transition-colors duration-500"
                onClick={handleClose} // Click outside to close
            ></div>

            {/* Layout Container */}
            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row overflow-hidden">
                
                {/* 1. IMAGE SIDE (The Hero) */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative flex items-center justify-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
                    {/* Esta imagem é o alvo do FLIP */}
                    <img 
                        src={selectedItem.image} 
                        alt={selectedItem.title}
                        className="detail-image-target w-full h-full object-cover" 
                        // Removemos o ID aqui para evitar duplicidade no DOM durante a transição, o Flip usa a classe alvo
                    />
                    
                    {/* Botão Voltar (Mobile) */}
                    <button 
                        onClick={handleClose}
                        className="absolute top-6 left-6 lg:hidden z-50 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* 2. CONTENT SIDE (The Details) */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-full flex flex-col justify-center px-8 md:px-24 3xl:px-40 relative bg-paper-light dark:bg-paper-dark">
                    
                    {/* Botão Fechar (Desktop) */}
                    <button 
                        onClick={handleClose}
                        className="detail-content-anim absolute top-12 right-12 hidden lg:flex items-center gap-4 text-ink-black dark:text-paper-light hover:opacity-60 transition-opacity group"
                    >
                        <span className="font-sans text-[10px] tracking-widest uppercase font-bold">Close</span>
                        <X size={24} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-500"/>
                    </button>

                    <div className="max-w-xl">
                        <div className="detail-content-anim mb-8 flex items-center gap-4">
                            <span className="w-12 h-px bg-ink-black dark:bg-white"></span>
                            <span className="font-sans text-[10px] tracking-[0.4em] uppercase font-bold text-ink-medium">
                                Project 0{selectedItem.id}
                            </span>
                        </div>

                        <h2 className="detail-content-anim font-serif italic font-light text-6xl md:text-8xl 3xl:text-9xl text-ink-black dark:text-paper-light mb-12 leading-none">
                            {selectedItem.title}
                        </h2>

                        <div className="detail-content-anim grid grid-cols-2 gap-12 mb-16 border-t border-ink-light dark:border-white/10 pt-8">
                            <div>
                                <h4 className="font-sans text-[9px] uppercase tracking-[0.2em] text-ink-medium mb-3">Placement</h4>
                                <p className="font-serif text-2xl md:text-3xl text-ink-black dark:text-paper-light">{selectedItem.placement}</p>
                            </div>
                            <div>
                                <h4 className="font-sans text-[9px] uppercase tracking-[0.2em] text-ink-medium mb-3">Estilo</h4>
                                <p className="font-serif text-2xl md:text-3xl text-ink-black dark:text-paper-light">Fine Line / Texture</p>
                            </div>
                        </div>

                        <p className="detail-content-anim font-sans text-sm md:text-base leading-loose text-ink-dark dark:text-gray-400 mb-12 font-light">
                            Uma exploração profunda da anatomia e forma. Este projeto foi concebido para fluir organicamente com a musculatura, criando uma peça que respira junto com o corpo. A textura e o contraste foram cuidadosamente equilibrados para longevidade.
                        </p>

                        <button className="detail-content-anim group flex items-center gap-6 bg-ink-black dark:bg-white text-paper-light dark:text-ink-black px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-ink-dark transition-all">
                            Solicitar Orçamento
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
                        </button>
                    </div>
                </div>

            </div>
        </div>
      )}

    </section>
  );
};

export default Portfolio;