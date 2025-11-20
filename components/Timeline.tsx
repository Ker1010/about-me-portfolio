import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { EXPERIENCE_DATA } from '../constants';

export const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <RevealOnScroll>
           <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary tracking-tight">Experience</h2>
            <p className="text-tertiary text-xl">My professional journey.</p>
          </div>
        </RevealOnScroll>

        <div className="relative space-y-16">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block"></div>

          {EXPERIENCE_DATA.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 150}>
              <div className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="bg-surface p-8 rounded-[2rem] shadow-apple border border-white/50 hover:shadow-apple-hover transition-all duration-300 group">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-tertiary rounded-full text-xs font-bold uppercase tracking-wider mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.period}
                    </span>
                    <h3 className="text-2xl font-bold text-secondary mb-1">{item.role}</h3>
                    <h4 className="text-primary font-medium mb-4">{item.company}</h4>
                    <p className="text-tertiary leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot (Hidden on Mobile) */}
                <div className="w-4 h-4 bg-white border-4 border-primary rounded-full shadow-lg z-10 hidden md:block flex-shrink-0"></div>

                {/* Empty Space for Grid alignment */}
                <div className="flex-1 w-full hidden md:block"></div>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};