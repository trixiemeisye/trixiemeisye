import { Heart } from "lucide-react";

const experiences = [
  {
    title: "IT Engineer",
    company: "PT Umalo Sedia Tekno",
    period: "Feb 2025 - Present · 6 months",
    location: "Depok, Jawa Barat, Indonesia",
  },
  {
    title: "Student",
    company: "Institut Teknologi Del",
    period: "Jul 2022 - Present · 3 years 1 month",
    location: "GPA: 3.73 / 4.00",
  },
  {
    title: "Teaching Assistant for English 1",
    company: "Institut Teknologi Del",
    period: "Sep 2024 - Feb 2025 · 6 months",
  },
  {
    title: "Teaching Assistant for Linear Algebra",
    company: "Institut Teknologi Del",
    period: "Jan 2024 - May 2024 · 5 months",
    description: "Collaborated with Sari Muthia Silalahi S.Pd.,M.Ed to support in the planning and execution of Linear Algebra in my 4th semester."
  },
  {
    title: "Teaching Assistant for Discrete Mathematics",
    company: "Institut Teknologi Del",
    period: "Sep 2023 - Dec 2023 · 4 months",
    description: "Collaborated with Sari Muthia Silalahi S.Pd.,M.Ed to support in the planning and execution of Discrete Mathematics."
  },
  {
    title: "Assistant in Pre-University Program (Matriculation)",
    company: "Institut Teknologi Del",
    period: "Aug 2023 - Aug 2023 · 1 month",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#f8f6fa] w-full">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-4xl font-extrabold mb-2 text-center text-[#4A3655]">About Me</h2>
        <div className="w-24 h-1 bg-[#C4A7BB] mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-[#4A3655] text-center mb-8">
          A passionate Computer Engineering student with a love for teaching and technology
        </p>
        <div className="flex items-center gap-2 mb-4 text-2xl font-bold text-[#4A3655] justify-center">
          <Heart className="text-[#C4A7BB]" /> Hi, I'm Trixie Meisye
        </div>
        <p className="mb-4 text-[#4A3655] text-center">
          I'm a final-year Computer Engineering student at Institut Teknologi Del with a passion for technology, teaching, and making a positive impact. With a strong academic record (GPA: 3.73/4.00) and diverse experience as a teaching assistant, I love sharing knowledge and helping others grow.
        </p>
        <p className="mb-6 text-[#4A3655] text-center">
          Currently working as an IT Engineer at PT Umalo Sedia Tekno, I'm constantly learning and applying new technologies. My journey includes various certifications from Huawei, participation in national competitions, and active involvement in student organizations.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {["Python", "Java", "Network Security", "Cloud Computing", "Linear Algebra", "Discrete Mathematics"].map(skill => (
            <span key={skill} className="bg-[#C4A7BB]/30 text-[#4A3655] rounded-full px-4 py-1 text-base font-semibold">{skill}</span>
          ))}
        </div>
        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#4A3655] text-center">Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#C4A7BB]">
                <div className="font-bold text-lg text-[#4A3655] mb-1">{exp.title}</div>
                <div className="text-[#C4A7BB] font-semibold mb-1">@ {exp.company}</div>
                <div className="text-sm text-[#4A3655] mb-1">{exp.period}</div>
                {exp.location && <div className="text-sm text-[#4A3655] mb-1">{exp.location}</div>}
                {exp.description && <div className="text-sm text-[#4A3655] italic">{exp.description}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 