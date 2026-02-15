import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Manifesto from './components/Manifesto';
import About from './components/About';
import Methodology from './components/Methodology';
import Concept from './components/Concept';
import CreativeProcess from './components/CreativeProcess';
import Preparation from './components/Preparation';
import FlashSection from './components/FlashSection';
import Aftercare from './components/Aftercare';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

// Define GSAP globals
declare global {
  interface Window {
    gsap: any;
    Flip: any;
  }
}

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Register GSAP Flip if available
    if (window.gsap && window.Flip) {
      window.gsap.registerPlugin(window.Flip);
    }

    // Lock scroll while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
      
      {/* Global Texture Layer - Film Grain/Noise */}
      <div className="noise-bg" aria-hidden="true"></div>
      
      <div className="w-full min-h-screen overflow-hidden opacity-100">
        <Navbar />
        <main>
          <Hero />
          <Portfolio />
          <Manifesto />
          <About />
          <Methodology />
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