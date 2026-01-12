import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero container">
      <h1>
        Hi, I’m <span className="highlight">Sahil Solanki</span>
      </h1>

      <h2 className="hero-title">
        Aspiring MERN Stack Developer
      </h2>

      <p className="hero-description">
        I am a Computer Engineering student learning full-stack web development
        using the MERN stack. I am actively seeking a MERN Stack internship where
        I can apply my skills, gain real-world experience, and grow as a developer.
      </p>

      <div className="hero-buttons">
        {/* Replace with actual resume URL */}
        <a href="/resume.pdf" className="btn" download>
          Download Resume
        </a>
        <a href="#contact" className="btn btn-secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
