'use client';

import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              I'm a passionate full-stack developer with a love for creating elegant solutions 
              to complex problems. With expertise in modern web technologies, I specialize in 
              building responsive, user-friendly applications that make a difference.
            </p>
            <p className={styles.paragraph}>
              My journey in web development started several years ago, and I've since worked 
              on various projects ranging from e-commerce platforms to data visualization tools. 
              I believe in writing clean, maintainable code and staying up-to-date with the 
              latest industry trends.
            </p>
            <div className={styles.skills}>
              <h3 className={styles.skillsTitle}>Skills & Technologies</h3>
              <div className={styles.skillsGrid}>
                <span className={styles.skill}>JavaScript</span>
                <span className={styles.skill}>React</span>
                <span className={styles.skill}>Next.js</span>
                <span className={styles.skill}>Node.js</span>
                <span className={styles.skill}>TypeScript</span>
                <span className={styles.skill}>Python</span>
                <span className={styles.skill}>MongoDB</span>
                <span className={styles.skill}>PostgreSQL</span>
                <span className={styles.skill}>CSS/Sass</span>
                <span className={styles.skill}>Git</span>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <div className={styles.placeholder}>
              Your Photo Here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;