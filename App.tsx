import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Manifesto from './components/Manifesto';
import About from './components/About';
import Concept from './components/Concept';
import CreativeProcess from './components/CreativeProcess';
import Preparation from './components/Preparation';
import FlashSection from './components/FlashSection';
import Aftercare from './components/Aftercare';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    // Force scroll to top prevents browser from remembering scroll position or jumping to inputs
    window.scrollTo(0, 0);
    setIsLoading(false);
    
    // Refresh GSAP ScrollTrigger after layout settles
    setTimeout(() => {
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    }, 100);
  };

  useEffect(() => {
    // Register GSAP Plugins only
    if (window.gsap) {
      if (window.Flip) window.gsap.registerPlugin(window.Flip);
      if (window.ScrollTrigger) window.gsap.registerPlugin(window.ScrollTrigger);
    }
    
    // Manual scroll restoration to ensure we start at top
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
      
      {/* Global Texture Layer - Film Grain/Noise */}
      <div className="noise-bg" aria-hidden="true"></div>
      
      {/* Standard Container - overflow-x-hidden prevents horizontal scrollbar issues */}
      <div className="w-full min-h-screen overflow-x-hidden opacity-100">
        <Navbar />
        <ChatWidget />
        <main>
          <Hero />
          <Portfolio />
          <Manifesto />
          <About />
          <Concept />
          <CreativeProcess />
          <Preparation />
          <FlashSection />
          <Aftercare />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;