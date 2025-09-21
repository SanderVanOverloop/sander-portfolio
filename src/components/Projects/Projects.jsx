'use client';

import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Full-Stack Microservice Blog Platform",
      description: "A full-stack blog platform built using a microservice architecture. The backend is split into services for config, gateway, discovery, posts, comments, and reviews. Frontend is developed in Angular 19 with a responsive UI and Docker-based deployment. It is a app where you can let people review articles and publish them on the platform.",
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
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Steam Mobile Companion",
      description: "An app where you can look at steam games and look at the reviews and rating of the games with description. It is built with Flutter and Dart, providing a smooth user experience with a focus on performance and responsiveness. it was a test project to learn Flutter.",
      technologies: ["JavaScript", "Team Collaboration", "Flutter", "REST API", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Hacktopia (Hackathon Project)",
      description: "Hacktopia is a hackathon project Where you can give some made up symptons and it will give you a list of diseases that you might have. then it wil give you the name of the needed medicine and the price of the medicine. It is built with Angular and Java Spring Boot, providing a responsive and interactive user interface. It was the first time we got 100% freedom to program what we wanted inside a specific theme",
      technologies: ["Angular", "JavaScript", "Hackathon", "Team Collaboration", "Java", "SpringBoot", "REST API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "LogParser Tool",
      description: "A developer tool to parse and visualize log files. Built with a Python backend that analyzes logs, and an Angular frontend that renders interactive charts using Chart.js and Tailwind CSS.",
      technologies: ["Python", "Angular 19", "Angular", "Tailwind CSS", "Chart.js", "REST API", "FlaskAPI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "TrailTales App",
      description: "A app where people can share buildings and areas they have visited, including photos and descriptions. The app is designed to be user-friendly and visually appealing, with a focus on community engagement.",
      technologies: ["Team Project", "Vue.js", "Java", "SpringBoot", "crowdlin", "Vitest"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.subtitle}>
          I'm currently working on some exciting projects! Stay tuned for updates.
        </p>
        <div className={styles.grid}>
          {projects.map(project => (
            <div key={project.id} className={styles.card}>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.tech}>{tech}</span>
                  ))}
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