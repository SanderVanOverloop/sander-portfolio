'use client';

import { useState, useEffect } from 'react';
import styles from './IntroAnimation.module.css';

const IntroAnimation = ({ onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  
  const text = "Welcome to my portfolio";
  const typingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      const timeout = setTimeout(() => {
        setIsComplete(true);
        if (onComplete) {
          setTimeout(onComplete, 1000);
        }
      }, pauseTime);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isComplete, onComplete]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`${styles.intro} ${isComplete ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <h1 className={styles.text}>
          {currentText}
          <span className={`${styles.cursor} ${showCursor ? styles.visible : ''}`}>|</span>
        </h1>
      </div>
    </div>
  );
};

export default IntroAnimation;