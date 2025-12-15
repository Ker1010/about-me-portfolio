import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px] animate-blob mix-blend-multiply"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
        <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-pink-100/50 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10 max-w-4xl">
        <div className={`transition-all duration-1000 delay-100 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/20 shadow-sm mb-8">
             <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
             <span className="text-sm font-medium text-tertiary">Available for Work Soon</span>
          </div>
        </div>
        
        <h1 className={`text-6xl md:text-8xl font-bold mb-8 tracking-tight text-secondary transition-all duration-1000 delay-200 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Create. <br className="md:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Innovate.
          </span>{" "}
          Deploy.
        </h1>

        <p className={`text-xl md:text-2xl text-tertiary max-w-2xl mx-auto mb-12 leading-relaxed font-light transition-all duration-1000 delay-300 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          I'm {SITE_CONFIG.name}, a {SITE_CONFIG.title}. I craft high-performance digital experiences with a focus on aesthetics and usability.
        </p>

        <div className={`flex flex-col sm:flex-row justify-center gap-5 items-center transition-all duration-1000 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a 
            href="#projects" 
            className="group relative px-8 py-4 bg-secondary text-white rounded-full font-medium text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex gap-4">
            <a href={SITE_CONFIG.github} target="_blank" rel="noreferrer" className="p-4 bg-white rounded-full text-secondary hover:text-primary hover:shadow-lg transition-all border border-gray-100">
              <Github size={22} />
            </a>
            <a href={SITE_CONFIG.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-white rounded-full text-secondary hover:text-primary hover:shadow-lg transition-all border border-gray-100">
              <Linkedin size={22} />
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="p-4 bg-white rounded-full text-secondary hover:text-primary hover:shadow-lg transition-all border border-gray-100">
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-tertiary animate-bounce">
        <ChevronDown size={32} className="opacity-50" />
      </div>
    </section>
  );
};