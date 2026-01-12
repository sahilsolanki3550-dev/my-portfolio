import React from 'react';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      role: 'MERN Stack Online Internship',
      company: 'CreArt Solution',
      duration: '2 July 2025 – 16 July 2025',
      points: [
        'Learned MERN Stack fundamentals',
        'Worked with REST APIs',
        'Understood frontend–backend data flow'
      ]
    },
    {
      role: 'Data Entry Operator',
      company: 'M.K Industry',
      duration: '3 Months',
      points: [
        'Managed Excel records',
        'Ensured data accuracy and consistency'
      ]
    }
  ];

  return (
    <section className="experience container" id="experience">
      <h2>Internship & Experience</h2>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <h3>{exp.role}</h3>
              <span className="duration">{exp.duration}</span>
            </div>

            <p className="company">{exp.company}</p>

            <ul>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
