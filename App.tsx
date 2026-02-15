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

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Lock scroll while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      
      // Optional: Trigger Hero entrance animation here if needed via Custom Event or Context
      // For now, Hero component handles its own entrance once visible
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}
      
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