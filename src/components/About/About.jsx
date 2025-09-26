'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, technologies: 0 });

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
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: counters.projects, label: 'Projects Completed', suffix: '+' },
    { number: counters.technologies, label: 'Technologies', suffix: '+' }
  ];

  const categorizedSkills = {
    'Frontend': {
      icon: '🎨',
      color: '#61DAFB',
      skills: [
        { name: 'React', level: 70 },
        { name: 'Vue.js', level: 80 },
        { name: 'Angular', level: 80 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Next.js', level: 85 }
      ]
    },
    '.NET': {
      icon: '⚡',
      color: '#f7f7f7ff',
      skills: [
        { name: 'C#', level: 80 },
        { name: '.NET MAUI', level: 70 },
        { name: 'Entity Framework Core', level: 80 },
        { name: 'ASP.NET CORE', level: 80 }
      ]
    },
    'Java': {
      icon: '☕',
      color: '#ED8B00',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 90 }
      ]
    },
    'Python': {
      icon: '🐍',
      color: '#3776AB',
      skills: [
        { name: 'Python', level: 70 },
        { name: 'Flask API', level: 60 }
      ]
    },
    'JavaScript': {
      icon: '🚀',
      color: '#F7DF1E',
      skills: [
        { name: 'Node.js', level: 65 },
        { name: 'Express.js', level: 60 },
        { name: 'JavaScript', level: 70 },
        { name: 'TypeScript', level: 70 }
      ]
    },
    'Databases': {
      icon: '🗄️',
      color: '#4DB33D',
      skills: [
        { name: 'MySQL', level: 70 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'MongoDB', level: 60 }
      ]
    },
    'DevOps & Tools': {
      icon: '🛠️',
      color: '#2496ED',
      skills: [
        { name: 'Docker', level: 70 },
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 88 },
        { name: 'Azure Repo', level: 40 }
      ]
    },
    'Testing': {
      icon: '🧪',
      color: '#25A162',
      skills: [
        { name: 'JUnit', level: 80 },
        { name: 'Mockito', level: 80 }
      ]
    }
  };

  const personalSkills = {
    'Interests': {
      icon: '🎯',
      color: '#FF6B6B',
      items: ['Formula 1', 'Gaming', 'Walking', 'Staying active', 'Football']
    },
    'Soft Skills': {
      icon: '🤝',
      color: '#4ECDC4',
      items: ['Teamwork', 'Communication', 'Adaptability', 'Problem Solving', 'Continuous Learning', 'Patience']
    },
    'Languages': {
      icon: '🌍',
      color: '#45B7D1',
      items: ['Dutch (Native)', 'English (Fluent)']
    }
  };

  const renderCategorizedSkills = (categories) => (
    <div className={styles.skillsWrapper}>
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll to explore all skills</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>
      <div className={styles.skillsContainer}>
        {Object.entries(categories).map(([category, data], index) => (
          <div 
            key={category} 
            className={styles.skillCategory}
            style={{ '--category-color': data.color, animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>{data.icon}</span>
              <h4 className={styles.categoryTitle}>{category}</h4>
            </div>
            <div className={styles.categorySkills}>
              {data.skills.map((skillData, skillIndex) => (
                <div key={skillData.name} className={styles.skillItem} style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skillData.name}</span>
                    <span className={styles.skillLevel}>{skillData.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div 
                      className={styles.skillProgress}
                      style={{ 
                        '--skill-level': `${skillData.level}%`,
                        '--skill-color': data.color 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.scrollFade}></div>
    </div>
  );

  const renderPersonalSkills = (skills) => (
    <div className={styles.personalSkillsContainer}>
      {Object.entries(skills).map(([category, data], index) => (
        <div 
          key={category} 
          className={styles.personalCategory}
          style={{ '--category-color': data.color, animationDelay: `${index * 0.2}s` }}
        >
          <div className={styles.personalCategoryHeader}>
            <span className={styles.personalCategoryIcon}>{data.icon}</span>
            <h4 className={styles.personalCategoryTitle}>{category}</h4>
          </div>
          <div className={styles.personalSkillsGrid}>
            {data.items.map((skill, skillIndex) => (
              <span 
                key={skill} 
                className={styles.personalSkill}
                style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
              >
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
                Outside of coding, I'm passionate about Formula 1, gaming, walking in nature, and staying active.
                I believe in continuous learning and always strive to grow both professionally and personally.
                I love creating elegant solutions to complex problems and building responsive, user-friendly applications that make a difference.
              </p>
              
              <div className={styles.highlights}>
                <div className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>🚀</div>
                  <div>
                    <h4>Innovation Focused</h4>
                    <p>Always exploring new technologies</p>
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
