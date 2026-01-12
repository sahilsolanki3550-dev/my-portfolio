import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about container">
      <h2>About Me</h2>

      <p>
        I am a Computer Engineering student with knowledge of web
        development and MERN Stack fundamentals. I am familiar with both
        frontend and backend concepts, databases, and RESTful APIs, and I
        continuously improve my skills through hands-on practice and small
        projects.
      </p>

      <p>
        I have worked on academic and personal projects including a Hospital
        Management System and a live e-commerce website(Wordpress). I am currently seeking
        a MERN Stack internship where I can apply my skills, gain practical
        industry exposure, and grow as a full-stack developer.
      </p>

      <ul>
        <li><strong>Location:</strong> Vadodara, Gujarat, India</li>
        <li><strong>Degree:</strong> B.E. Computer Engineering</li>
        <li><strong>Current Focus:</strong> MERN Stack Development</li>
        <li><strong>Career Goal:</strong> Full-Stack Web Developer</li>
      </ul>
    </section>
  );
}

export default About;
