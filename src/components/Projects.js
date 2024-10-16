// src/components/Projects.js
import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Employee Managment System",
      description: "Full-Stack web application for managing employee data",
      imageUrl: "https://via.placeholder.com/150", // Smaller placeholder image
      demoUrl: "https://github.com/nehasingh2002/Employee-Management-System"
    },
    {
      title: "Chrome Extension-Lead Tracker",
      description: "Chrome extension to save current tabs and URLs",
      imageUrl: "https://via.placeholder.com/150",
      demoUrl: "https://github.com/nehasingh2002/Chrome-Extension"
    },
    {
      title: "ATM Machine",
      description: "Java-based project simulating an ATM machine using(OOP) concepts.",
      imageUrl: "https://via.placeholder.com/150",
      demoUrl: "https://github.com/nehasingh2002/ATM-Machine-Project"
    },
    {
      title: "Product Landing Page",
      description: "Responsive product landing page showcasing art gallery collections",
      imageUrl: "https://via.placeholder.com/150",
      demoUrl: "https://github.com/nehasingh2002/product-landing-page"
    }
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.demoUrl} className="btn">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
