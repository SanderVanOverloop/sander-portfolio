'use client';

import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <section className={styles.homepage}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Your Name</span>
          </h1>
          <p className={styles.subtitle}>
            Full Stack Developer & Designer
          </p>
          <p className={styles.description}>
            I create beautiful and functional web applications with modern technologies.
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>
              View My Work
            </button>
            <button className={styles.secondaryBtn}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;