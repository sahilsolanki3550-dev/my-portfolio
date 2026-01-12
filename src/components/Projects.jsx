import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Employee Management System (MERN)',
      tech: 'React.js, Node.js, Express, MongoDB',
      description:
        'A basic employee management system with CRUD operations to add, view, update, and delete employee records.',
      github: 'https://github.com/sahilsolanki3550-dev/ems-mern-crud'
    },
    {
      title: 'Multi Hospital managment system - (Group Project)',
      tech: 'HTML, CSS, JS, PHP, MySQL',
      description:
        'Multi-hospital web platform where hospitals register, get admin approval, manage dashboards, and users can search hospitals.',
      github: 'https://github.com/sahilsolanki3550-dev/Main_Web'
    },
    {
      title: 'Clothing Store E-commerce Website',
      tech: 'WordPress',
      description: 'An online store for clothing built using WordPress.',
      github: '' // No public repo
    }
  ];

  return (
    <div className="projects container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            <p>{project.description}</p>

            {/* GitHub Button */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn github-btn"
              >
                View Code
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
