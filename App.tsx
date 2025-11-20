import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-secondary hover:opacity-80 transition-opacity">
            <div className="bg-secondary text-white p-1.5 rounded-lg">
              <Terminal size={20} strokeWidth={3} />
            </div>
            <span>Ker</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex bg-white/50 backdrop-blur-md rounded-full px-2 py-1 border border-white/20 shadow-sm mr-4">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="px-5 py-2 text-sm font-medium text-tertiary hover:text-secondary transition-colors rounded-full hover:bg-white/80"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a href="#contact" className="px-6 py-2.5 bg-primary text-white rounded-full hover:bg-blue-600 transition-all text-sm font-medium shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5">
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-secondary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
           <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 py-6 px-6 shadow-xl animate-fade-in-up">
             <div className="flex flex-col space-y-2">
               {navLinks.map(link => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-secondary font-medium text-lg py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contact"
                  className="text-primary font-semibold text-lg py-3 px-4 mt-2 hover:bg-blue-50 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Me
                </a>
             </div>
           </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;