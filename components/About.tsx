import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { ABOUT_TEXT } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary tracking-tight">About Me</h2>
            <p className="text-tertiary text-xl max-w-2xl mx-auto">Getting to know the person behind the code.</p>
          </div>
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Photo Card */}
          <div className="md:col-span-5 h-full">
             <RevealOnScroll className="h-full">
                <div className="h-full bg-surface rounded-[2.5rem] overflow-hidden shadow-apple p-4 border border-white/50 relative group">
                   <div className="absolute inset-0 bg-gray-100/50"></div>
                   <img 
                    src="https://picsum.photos/800/1000?grayscale" 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-[2rem] filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                   />
                </div>
             </RevealOnScroll>
          </div>
          
          {/* Text Card */}
          <div className="md:col-span-7 flex flex-col gap-8">
            <RevealOnScroll delay={200}>
              <div className="bg-surface rounded-[2.5rem] p-10 shadow-apple border border-white/50 hover:shadow-apple-hover transition-shadow duration-500 h-full flex flex-col justify-center">
                 <h3 className="text-2xl font-bold mb-6 text-secondary">Who I Am</h3>
                 <div className="space-y-6 text-tertiary text-lg leading-relaxed font-light">
                   {ABOUT_TEXT.split('\n').map((paragraph, idx) => (
                     paragraph.trim() && <p key={idx}>{paragraph}</p>
                   ))}
                 </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
               <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[2.5rem] p-10 border border-blue-100/50 flex flex-wrap gap-4 items-center justify-center">
                   {['Creative', 'Analytical', 'Fast Learner', 'User Focused'].map((tag, i) => (
                     <span key={tag} className="px-6 py-2 bg-white rounded-full text-primary font-medium shadow-sm text-sm tracking-wide hover:-translate-y-1 transition-transform cursor-default">
                       {tag}
                     </span>
                   ))}
               </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};