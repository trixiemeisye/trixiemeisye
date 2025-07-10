
import { GraduationCap, Award, Users, BookOpen, Heart } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "IT Engineer",
      company: "PT Umalo Sedia Tekno",
      period: "Feb 2025 - Present · 6 months",
      location: "Depok, Jawa Barat, Indonesia",
      icon: Award
    },
    {
      title: "Student",
      company: "Institut Teknologi Del",
      period: "Jul 2022 - Present · 3 years 1 month",
      location: "GPA: 3.73 / 4.00",
      icon: GraduationCap
    },
    {
      title: "Teaching Assistant for English 1",
      company: "Institut Teknologi Del",
      period: "Sep 2024 - Feb 2025 · 6 months",
      location: "",
      icon: BookOpen
    },
    {
      title: "Teaching Assistant for Linear Algebra",
      company: "Institut Teknologi Del",
      period: "Jan 2024 - May 2024 · 5 months",
      location: "Collaborated with Sari Muthia Silalahi S.Pd.,M.Ed",
      icon: BookOpen
    }
  ];

  const organizations = [
    "Student Executive Board of Institut Teknologi Del - Department of Arts and Culture",
    "Bebras Indonesia - Promoting Informatics and computational thinking",
    "Computer Technology Student Association - Competition Division",
    "Mateo Choir - Student choir group in IT Del"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate Computer Engineering student with a love for teaching and technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <Heart className="w-6 h-6 text-accent mr-3" />
              Hi, I'm Trixie Meisye
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a final-year Computer Engineering student at Institut Teknologi Del with a passion 
              for technology, teaching, and making a positive impact. With a strong academic record 
              (GPA: 3.73/4.00) and diverse experience as a teaching assistant, I love sharing knowledge 
              and helping others grow.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Currently working as an IT Engineer at PT Umalo Sedia Tekno, I'm constantly learning 
              and applying new technologies. My journey includes various certifications from Huawei, 
              participation in national competitions, and active involvement in student organizations.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Python", "Java", "Network Security", "Cloud Computing", "Linear Algebra", "Discrete Mathematics"].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-secondary/30 text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-accent">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{exp.title}</h4>
                    <p className="text-accent font-medium mb-1">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mb-2">{exp.period}</p>
                    {exp.location && (
                      <p className="text-muted-foreground text-sm">{exp.location}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
            <Users className="w-6 h-6 text-accent mr-3" />
            Organizations & Activities
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {organizations.map((org, index) => (
              <div key={index} className="p-4 bg-secondary/20 rounded-lg border border-secondary/30">
                <p className="text-foreground">{org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
