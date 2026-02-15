import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
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
  );
};

export default App;