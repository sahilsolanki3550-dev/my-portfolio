import React from 'react';
import '../styles/Certificates.css';

function Certificates() {
  const certificates = [
    {
      title: 'AWS Discovery Day',
      organizer: 'Enacad',
      date: '26 Oct 2023',
      mode: 'Offline (At College)',
      type: 'Certificate of Attendance'
    },
    {
      title: 'AI for Students: Build Your Own Generative AI Model',
      organizer: 'NxtWave',
      date: '17 Feb 2024',
      mode: 'Online',
      type: 'Certificate of Participation'
    },
    {
      title: 'Freedom with AI Masterclass',
      organizer: 'Avinash Mada',
      date: '08 May 2024',
      mode: 'Online',
      type: 'Certificate of Completion'
    },
    {
      title: 'Placement Preparation Programme (2 Days)',
      organizer: 'IIP in association with Abhyuday IIT Bombay',
      date: '16–17 Jul 2024',
      mode: 'Online',
      type: 'Certificate of Participation'
    },
    
  ];

  return (
    <section className="certificates container">
      <h2>Certificates & Webinars</h2>

      <ul className="certificates-list">
        {certificates.map((cert, index) => (
          <li key={index} className="certificate-item">
            <strong>{cert.title}</strong>
            <div className="certificate-meta">
              {cert.organizer} | {cert.date} | {cert.mode}
            </div>
            {/* <div className="certificate-type">
              {cert.type}
            </div> */}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certificates;
