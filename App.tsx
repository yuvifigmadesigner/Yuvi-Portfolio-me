
import React, { useState } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import MainContent from './components/MainContent';
import About from './components/About';
import Work from './components/Work';
import ClickSpark from './components/ClickSpark';
import LightRays from './components/LightRays';

const App: React.FC = () => {
  const [page, setPage] = useState<'home' | 'work' | 'about'>('home');

  return (
    <ClickSpark
      sparkColor='rgba(255, 255, 255, 0.5)'
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen w-full flex flex-col font-sans relative bg-gray-900 text-white selection:bg-white/20">
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

        {/* Foreground Content */}
        <Header onNavigate={setPage} currentPage={page} />
        
        {page === 'home' && <MainContent />}
        {page === 'work' && <Work />}
        {page === 'about' && <About />}
      </div>
    </ClickSpark>
  );
};

export default App;
