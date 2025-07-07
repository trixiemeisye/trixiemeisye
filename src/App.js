import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Lanyard from './Lanyard/Lanyard';
import './MainPage.css';
import './Lanyard/Lanyard.css';
import profilePic from './assets/trixie.jpg';
import { FiMail, FiInstagram, FiLinkedin } from 'react-icons/fi';

const SERVICES = [
  {
    icon: 'https://img.icons8.com/ios-filled/100/000000/laptop-coding.png',
    title: 'Web Development',
    desc: 'I love building modern web apps with React, Laravel, PHP, or whatever tech fits the challenge. Coding is my creative playground!',
  },  
  {
    icon: 'https://img.icons8.com/ios-filled/100/000000/cloud-network.png',
    title: 'Cloud & Networking',
    desc: 'Experience with Huawei ICT, Datacom, and cloud service integration for scalable systems.',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/100/000000/lock-2.png',
    title: 'Cybersecurity',
    desc: 'HCIA-Security certified with strong foundation in network security and defense systems.',
  },
  {
    icon: 'https://img.icons8.com/ios-filled/100/000000/source-code.png',
    title: 'Technical Projects',
    desc: 'From WebRTC face recognition to RFID systems — hands-on with real-world prototypes.',
  },

];

const LATEST_WORK = [
  {
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
    title: 'P4 Web Compiler',
    subtitle: 'Web-based compiler and doc environment for programmable networks',
  },
  {
    img: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80',
    title: 'RFID TapCard System',
    subtitle: 'Public transport payment prototype using NodeMCU + RFID',
  },
  {
    img: 'https://images.unsplash.com/photo-1617957745099-7c3f1da8db56?auto=format&fit=crop&w=400&q=80',
    title: 'Face Attendance System',
    subtitle: 'Attendance system using WebRTC + face recognition',
  },
];

function Home() {
  return (
    <main className="main-bg">
      <Lanyard />
      {/* Section 1: About Me */}
      <section className="hero about-hero">
  <div className="about-hero-content">
    <img src={profilePic} alt="Trixie Meisye" className="about-hero-avatar" />
    <div className="about-hero-text">
      <div className="about-hero-label">Hi, I'm</div>
      <h1 className="about-hero-title">Trixie Meisye</h1>
      <p className="about-hero-desc">
        Final-year Computer Engineering student who enjoys building things, solving real problems, and learning by doing.
        <br />
        <span style={{ color: '#e573c7' }}>
          Always up for cool projects and good collaboration!
        </span>
      </p>
    </div>
  </div>
</section>

      {/* Section 2: Services */}
      <section className="services">
        {SERVICES.map((s, i) => (
          <div className="service-card" key={i}>
            <img src={s.icon} alt="icon" className="service-icon" />
            <div className="service-title">{s.title}</div>
            <div className="service-desc">{s.desc}</div>
          </div>
        ))}
      </section>
    </main>
  );
}

function ContactWithLanyard() {
  return (
    <>
      <Contact />
      <Lanyard />
    </>
  );
}

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-gradient-bar" />
      <div className="footer-content">
        <div className="footer-socials">
          <a href="mailto:trixiemeisye@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
            <FiMail size={24} />
          </a>
          <a href="https://instagram.com/trixiemeisye" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FiInstagram size={24} />
          </a>
          <a href="https://linkedin.com/in/trixie-meisye" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FiLinkedin size={24} />
          </a>
        </div>
        <div className="footer-message">
          <span style={{fontWeight:700, color:'#e573c7'}}>Trixie Meisye</span> © {new Date().getFullYear()}<br/>
          <span style={{fontSize:'0.98em', color:'#b388ff'}}>Stay inspired, keep coding, and spread kindness!</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<ContactWithLanyard />} />
      </Routes>
      <Footer />
    </Router>
  );
}
