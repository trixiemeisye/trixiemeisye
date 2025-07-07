import Header from './Header';
import ProfileCard from './ProfileCard';
import Lanyard from './Lanyard/Lanyard';
import profilePic from './assets/trixie.jpg'; // Ganti dengan foto Trixie jika ada
import { FaMapMarkerAlt, FaUserFriends, FaBriefcase, FaGraduationCap, FaCertificate, FaProjectDiagram, FaLanguage, FaUsers } from 'react-icons/fa';
import './About.css';

export default function About() {
  return (
    <>
      <Lanyard />
      <main className="about-bg">
        <ProfileCard
          name="Trixie Meisye"
          title="Final-Year Computer Engineering Student"
          handle="trixiemeisye"
          status="Online"
          contactText="Contact Me"
          avatarUrl={profilePic}
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => window.location.href = '/contact'}
        />
        <AboutSection
          title="Experience"
          icon={<FaBriefcase />}
          images={[
            require('./assets/ASDOS.jpg'),
            require('./assets/matrikulasi.JPG'),
            require('./assets/ASDOS1.jpg'),
            require('./assets/studler.jpg')
          ]}
        >
          <div className="about-exp-list">
            <div className="about-exp-item">
              <b>IT Engineer</b><br/>
              <span className="about-exp-company">@ PT Umalo Sedia Tekno</span>
              <span className="about-exp-date">Feb 2025 - Present · 6 months</span>
              <span className="about-exp-location">Depok, Jawa Barat, Indonesia</span>
            </div>
            <div className="about-exp-item">
              <b>Student</b><br/>
              <span className="about-exp-company">@ Institut Teknologi Del</span>
              <span className="about-exp-date">Jul 2022 - Present · 3 years 1 month · GPA: 3.73 / 4.00</span>
            </div>
            <div className="about-exp-item">
              <b>Teaching Assistant for English 1</b><br/>
              <span className="about-exp-company">@ Institut Teknologi Del</span>
              <span className="about-exp-date">Sep 2024 - Feb 2025 · 6 months</span>
            </div>
            <div className="about-exp-item">
              <b>Teaching Assistant for Linear Algebra</b><br/>
              <span className="about-exp-company">@ Institut Teknologi Del</span>
              <span className="about-exp-date">Jan 2024 - May 2024 · 5 months</span>
              <span className="about-exp-desc">Collaborated with Sari Muthia Silalahi S.Pd.,M.Ed to support in the planning and execution of Linear Algebra in my 4th semester.</span>
            </div>
            <div className="about-exp-item">
              <b>Teaching Assistant for Discrete Mathematics</b><br/>
              <span className="about-exp-company">@ Institut Teknologi Del</span>
              <span className="about-exp-date">Sep 2023 - Dec 2023 · 4 months</span>
              <span className="about-exp-desc">Collaborated with Sari Muthia Silalahi S.Pd.,M.Ed to support in the planning and execution of Discrete Mathematics</span>
            </div>
            <div className="about-exp-item">
              <b>Assistant in Pre-University Program (Matriculation)</b><br/>
              <span className="about-exp-company">@ Institut Teknologi Del</span>
              <span className="about-exp-date">Aug 2023 - Aug 2023 · 1 month</span>
            </div>
          </div>
        </AboutSection>
        <AboutSection title="Licenses & Certifications" icon={<FaCertificate />} 
          images={[
            require('./assets/mapres.jpeg'),
            require('./assets/hcia.png'),
            require('./assets/hcia1.jpeg'),
            require('./assets/hcia2.jpeg'),
            require('./assets/hcia3.jpeg'),
            require('./assets/buku.jpeg'),
          ]}
        >          <div className="about-cert-item"><b>Certificate of Participation – Huawei ICT Competition 2024-2025 National Final (Computing Track)</b><br/><span className="about-cert-org">Huawei</span> <span className="about-cert-date">Issued Dec 2024</span></div>
            <div className="about-cert-item"><b>Finalist of the Provincial-Level Outstanding Student Competition (PILMAPRES)</b><br/><span className="about-cert-org">Kementrian Pendidikan dan Kebudayaan</span> <span className="about-cert-date">Issued May 2024</span></div>
            <div className="about-cert-item"><b>Writer and editor of the book "Pembahasan Soal Kriptografi"</b><br/><span className="about-cert-org">CV. EUREKA MEDIA AKSARA </span> <span className="about-cert-date">Issued March 2025</span></div>
            <div className="about-cert-item"><b>HCIA-Security V4.0</b><br/><span className="about-cert-org">Huawei</span> <span className="about-cert-date">Issued Dec 2024</span></div>
            <div className="about-cert-item"><b>HCIA-Cloud Service V3.5</b><br/><span className="about-cert-org">Huawei</span> <span className="about-cert-date">Issued Oct 2024</span></div>
            <div className="about-cert-item"><b>HCIA-Datacom V1.0 Course</b><br/><span className="about-cert-org">Huawei</span> <span className="about-cert-date">Issued May 2024</span></div>
            <div className="about-cert-item"><b>Duolingo English Test</b><br/><span className="about-cert-org">Duolingo</span> <span className="about-cert-date">Issued Feb 2024</span></div>
        </AboutSection>
        <AboutSection title="Languages" icon={<FaLanguage />}>
          <div className="about-lang-item">Bahasa Indonesia <span className="about-lang-level">Native or bilingual proficiency</span></div>
          <div className="about-lang-item">English <span className="about-lang-level">Professional working proficiency</span></div>
        </AboutSection>
        <AboutSection title="Organizations" icon={<FaUsers />} 
                  images={[
                    require('./assets/bebras1.jpg'),
                    require('./assets/bebras.jpeg'),
                    require('./assets/depsenbud.jpg'),
                    require('./assets/bebras2.jpg'),
                  ]}> 
<div className="about-org-list">
  <div className="about-org-item">
    <b>Student Executive Board of Institut Teknologi Del</b><br/>
    <span className="about-org-role">Department of Arts and Culture</span> 
    <span className="about-org-date">Sep 2023 - Present</span>
  </div>
  <div className="about-org-item">
    <b>Bebras Indonesia</b><br/>
    <span className="about-org-desc">
      Bebras is an international initiative that aims to promote Informatics (Computer Science, or Computing) and computational thinking among school students of all ages.
    </span>
  </div>
  <div className="about-org-item">
    <b>Computer Technology Student Association</b><br/>
    <span className="about-org-role">Competition Division</span>
  </div>
  <div className="about-org-item">
    <b>Mateo Choir</b><br/>
    <span className="about-org-role">Student choir group in IT Del</span>
  </div>
</div>

        </AboutSection>
      </main>
    </>
  );
}

function AboutSection({ title, icon, images = [], children }) {
  return (
    <section className="about-section">
      <h2 className="about-section-title">{icon} {title}</h2>
      <div className="about-section-content">
        {children}
        {images.length > 0 && (
          <div className="about-section-images">
{images.map((img, idx) => (
              <img key={idx} src={img} alt={`${title} ${idx + 1}`} className="about-section-img" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 