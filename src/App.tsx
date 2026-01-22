
import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import MainContent from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import ClickSpark from './components/ClickSpark';
import LightRays from './components/LightRays';
import LoadingScreen from './components/LoadingScreen';
import GridLines from './components/GridLines';
import { Reveal } from './components/Reveal';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'work' | 'about'>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section as any);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: 'home' | 'work' | 'about') => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ClickSpark
      sparkColor='rgba(255, 255, 255, 0.5)'
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen w-full flex flex-col font-sans relative bg-gray-900 text-white selection:bg-white/20">
        <LoadingScreen />

        {/* Background Layer - Dark Noisy Texture */}
        <Background />

        {/* Global Light Rays - Consistent across pages */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Dark overlay to ensure text legibility and better ray contrast */}
          <div className="absolute inset-0 bg-black/60"></div>
          <LightRays
            raysOrigin="top-center"
            raysColor="#D69452" // Honey brown
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={2.2} // Increased for better vertical visibility on mobile
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.3} // Increased noise
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        {/* Grid Lines Overlay */}
        <GridLines />

        {/* Foreground Content */}
        <Header onNavigate={scrollToSection} currentPage={activeSection} />

        <main className="relative z-10 flex flex-col">
          <section id="home" className="min-h-screen">
            <MainContent />
          </section>

          <section id="work" className="min-h-screen">
            <Reveal width="100%">
              <Work />
            </Reveal>
          </section>

          <section id="about" className="min-h-screen">
            <Reveal width="100%">
              <About />
            </Reveal>
          </section>
        </main>

        {/* Global Paper Texture Overlay - Affects Text and Content */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.2] mix-blend-overlay bg-noise"></div>
      </div>
    </ClickSpark>
  );
};

export default App;
