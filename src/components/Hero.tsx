import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import { ResumeData } from '../types';

interface HeroProps {
  basics?: ResumeData['basics'];
}

export const Hero: React.FC<HeroProps> = ({ basics }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-mono uppercase tracking-widest"
        >
          Available for Opportunities
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">
          {basics?.name.split(' ')[0] || 'Ishani'} <span className="text-emerald-500">{basics?.name.split(' ')[1] || 'Kapoor'}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto">
          {basics?.title || 'Full-stack Developer | BIT\'24 | KIIT\'26'}. Crafting high-performance web experiences with modern technologies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-white transition-colors"
          >
            View Experience
            <ArrowDown size={18} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('?view=resume', '_blank')}
            className="w-full sm:w-auto px-8 py-4 border border-white/10 bg-white/5 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            Download Resume
            <Download size={18} />
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-emerald-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
