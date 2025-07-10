import img1a from "@/assets/Home.jpg";
import img1b from "@/assets/Firewall.jpg";
import img2a from "@/assets/ok.png";
import img2b from "@/assets/des.jpeg";
import img3a from "@/assets/face2.jpeg";
import img3b from "@/assets/lab.jpeg";
import img4a from "@/assets/dess (1).png";
import img4b from "@/assets/dess (2).png";

const projects = [
  {
    title: "P4 Language Web Docs & Compiler",
    description: "Built a web-based documentation and compilation system for the P4 Language — a domain-specific language for programming network data plane devices.",
    tech: ["Python", "P4", "React.js", "Vite"],
    images: [img1a, img1b],
  },
  {
    title: "Public Transportation Payment System (RFID, NodeMCU)",
    description: "Designed a tap-card based payment system using RFID and NodeMCU, focused on low-cost public transportation solutions integrated with web tech.",
    tech: ["Embedded Systems", "IoT", "JavaScript", "PHP", "Project Management", "Web Design"],
    images: [img2a, img2b],
  },
  {
    title: "Simple WEBRTC + Face Recognition Attendance",
    description: "A real-time attendance system using WebRTC for live video capture and face recognition for identity verification.",
    tech: ["Python", "JavaScript"],
    images: [img3a, img3b],
  },
  {
    title: "3D Case & Hardware Design",
    description: "3D and hardware designs using SolidWorks for IoT projects. Focused on efficient enclosure and component layout for embedded systems.",
    tech: ["SolidWorks", "Hardware Design", "3D Modeling"],
    images: [img4a, img4b],
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-[#f8f6fa] w-full">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-[#4A3655]">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#C4A7BB]">
              <div className="flex gap-2 mb-3">
                {proj.images.map((img, i) => (
                  <img key={i} src={img} alt={proj.title + ' ' + (i+1)} className="w-1/2 h-32 object-cover rounded-lg" />
                ))}
              </div>
              <div className="font-bold text-lg text-[#4A3655] mb-2">{proj.title}</div>
              <div className="text-[#4A3655] mb-3">{proj.description}</div>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map(t => (
                  <span key={t} className="bg-[#C4A7BB]/30 text-[#4A3655] rounded-full px-3 py-1 text-xs font-medium">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 