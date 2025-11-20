import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { SKILLS_DATA } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <RevealOnScroll>
           <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary tracking-tight">Expertise</h2>
            <p className="text-tertiary text-xl">Tools and technologies I work with.</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {SKILLS_DATA.map((skill, index) => (
            <RevealOnScroll key={skill.name} delay={index * 50}>
              <div className="group">
                <div className="flex justify-between mb-4 items-end">
                  <span className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-tertiary font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transform origin-left transition-transform duration-1000 ease-out"
                    style={{ width: `${skill.level}%`, transform: `scaleX(${skill.level / 100})` }}
                  ></div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <div className="mt-24 pt-12 border-t border-gray-100">
           <RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-4">
                {['Git', 'Figma', 'Ruby', 'Vercel', 'Linux', 'REST', 'API', 'Clean Architecture'].map((tech, i) => (
                     <span key={tech} className="px-6 py-3 bg-background rounded-2xl text-tertiary text-sm font-medium border border-transparent hover:border-gray-200 hover:shadow-sm transition-all cursor-default">
                         {tech}
                     </span>
                ))}
            </div>
           </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};