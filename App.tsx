import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import About from './components/About';
import Methodology from './components/Methodology';
import FlashSection from './components/FlashSection';
import Aftercare from './components/Aftercare';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <About />
        <Methodology />
        <FlashSection />
        <Aftercare />
      </main>
      <Footer />
    </div>
  );
};

export default App;