import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-secondary tracking-tight">Get in Touch</h2>
        <p className="text-tertiary max-w-lg mx-auto mb-12 text-lg">
          Open for opportunities. Let's build something amazing together.
        </p>

        <a 
          href={`mailto:${SITE_CONFIG.email}`} 
          className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white font-medium rounded-full hover:bg-black transition-all hover:scale-105 mb-16 shadow-xl hover:shadow-2xl"
        >
          <Mail size={20} />
          Say Hello
        </a>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-tertiary text-sm border-t border-gray-100 pt-10 max-w-4xl mx-auto">
           <div className="flex items-center gap-2">
             <MapPin size={16} />
             <span>Kuala Lumpur, Malaysia</span>
           </div>
           <p>
             © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
};