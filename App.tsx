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
import ChatWidget from './components/ChatWidget';

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

    let lenis: any;
    let rafId: number;

    // Initialize Lenis for Smooth Scrolling
    if (window.Lenis && !isLoading) {
      lenis = new window.Lenis({
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
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    }

    // Lock scroll while loading (native lock)
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup
    return () => {
      if (lenis) {
        lenis.destroy();
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
      
      {/* Global Texture Layer - Film Grain/Noise */}
      <div className="noise-bg" aria-hidden="true"></div>
      
      {/* Changed overflow-hidden to overflow-x-hidden to allow vertical scrolling */}
      <div className="w-full min-h-screen overflow-x-hidden opacity-100">
        <Navbar />
        <ChatWidget />
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