import { useState, useEffect } from "react";
import { Menu, X, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Work', to: '/work' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    } w-full`}>
      <div className="w-full flex items-center justify-between h-16 px-8">
        {/* Logo */}
        <Link 
          to="/"
          className="text-2xl font-bold text-primary flex items-center gap-2"
        >
          Trixie Meisye
          <Sparkles className="w-5 h-5 text-accent" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-foreground hover:text-accent transition-colors duration-300 font-medium relative group ${location.pathname === item.to ? 'text-[#C4A7BB] border-b-2 border-[#C4A7BB] pb-1 font-semibold' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t">
          <div className="py-4 space-y-2 px-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`block w-full text-left px-4 py-2 text-foreground hover:text-accent hover:bg-secondary/20 transition-colors duration-300 ${location.pathname === item.to ? 'text-[#C4A7BB] font-semibold' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 