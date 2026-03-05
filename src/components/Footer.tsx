import React from 'react';
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-white/60 mb-8 max-w-md">
              Currently open to full-stack development roles and collaborations. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:kapoorishani98@gmail.com" 
                className="flex items-center gap-4 text-white/80 hover:text-emerald-400 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-emerald-500/10 transition-colors">
                  <Mail size={20} />
                </div>
                kapoorishani98@gmail.com
              </a>
              
              <div className="flex items-center gap-4 text-white/80">
                <div className="p-3 rounded-xl bg-white/5">
                  <MapPin size={20} />
                </div>
                Bhubaneswar, Odisha India
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/ishani-kapoor-3bb790236" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all group"
              >
                <Linkedin size={20} />
                LinkedIn
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-sm font-mono">
          <p>© 2026 Ishani Kapoor. All rights reserved.</p>
          <p>Built with React & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};
