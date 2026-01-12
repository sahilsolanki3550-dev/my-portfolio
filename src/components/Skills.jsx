import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skills = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js(Basic)'],
    Backend: ['Node.js', 'Express.js'],
    Database: ['MongoDB', 'MySQL'],
    // Tools: ['Git', 'GitHub', 'VS Code', 'WordPress']
  };

  return (
    <div className="skills container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skill-tags">
              {list.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;