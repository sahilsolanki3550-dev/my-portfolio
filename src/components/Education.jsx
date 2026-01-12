import React from 'react';
import '../styles/Education.css'; // you can rename to Education.css later if you want

function Education() {
  const education = [
    {
      title: 'Bachelor of Engineering (Computer Engineering) [Pursuing]',
      institute: 'Sigma Institute of Engineering, Vadodara, Gujarat',
      period: '2023 – 2026'
    },
    {
      title: 'Diploma in Computer Engineering',
      institute: 'The Maharaja Sayajirao University (MSU), Vadodara',
      period: '2020 – 2023'
    },
    {
      title: 'SSC (10th Standard)',
      institute: ' Shree Swami Vivekanand Vidyalaya, Vadodara  (Gujarat Board)',
      period: 'Completed in 2020'
    }
  ];


  return (
    <section className="experience container">
      <h2>Education</h2>

      <div className="timeline">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <h3>{edu.title}</h3>
            <p className="institute">{edu.institute}</p>
            <p className="period">{edu.period}</p>
          </div>
        ))}
      </div>

      
    </section>
  );
}

export default Education;
