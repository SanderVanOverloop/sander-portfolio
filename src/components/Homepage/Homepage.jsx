'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './Homepage.module.css';

const Homepage = () => {
  const router = useRouter();

  const handleViewWork = () => {
    router.push('/projects');
  };

  const handleGetInTouch = () => {
    router.push('/contact');
  };

  return (
    <section className={styles.homepage}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.profilePicture}>
            <Image
              src="/profile_circle.png"
              alt="Sander Van Overloop"
              width={200}
              height={200}
              className={styles.profileImg}
            />
          </div>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Sander Van Overloop</span>
          </h1>
          <p className={styles.subtitle}>
            Full Stack Developer
          </p>
          <p className={styles.description}>
            I create beautiful and functional web applications with modern technologies.
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn} onClick={handleViewWork}>
              View My Work
            </button>
            <button className={styles.secondaryBtn} onClick={handleGetInTouch}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;