import React from 'react';
import Header from './Header';
import "./Work.css";
import project1a from './assets/Documentation.jpg';
import project1b from './assets/Compilation.jpg';
import project1c from './assets/Firewall.jpg';
import project1d from './assets/Home.jpg';
import project2a from './assets/ok.png';
import project2b from './assets/des.jpeg';
import project3a from './assets/lab.jpeg';
import project3b from './assets/face2.jpeg';
import project4a from './assets/dess (1).png';
import project4b from './assets/dess (2).png';

const projects = [
  {
    title: 'P4 Language Web Docs & Compiler',
    description:
      'Built a web-based documentation and compilation system for the P4 Language — a domain-specific language for programming network data plane devices.',
    tech: ['Python', 'P4', 'React.js', 'Vite'],
    images: [project1d, project1a, project1b, project1c]
  },
  {
    title: 'Public Transportation Payment System (RFID, NodeMCU)',
    description:
      'Designed a tap-card based payment system using RFID and NodeMCU, focused on low-cost public transportation solutions integrated with web tech.',
    tech: ['Embedded Systems', 'IoT', 'JavaScript', 'PHP', 'Project Management', 'Web Design'],
    images: [project2a, project2b]
  },
  {
    title: 'Simple WEBRTC + Face Recognition Attendance',
    description:
      'A real-time attendance system using WebRTC for live video capture and face recognition for identity verification.',
    tech: ['Python', 'JavaScript'],
    images: [project3a, project3b]
  },
  {
    title: '3D Case & Hardware Design',
    description:
      '3D and hardware designs using SolidWorks for IoT projects. Focused on efficient enclosure and component layout for embedded systems.',
    tech: ['SolidWorks', 'Hardware Design', '3D Modeling'],
    images: [project4a, project4b]
  }
];

export default function Work() {
  return (
    <main className="work-bg">
      <div className="work-title">Projects</div>
      <div className="work-list">
        {projects.map((project, index) => (
          <div className="work-card" key={index}>
            {project.images && project.images.length > 0 && (
              <div className="work-img-grid">
                {project.images.map((img, i) => (
                  <img src={img} className="work-img-multi" alt={project.title + ' ' + (i+1)} key={i} />
                ))}
              </div>
            )}
            <div className="work-title-card">{project.title}</div>
            <div className="work-subtitle">{project.description}</div>
            <div style={{ margin: '16px 0 8px 0', display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{
                  background: 'rgba(229,115,199,0.13)',
                  color: '#b388ff',
                  borderRadius: '16px',
                  padding: '4px 14px',
                  fontSize: '0.98rem',
                  fontWeight: 500
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
