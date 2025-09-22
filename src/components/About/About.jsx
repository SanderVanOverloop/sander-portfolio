'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, technologies: 0, experience: 0 });

  // Animation trigger on component mount
  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounter = (target, key, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(15, 'projects');
      animateCounter(25, 'technologies');
      animateCounter(2, 'experience');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: counters.projects, label: 'Projects Completed', suffix: '+' },
    { number: counters.technologies, label: 'Technologies', suffix: '+' },
    { number: counters.experience, label: 'Years Experience', suffix: '+' }
  ];

  const categorizedSkills = {
    'Frontend': ['React', 'Vue.js', 'Angular', 'Tailwind CSS', 'Next.js'],
    '.NET': ['C#', '.NET MAUI', 'Entity Framework Core', 'ASP.NET CORE'],
    Java: ['Java', 'Spring Boot'],
    Python: ['Python', 'Flask API'],
    Javascript: ['Node.js', 'Express.js', 'JavaScript', 'TypeScript'],
    'Databases': ['MySQL', 'PostgreSQL', 'MongoDB'],
    'Version Control': ['Git', 'GitHub', 'Azure Repo', 'Bitbucket'],
    'Testing': ['JUnit', 'Mockito'],
    'Other technology': ['Docker', 'RestAPI', 'RabbitMQ', 'Flutter'],
  };

  const personalSkills = {
    Interests: ['Formula 1', 'Gaming', 'Walking', 'Staying active', 'Football'],
    Traits: ['Teamwork', 'Communication', 'Adaptability', 'Problem Solving', 'Continuous Learning', 'Patience'],
    Languages: ['Dutch', 'English'],
  };

  const renderCategorizedSkills = (categories) => (
    <div className={styles.skillsContainer}>
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} className={styles.skillCategory}>
          <h4 className={styles.categoryTitle}>{category}</h4>
          <div className={styles.categorySkills}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderPersonalSkills = (skills) => (
    <div className={styles.personalSkillsContainer}>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className={styles.personalCategory}>
          <h4 className={styles.personalCategoryTitle}>{category}</h4>
          <div className={styles.personalSkillsGrid}>
            {items.map((skill) => (
              <span key={skill} className={styles.personalSkill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className={styles.about}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={`${styles.heroContent} ${isVisible ? styles.fadeInUp : ''}`}>
            <div className={styles.heroText}>
              <h2 className={styles.title}>
                About <span className={styles.highlight}>Me</span>
              </h2>
              <h3 className={styles.subtitle}>Full-Stack Developer & Problem Solver</h3>
              <p className={styles.heroDescription}>
                Transforming ideas into elegant, scalable solutions with modern technologies
              </p>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/profile_circle.png"
                  alt="Sander Van Overloop"
                  width={280}
                  height={280}
                  className={styles.profileImg}
                />
                <div className={styles.imageGlow}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={`${styles.statCard} ${isVisible ? styles.slideInUp : ''}`}>
                <div className={styles.statNumber}>
                  {stat.number}{stat.suffix}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <div className={styles.badge}>🎓 Recent Graduate</div>
              <h3 className={styles.sectionTitle}>My <span className={styles.highlight}>Journey</span></h3>
              <p className={styles.paragraph}>
                Hi, I'm <strong>Sander Van Overloop</strong>, a recent graduate in Applied Computer Science from Hogeschool PXL
                and a passionate full-stack developer with a strong interest in backend development, especially in Java.
                I'm also open to frontend projects and enjoy building complete, user-focused applications.
              </p>
              <p className={styles.paragraph}>
                Outside of coding, I'm passionate about <strong>Formula 1</strong>, gaming, walking in nature, and staying active.
                I believe in continuous learning and always strive to grow both professionally and personally.
                I love creating elegant solutions to complex problems and building responsive, user-friendly applications that make a difference.
              </p>
              
              <div className={styles.highlights}>
                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>🚀</div>
                  <div>
                    <h4>Innovation Focused</h4>
                    <p>Always exploring cutting-edge technologies</p>
                  </div>
                </div>
                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>💡</div>
                  <div>
                    <h4>Problem Solver</h4>
                    <p>Turning complex challenges into elegant solutions</p>
                  </div>
                </div>
                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>🎯</div>
                  <div>
                    <h4>Detail Oriented</h4>
                    <p>Committed to clean, maintainable code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className={styles.skillsSection}>
        <div className={styles.container}>
          <div className={styles.skillsHeader}>
            <h3 className={styles.skillsSectionTitle}>
              My <span className={styles.highlight}>Expertise</span>
            </h3>
            <p className={styles.skillsDescription}>
              A comprehensive toolkit of modern technologies and soft skills
            </p>
          </div>
          
          <div className={styles.tabButtons}>
            <button
              onClick={() => setActiveTab('technical')}
              className={`${styles.tabButton} ${activeTab === 'technical' ? styles.activeTab : ''}`}
            >
              <span className={styles.tabIcon}>⚡</span>
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`${styles.tabButton} ${activeTab === 'personal' ? styles.activeTab : ''}`}
            >
              <span className={styles.tabIcon}>👤</span>
              Personal Skills
            </button>
          </div>
          
          <div className={styles.skillsContent}>
            {activeTab === 'technical'
              ? renderCategorizedSkills(categorizedSkills)
              : renderPersonalSkills(personalSkills)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;