import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiInstagram, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const contacts = [
  {
    title: 'Email',
    link: 'mailto:trixiemeisye@gmail.com',
    linkLabel: 'trixiemeisye@gmail.com',
    icon: <FiMail size={32} color="#e573c7" style={{marginBottom: 8}} />,
    gradient: 'bg-gradient-to-br from-pink-500 via-red-400 to-yellow-400',
  },
  {
    title: 'Instagram',
    link: 'https://instagram.com/trixiemeisye',
    linkLabel: '@trixiemeisye',
    icon: <FiInstagram size={32} color="#b388ff" style={{marginBottom: 8}} />,
    gradient: 'bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500',
  },
  {
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/trixie-meisye',
    linkLabel: 'linkedin.com/in/trixiemeisye',
    icon: <FiLinkedin size={32} color="#f9d6ff" style={{marginBottom: 8}} />,
    gradient: 'bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400',
  },
];

function PinContactCard({ title, link, linkLabel, icon, gradient, custom, animate }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`pin-contact-card group ${gradient}`}
      initial={{ opacity: 0, y: 40 }}
      animate={animate}
      transition={{ duration: 0.6, delay: custom * 0.18, type: 'spring', stiffness: 60 }}
      style={{ textDecoration: 'none' }}
    >
      <div className="pin-contact-gradient" />
      <div className="pin-contact-content">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div className="pin-contact-icon">{icon}</div>
          <div className="pin-contact-title">{title}</div>
        </div>
        <div className="pin-contact-link">{linkLabel}</div>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <main className="main-bg min-h-[80vh] flex flex-col items-center justify-center" style={{paddingTop: '120px'}}>
      <div className="flex flex-col items-center gap-8">
        <h1 className="contact-hero-title">
          Contact Me!
        </h1>

        <motion.div
          className="pin-contact-grid"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.18 } },
            hidden: {},
          }}
        >
          {contacts.map((c, i) => (
            <PinContactCard key={c.title} {...c} custom={i} animate={{ opacity: 1, y: 0 }} />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
