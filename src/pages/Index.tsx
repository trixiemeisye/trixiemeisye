
import Navigation from "@/components/Navigation";
import Hero from "@/components/HeroSection";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Projects />
      <ContactSection  />
      <Footer />
    </div>
  );
};

export default Index;
