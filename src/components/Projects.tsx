
import { ExternalLink, Github, Award, BookOpen, Users, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const certifications = [
    {
      title: "Huawei ICT Competition 2024-2025 National Final",
      description: "Certificate of Participation in Computing Track - achieved national level recognition in this prestigious competition.",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=300&fit=crop",
      tags: ["Competition", "Computing", "National Level"],
      issuer: "Huawei",
      date: "Dec 2024"
    },
    {
      title: "Provincial Outstanding Student Competition",
      description: "Finalist of PILMAPRES - recognized for academic excellence and leadership at provincial level.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
      tags: ["Academic Excellence", "Leadership", "Provincial"],
      issuer: "Kementrian Pendidikan dan Kebudayaan",
      date: "May 2024"
    },
    {
      title: "Book Author: Pembahasan Soal Kriptografi",
      description: "Writer and editor of cryptography problem solutions book - contributing to educational resources in cybersecurity.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
      tags: ["Cryptography", "Education", "Publishing"],
      issuer: "CV. EUREKA MEDIA AKSARA",
      date: "March 2025"
    },
    {
      title: "HCIA-Security V4.0",
      description: "Huawei Certified ICT Associate in Security - demonstrating proficiency in network security fundamentals.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      tags: ["Cybersecurity", "Networking", "Certification"],
      issuer: "Huawei",
      date: "Dec 2024"
    },
    {
      title: "HCIA-Cloud Service V3.5",
      description: "Huawei Certified ICT Associate in Cloud Service - expertise in cloud computing technologies and services.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      tags: ["Cloud Computing", "Service Management", "Huawei"],
      issuer: "Huawei",
      date: "Oct 2024"
    },
    {
      title: "HCIA-Datacom V1.0",
      description: "Huawei Certified ICT Associate in Data Communication - foundational knowledge in data networking and communication.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      tags: ["Data Communication", "Networking", "Infrastructure"],
      issuer: "Huawei",
      date: "May 2024"
    }
  ];

  const getIcon = (title: string) => {
    if (title.includes("Competition") || title.includes("Outstanding")) return Award;
    if (title.includes("Book") || title.includes("Pembahasan")) return BookOpen;
    if (title.includes("Security") || title.includes("Cloud") || title.includes("Datacom")) return Code;
    return Award;
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my academic achievements, professional certifications, and contributions to the tech community
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = getIcon(cert.title);
            return (
              <Card 
                key={cert.title} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                    {cert.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-secondary/30 text-primary rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-4">
                    <p className="font-medium">{cert.issuer}</p>
                    <p>{cert.date}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-secondary/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-primary mb-4">Languages</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-accent mb-2">Bahasa Indonesia</h4>
                <p className="text-muted-foreground">Native or bilingual proficiency</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-primary mb-2">English</h4>
                <p className="text-muted-foreground">Professional working proficiency</p>
                <p className="text-sm text-muted-foreground mt-1">Duolingo English Test Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
