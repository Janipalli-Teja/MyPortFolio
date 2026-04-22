import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Github, ArrowUpRight, Zap, Target, Award, Briefcase, User, ChevronDown, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'commercial' | 'personal'>('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProjectId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProjectId]);

  return (
    <section id="projects" className="py-32 bg-[#0c0c0e] relative px-6 border-y border-zinc-900/50">
      {/* Subtle Section Divider Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-zinc-800/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up opacity-0">
          <h2 className="text-blue-500 font-bold tracking-tighter text-sm mb-2 uppercase">Works</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-100 mb-6 tracking-tight">Featured Projects</h3>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto">
            A curated selection of technical solutions built for clients and personal research.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          {[
            { id: 'all', label: 'All', icon: null },
            { id: 'commercial', label: 'Freelance', icon: <Briefcase size={14} /> },
            { id: 'personal', label: 'Personal', icon: <User size={14} /> }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => {
                setFilter(btn.id as any);
                setShowAll(false);
              }}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${filter === btn.id ? 'bg-zinc-800/50 text-blue-400 shadow-lg ring-1 ring-zinc-700/50' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              {btn.icon} {btn.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              className="group cursor-pointer rounded-[2rem] bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg backdrop-blur-md ${project.category === 'commercial' ? 'bg-emerald-500/90 text-white' : 'bg-blue-600/90 text-white'}`}>
                    {project.category === 'commercial' ? 'Freelance' : 'Personal'}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-black text-zinc-100 mb-2 transition-colors group-hover:text-blue-400">
                  {project.title}
                </h4>
                <p className="text-sm font-bold text-blue-500 mb-4">{project.subtitle}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-zinc-500 bg-zinc-950 px-2 py-1 rounded-md border border-white/5 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-bold text-zinc-500 bg-zinc-950 px-2 py-1 rounded-md border border-white/5 uppercase tracking-wider">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Projects */}
        {filteredProjects.length > 6 && (
          <div className="mt-20 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex flex-col items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-zinc-500 hover:text-white transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl border border-zinc-800 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all outline outline-offset-4 outline-transparent group-hover:outline-blue-500/20 ${showAll ? 'rotate-180' : ''}`}>
                <ChevronDown size={24} className="group-hover:text-blue-400 transition-colors" />
              </div>
              <span>{showAll ? 'Show Fewer' : 'Explore All Work'}</span>
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-32 p-8 md:p-16 bg-gradient-to-br from-zinc-950 to-[#0c0c0e] rounded-[3rem] text-center border border-white/5 relative overflow-hidden group/cta">
          <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover/cta:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <h5 className="text-3xl md:text-5xl font-black text-zinc-100 mb-6 tracking-tight">Ready to build something <span className="text-blue-500">extraordinary</span>?</h5>
            <p className="text-zinc-500 mb-10 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
              I'm currently seeking Full-Stack opportunities where I can contribute to high-impact teams. Let's combine our skills and build high-performance products.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-4 bg-white text-zinc-950 px-10 py-5 rounded-2xl font-black shadow-2xl hover:bg-zinc-200 transition-all uppercase text-xs tracking-widest active:scale-95"
            >
              Start A Conversation <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="absolute inset-0" 
            onClick={() => setSelectedProjectId(null)}
          ></div>
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedProjectId(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <X size={24} />
            </button>
            
            <div className="relative w-full h-64 sm:h-80 flex-shrink-0">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className={`inline-block px-3 py-1 mb-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg backdrop-blur-md ${selectedProject.category === 'commercial' ? 'bg-emerald-500/90 text-white' : 'bg-blue-600/90 text-white'}`}>
                  {selectedProject.role}
                </span>
                <h3 className="text-3xl sm:text-5xl font-black text-white mb-2">{selectedProject.title}</h3>
                <p className="text-blue-400 font-bold text-lg">{selectedProject.subtitle}</p>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-10">
              <div className="flex flex-wrap gap-4">
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-3 rounded-2xl font-black transition-all text-xs border border-white/5 uppercase tracking-[0.2em] active:scale-95">
                    <Github size={16} /> View Source
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl font-black shadow-xl shadow-blue-600/20 transition-all text-xs uppercase tracking-[0.2em] active:scale-95">
                    Live Project <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-zinc-500 mb-4">Overview</h4>
                <p className="text-zinc-300 text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5 space-y-3">
                  <div className="flex items-center gap-2 text-rose-400 font-black text-xs uppercase tracking-widest">
                    <Target size={16} /> The Challenge
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">"{selectedProject.challenge}"</p>
                </div>
                <div className={`p-6 rounded-2xl border space-y-3 ${selectedProject.category === 'commercial' ? 'bg-emerald-500/5 border-emerald-500/10' : 'bg-blue-500/5 border-blue-500/10'}`}>
                  <div className={`flex items-center gap-2 font-black text-xs uppercase tracking-widest ${selectedProject.category === 'commercial' ? 'text-emerald-500' : 'text-blue-500'}`}>
                    <Award size={16} /> The Outcome
                  </div>
                  <p className="text-sm text-zinc-200 font-medium leading-relaxed">{selectedProject.result}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                    <Zap size={18} fill="currentColor" fillOpacity="0.2" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-100">
                      Technical Implementation
                    </h5>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {selectedProject.functionalities.map((func, i) => (
                    <div key={i} className="flex items-start gap-3 group/feat">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/40"></div>
                      <span className="text-sm text-zinc-400 font-medium leading-relaxed">
                        {func}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-zinc-500 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-bold text-zinc-300 bg-zinc-900 px-3 py-1.5 rounded-lg border border-white/5 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
