'use client';

import { useState, useEffect } from 'react';
import Homepage from '../components/Homepage/Homepage';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import IntroAnimation from '../components/IntroAnimation/IntroAnimation';

export default function Home() {
  const [showIntro, setShowIntro] = useState(null); // null = loading, true = show intro, false = show content
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem('hasVisitedPortfolio');
    
    if (!hasVisited) {
      // First visit - show intro
      setShowIntro(true);
      // Mark as visited for this session
      sessionStorage.setItem('hasVisitedPortfolio', 'true');
    } else {
      // Not first visit - skip intro
      setShowIntro(false);
    }
    
    setIsLoading(false);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // Don't render anything until we've checked the visit status
  if (isLoading) {
    return (
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100vh', 
        background: '#0a192f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Optional: Add a subtle loading indicator */}
        <div style={{ color: '#317d79', fontSize: '1.2rem' }}>Loading...</div>
      </div>
    );
  }

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <div style={{ display: showIntro ? 'none' : 'block' }}>
        <Homepage />
      </div>
    </>
  );
}
