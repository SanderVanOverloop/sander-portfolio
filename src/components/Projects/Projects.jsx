'use client';

import { useState, useEffect } from 'react';
import { FaCode, FaRocket } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());

  const projects = [
    {
      id: 1,
      title: "Full-Stack Microservice Blog Platform",
      description: "A comprehensive blog platform built using a microservice architecture. Features include user authentication, real-time comments, article reviews, and a responsive admin dashboard. The backend leverages Spring Cloud for service discovery and load balancing.",
      technologies: [
        "Java 21",
        "Spring Boot", 
        "Spring Cloud",
        "Angular 19",
        "Angular Material",
        "Tailwind CSS",
        "Bootstrap",
        "Docker",
        "Maven"
      ],
      category: "fullstack",
      status: "completed",
      liveUrl: "#",
      githubUrl: "#",
      icon: "🏗️"
    },
    {
      id: 2,
      title: "Steam Mobile Companion",
      description: "Mobile application for Steam gaming enthusiasts featuring game discovery, review analysis, and personalized recommendations. Built with Flutter for cross-platform compatibility and optimal performance.",
      technologies: ["Flutter", "Dart", "REST API", "Firebase", "Material Design"],
      category: "mobile",
      status: "completed",
      liveUrl: "#",
      githubUrl: "#",
      icon: "🎮"
    },
    {
      id: 3,
      title: "Hacktopia (Medical Diagnosis AI)",
      description: "Hackathon-winning project that uses AI to provide preliminary medical diagnoses based on symptoms. Features symptom analysis, medicine recommendations, and price comparisons from multiple pharmacies.",
      technologies: ["Angular", "Java", "SpringBoot", "Machine Learning", "REST API", "PostgreSQL"],
      category: "ai",
      status: "completed",
      liveUrl: "#",
      githubUrl: "#",
      icon: "🏥"
    },
    {
      id: 4,
      title: "LogParser Analytics Tool",
      description: "Enterprise-grade log analysis platform with real-time monitoring, pattern recognition, and interactive visualizations. Helps developers quickly identify issues and performance bottlenecks.",
      technologies: ["Python", "Angular 19", "Chart.js", "Tailwind CSS", "Flask API", "Redis"],
      category: "tools",
      status: "completed",
      liveUrl: "#",
      githubUrl: "#",
      icon: "📊"
    },
    {
      id: 5,
      title: "TrailTales Community App",
      description: "Social platform for travel enthusiasts to share discoveries, rate locations, and build a community around exploration. Features photo sharing, location tagging, and social interactions.",
      technologies: ["Vue.js", "Java", "SpringBoot", "MySQL", "AWS S3", "Vitest"],
      category: "social",
      status: "completed",
      liveUrl: "#",
      githubUrl: "#",
      icon: "🗺️"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.dataset.projectId);
            setVisibleProjects(prev => new Set([...prev, projectId]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('[data-project-id]');
    projectElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.projects}>
      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.floatingShape} style={{top: '10%', left: '10%'}}></div>
        <div className={styles.floatingShape} style={{top: '60%', right: '15%'}}></div>
        <div className={styles.floatingShape} style={{bottom: '20%', left: '20%'}}></div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <div className={styles.titleIcon}>
              <FaCode />
            </div>
            <h2 className={styles.title}>
              My <span className={styles.highlight}>Projects</span>
            </h2>
            <p className={styles.subtitle}>
              Showcasing innovative solutions and creative implementations across various technologies
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <FaRocket />
                <span>{projects.length}+ Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className={`${styles.projectCard} ${visibleProjects.has(project.id) ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.projectIcon}>{project.icon}</div>
                <div className={styles.projectStatus}>
                  <span className={styles.statusDot}></span>
                  {project.status}
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.technologiesSection}>
                  <h4 className={styles.techTitle}>Technologies Used:</h4>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;