'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Homepage.module.css';

const Homepage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    setIsVisible(true);
    
    // Simple typewriter effect for "Full Stack Developer"
    const targetText = "Full Stack Developer";
    let charIndex = 0;
    
    const typewriterEffect = () => {
      if (charIndex < targetText.length) {
        setTypedText(targetText.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typewriterEffect, 120);
      }
    };

    const timer = setTimeout(typewriterEffect, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleViewWork = () => {
    router.push('/projects');
  };

  const handleGetInTouch = () => {
    router.push('/contact');
  };

  return (
    <section className={styles.homepage}>
      <div className={styles.backgroundEffects}>
        <div className={styles.floatingShape} style={{top: '20%', left: '10%'}}></div>
        <div className={styles.floatingShape} style={{top: '60%', right: '15%'}}></div>
        <div className={styles.floatingShape} style={{bottom: '20%', left: '20%'}}></div>
      </div>
      
      <div className={styles.container}>
        <div className={`${styles.hero} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={`${styles.profileSection} ${isVisible ? styles.scaleIn : ''}`}>
            <div className={styles.profilePicture}>
            <Image
              src="./profile_circle.png"
              alt="Sander Van Overloop"
              width={200}
              height={200}
              className={styles.profileImg}
            />
            </div>
          </div>
          
          <div className={styles.textSection}>
            <div className={styles.greeting}>
              <span className={styles.wave}>👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className={styles.title}>
              <span className={styles.highlight}>Sander Van Overloop</span>
            </h1>
            
            <div className={styles.roleContainer}>
              <span className={styles.roleText}>
                {typedText}
                <span className={styles.cursor}>|</span>
              </span>
            </div>
            
            <p className={styles.description}>
              Transforming ideas into elegant, scalable solutions with modern technologies.
              <br />
              <strong>Passionate about clean code, user experience, and bringing ideas to life.</strong>
            </p>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>25+</span>
                <span className={styles.statLabel}>Technologies</span>
              </div>
            </div>
            
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn} onClick={handleViewWork}>
                <span className={styles.btnIcon}>🚀</span>
                View My Work
                <span className={styles.btnArrow}>→</span>
              </button>
              <button className={styles.secondaryBtn} onClick={handleGetInTouch}>
                <span className={styles.btnIcon}>💬</span>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
