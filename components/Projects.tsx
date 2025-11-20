import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { PROJECTS_DATA } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
           <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary tracking-tight">Selected Works</h2>
            <p className="text-tertiary text-xl">A collection of projects I've built.</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS_DATA.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 100}>
              <div className="group bg-surface rounded-[2rem] overflow-hidden shadow-apple hover:shadow-apple-hover transition-all duration-500 hover:-translate-y-2 h-full flex flex-col border border-white/50">
                <div className="relative overflow-hidden h-64">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {project.github != null && (
                      <a href={project.github === '#' ? undefined : project.github} className={`p-2 bg-white/90 backdrop-blur rounded-full text-secondary shadow-lg transition-colors ${
                            project.github === '#' 
                              ? 'pointer-events-none opacity-50' 
                              : 'hover:text-primary'
                          }`}
                        >
                          <Github size={20} />
                        </a>
                    )}
                    {project.link != null && (
                      <a href={project.link} className="p-2 bg-white/90 backdrop-blur rounded-full text-secondary hover:text-primary shadow-lg transition-colors">
                      <ExternalLink size={20} />
                    </a>
                    )}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-tertiary mb-6 text-base leading-relaxed font-light line-clamp-3 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-semibold text-primary bg-blue-50 px-3 py-1.5 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};