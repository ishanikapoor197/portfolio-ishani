import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { ResumeData } from '../types';

interface ProjectsProps {
  projects?: ResumeData['projects'];
}

export const Projects: React.FC<ProjectsProps> = ({ projects = [] }) => {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-emerald-500/5 blur-3xl group-hover:bg-emerald-500/10 transition-colors" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Code size={24} />
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-emerald-500 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/60 uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 mb-6">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold hover:gap-3 transition-all"
                >
                  View Project <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
