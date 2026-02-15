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
    ScrollTrigger: any;
    Lenis: any;
  }
}

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Register GSAP Plugins
    if (window.gsap) {
      if (window.Flip) window.gsap.registerPlugin(window.Flip);
      if (window.ScrollTrigger) window.gsap.registerPlugin(window.ScrollTrigger);
    }

    // Initialize Lenis for Smooth Scrolling
    if (window.Lenis && !isLoading) {
      const lenis = new window.Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      // Integrate Lenis with GSAP ScrollTrigger
      lenis.on('scroll', window.ScrollTrigger.update);

      // Animation Loop
      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
      
      // Cleanup
      return () => {
         lenis.destroy();
      };
    }

    // Lock scroll while loading (native lock, Lenis handles its own locking if needed)
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