import { Heart, Briefcase, GraduationCap, BookOpen, Award, BadgeCheck, Cloud, Network, Globe, Flag } from "lucide-react";
import huaweiLogo from "@/assets/hcia.png";
import duolingoLogo from "@/assets/ok.png";
import huaweiImg from "@/assets/hcia.png";
import pilmapresImg from "@/assets/mapres.jpeg";
import bookImg from "@/assets/buku.jpeg";
import org1Img from "@/assets/depsenbud.jpg";
import org2Img from "@/assets/bebras.jpeg";
import org3Img from "@/assets/lab.jpeg";
import org4Img from "@/assets/mateo.jpg";
import huaweiImg1 from "@/assets/hcia1.jpeg";
import huaweiImg2 from "@/assets/hcia3.jpeg";
import huaweiImg3 from "@/assets/hcia2.jpeg";
import React from "react";
import gallery1 from "@/assets/bebras1.jpg";
import gallery2 from "@/assets/hcia1.jpeg";
import gallery3 from "@/assets/lab.jpeg";
import gallery4 from "@/assets/buku.jpeg";
import gallery5 from "@/assets/ok.png";
import gallery6 from "@/assets/mateo.jpg";

const experiences = [
  {
    title: "IT Engineer",
    company: "PT Umalo Sedia Tekno",
    period: "Feb 2025 - Present · 6 months",
    location: "Depok, Jawa Barat, Indonesia",
    icon: <Briefcase className="w-6 h-6 text-[#C4A7BB]" />,
  },
  {
    title: "Student",
    company: "Institut Teknologi Del",
    period: "Jul 2022 - Present · 3 years 1 month",
    location: "GPA: 3.73 / 4.00",
    icon: <GraduationCap className="w-6 h-6 text-[#C4A7BB]" />,
  },
  {
    title: "Teaching Assistant for English 1",
    company: "Institut Teknologi Del",
    period: "Sep 2024 - Feb 2025 · 6 months",
    icon: <BookOpen className="w-6 h-6 text-[#C4A7BB]" />,
  },
  {
    title: "Teaching Assistant for Linear Algebra",
    company: "Institut Teknologi Del",
    period: "Jan 2024 - May 2024 · 5 months",
    description: "Collaborated with Sari Muthia Silalahi S.Pd.,M.Ed to support in the planning and execution of Linear Algebra in my 4th semester.",
    icon: <BookOpen className="w-6 h-6 text-[#C4A7BB]" />,
  },
  {
    title: "Teaching Assistant for Discrete Mathematics",
    company: "Institut Teknologi Del",
    period: "Sep 2023 - Dec 2023 · 4 months",
    description: "Collaborated with Sari Muthia Silalahi S.Pd.,M.Ed to support in the planning and execution of Discrete Mathematics.",
    icon: <BookOpen className="w-6 h-6 text-[#C4A7BB]" />,
  },
  {
    title: "Assistant in Pre-University Program (Matriculation)",
    company: "Institut Teknologi Del",
    period: "Aug 2023 - Aug 2023 · 1 month",
    icon: <BookOpen className="w-6 h-6 text-[#C4A7BB]" />,
  },
];
const certifications = [
    {
      title: "Huawei ICT Competition 2024-2025 National Final",
      description:
        "Certificate of Participation in Computing Track – achieved national-level recognition in this prestigious tech competition involving problem-solving and system design.",
      tags: ["Competition", "Computing", "National Level"],
      issuer: "Huawei",
      date: "Dec 2024",
      image: huaweiImg,
      icon: <BadgeCheck className="w-6 h-6 text-[#4A3655]" />,
    },
    {
      title: "Provincial Outstanding Student Competition",
      description:
        "Finalist of PILMAPRES – selected among top provincial students based on academic performance, leadership, and impact on community.",
      tags: ["Academic Excellence", "Leadership", "Provincial"],
      issuer: "Kementrian Pendidikan dan Kebudayaan",
      date: "May 2024",
      image: pilmapresImg,
      icon: <BadgeCheck className="w-6 h-6 text-[#4A3655]" />,
    },
    {
      title: "Book Author: Pembahasan Soal Kriptografi",
      description:
        "Writer and editor of an educational book providing detailed solutions to cryptography problems – supports cybersecurity learning and problem-solving skills.",
      tags: ["Cryptography", "Education", "Publishing"],
      issuer: "CV. EUREKA MEDIA AKSARA",
      date: "March 2025",
      image: bookImg,
      icon: <BookOpen className="w-6 h-6 text-[#4A3655]" />,
    },
    {
      title: "HCIA-Security V4.0",
      description:
        "Huawei Certified ICT Associate in Security – demonstrates solid understanding of basic cybersecurity concepts, protocols, and protection strategies.",
      tags: ["Cybersecurity", "Certification", "Huawei"],
      issuer: "Huawei",
      date: "Dec 2024",
      image: huaweiImg1,
      icon: <BadgeCheck className="w-6 h-6 text-[#4A3655]" />,
    },
    {
      title: "HCIA-Cloud Service V3.5",
      description:
        "Huawei Certified ICT Associate in Cloud Service – covers fundamentals of cloud computing, including IaaS/PaaS/SaaS models, virtualization, and service deployment.",
      tags: ["Cloud Computing", "Certification", "Huawei"],
      issuer: "Huawei",
      date: "Oct 2024",
      image: huaweiImg2,
      icon: <Cloud className="w-6 h-6 text-[#4A3655]" />,
    },
    {
      title: "HCIA-Datacom V1.0 Course",
      description:
        "Completed HCIA-Datacom course – introduced to networking basics, IP routing & switching, and foundational datacom technologies.",
      tags: ["Networking", "Datacom", "Huawei"],
      issuer: "Huawei",
      date: "May 2024",
      image: huaweiImg3,
      icon: <Network className="w-6 h-6 text-[#4A3655]" />,
    },
  ];
  

const languages = [
  {
    name: "Bahasa Indonesia",
    level: "Native or bilingual proficiency",
    icon: <Flag className="w-6 h-6 text-[#C4A7BB]" />,
  },
  {
    name: "English",
    level: "Professional working proficiency",
    certification: "Duolingo English Test",
    icon: <Globe className="w-6 h-6 text-[#C4A7BB]" />,
  },
];

const organizations = [
  {
    name: "Student Executive Board of Institut Teknologi Del",
    role: "Department of Arts and Culture",
    period: "Sep 2023 - Present",
    tags: ["Leadership", "Arts", "Culture"],
    image: org1Img,
  },
  {
    name: "Bebras Indonesia",
    role: "Promoting Informatics and computational thinking among school students.",
    tags: ["Informatics", "Education"],
    image: org2Img,
  },
  {
    name: "Computer Technology Student Association",
    role: "Competition Division",
    tags: ["Competition", "Tech"],
    image: org3Img,
  },
  {
    name: "Mateo Choir",
    role: "Student choir group in IT Del",
    tags: ["Music", "Community"],
    image: org4Img,
  },
];

export default function AboutPage() {
  return (
    <section className="py-20 bg-[#f8f6fa] w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl font-extrabold mb-2 text-center text-[#4A3655]">About Me</h2>
        <div className="w-24 h-1 bg-[#C4A7BB] mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-[#4A3655] text-center mb-8">
          Final-Year Computer Engineering Student passionate about technology, teaching, and creating beautiful solutions.
        </p>
        {/* Experience */}
        <h3 className="text-2xl font-bold mb-6 text-[#4A3655] text-center">Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {experiences.slice(0, 6).map((exp, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 shadow-md border-l-4 border-[#C4A7BB] flex items-start gap-3">
              <div className="mt-1">{exp.icon && React.cloneElement(exp.icon, { className: 'w-5 h-5 text-[#C4A7BB]' })}</div>
              <div>
                <div className="font-semibold text-base text-[#4A3655] mb-0.5">{exp.title}</div>
                <div className="text-[#C4A7BB] font-medium text-sm mb-0.5">@ {exp.company}</div>
                <div className="text-xs text-[#4A3655] mb-0.5">{exp.period}</div>
                {exp.location && <div className="text-xs text-[#4A3655] mb-0.5">{exp.location}</div>}
                {exp.description && <div className="text-xs text-[#4A3655] italic">{exp.description}</div>}
              </div>
            </div>
          ))}
        </div>
        {/* Achievements & Certifications Section */}
        <h2 className="text-4xl font-extrabold mb-2 text-center text-[#4A3655]">Achievements & Certifications</h2>
        <div className="w-24 h-1 bg-[#C4A7BB] mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-[#4A3655]/80 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my academic achievements, professional certifications, and contributions to the tech community
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
              <div className="relative">
                <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" />
                <div className="absolute top-3 right-3 bg-[#4A3655] bg-opacity-90 rounded-full p-2">
                  {cert.icon}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="font-bold text-lg text-[#4A3655] mb-1">{cert.title}</div>
                <div className="text-[#4A3655]/80 text-sm mb-3">{cert.description}</div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.tags.map((tag, i) => (
                    <span key={i} className="bg-[#C4A7BB]/30 text-[#4A3655] rounded-full px-3 py-1 text-xs font-semibold">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto text-[#4A3655] text-sm font-medium">{cert.issuer}</div>
                <div className="text-[#4A3655]/70 text-xs">{cert.date}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Organizations Section */}
        <h2 className="text-3xl font-bold mb-6 text-[#4A3655] text-center">Organizations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {organizations.map((org, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
              {org.image && (
                <img src={org.image} alt={org.name} className="w-full h-32 object-cover" />
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="font-bold text-lg text-[#4A3655] mb-1">{org.name}</div>
                <div className="text-[#4A3655]/80 text-sm mb-2">{org.role}</div>
                {org.period && <div className="text-[#4A3655]/70 text-xs mb-2">{org.period}</div>}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {org.tags && org.tags.map((tag, i) => (
                    <span key={i} className="bg-[#C4A7BB]/30 text-[#4A3655] rounded-full px-3 py-1 text-xs font-semibold">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Languages */}
        <h3 className="text-2xl font-bold mb-6 text-[#4A3655] text-center">Languages</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          {languages.map((lang, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
              <div className="mb-2">{lang.icon}</div>
              <div className="font-bold text-[#4A3655]">{lang.name}</div>
              <div className="text-sm text-[#4A3655]/80 mb-1">{lang.level}</div>
              {lang.certification && (
                <div className="text-xs text-[#C4A7BB] font-medium">{lang.certification}</div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
} 