import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Github, ArrowUpRight, Zap, Target, Award, Briefcase, User, ChevronDown } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'commercial' | 'personal'>('all');
  const [showAll, setShowAll] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-32 bg-[#0c0c0e] relative px-6 border-y border-zinc-900/50">
      {/* Subtle Section Divider Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-zinc-800/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 reveal-up opacity-0">
          <h2 className="text-blue-500 font-bold tracking-tighter text-sm mb-2 uppercase">Works</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-100 mb-6 tracking-tight">Featured Projects</h3>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto">
            A curated selection of technical solutions built for clients and personal research.
          </p>
        </div>

        <div className="flex justify-center mb-24">
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
                setExpandedId(null);
              }}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${filter === btn.id ? 'bg-zinc-800/50 text-blue-400 shadow-lg ring-1 ring-zinc-700/50' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              {btn.icon} {btn.label}
            </button>
          ))}
        </div>

        <div className="space-y-32">
          {displayProjects.map((project, index) => {
            const isExpanded = expandedId === project.id;

            return (
              <div
                key={project.id}
                className="group/project relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/10 border border-white/5 hover:border-blue-500/20 transition-all duration-500 hover:bg-zinc-900/20"
              >
                {/* Visual Connector / Index Number */}
                <div className="absolute top-8 left-8 lg:-left-6 lg:top-1/2 lg:-translate-y-1/2 flex flex-col items-center gap-4">
                  <span className="text-5xl lg:text-7xl font-black text-white/5 select-none transition-colors group-hover/project:text-blue-500/10">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-transparent via-zinc-800 to-transparent"></div>
                </div>

                {/* Left Side: Media */}
                <div className="lg:col-span-5 w-full space-y-4">
                  <div
                    onClick={() => toggleExpand(project.id)}
                    className="relative overflow-hidden rounded-[2rem] bg-zinc-950 aspect-video lg:aspect-[4/3] shadow-2xl border border-zinc-800/50 cursor-pointer group/img"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform scale-100 group-hover/img:scale-110 transition-transform duration-1000 brightness-75 group-hover/img:brightness-100"
                    />

                    {/* Tags on Image */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg backdrop-blur-md ${project.category === 'commercial' ? 'bg-emerald-500/90 text-white' : 'bg-blue-600/90 text-white'}`}>
                        {project.category === 'commercial' ? 'Freelance' : 'Personal'}
                      </span>
                    </div>

                    {/* Desktop Hover Overlay */}
                    <div className="hidden lg:flex absolute inset-0 bg-zinc-950/80 items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                      <div className="flex flex-col gap-3 items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-600/40">
                          <ArrowUpRight size={20} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">Click for Details</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-zinc-500 bg-zinc-950 px-3 py-1 rounded-lg border border-white/5 uppercase tracking-wider">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${project.category === 'commercial' ? 'text-emerald-500' : 'text-blue-500'}`}>
                        {project.role}
                      </span>
                    </div>
                    <h4 className="text-3xl md:text-5xl font-black text-zinc-100 mb-2 tracking-tight transition-colors group-hover/project:text-white">
                      {project.title}
                    </h4>
                    <p className="text-blue-500 font-bold text-base md:text-lg mb-4">{project.subtitle}</p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-2xl font-black transition-all text-[11px] border border-white/5 uppercase tracking-[0.2em] active:scale-95">
                          <Github size={14} /> Source
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl font-black shadow-xl shadow-blue-600/20 transition-all text-[11px] uppercase tracking-[0.2em] active:scale-95">
                          Live Demo <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>

                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Expandable Meta Info */}
                  <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[800px] opacity-100 mt-8' : 'max-h-0 opacity-0 md:max-h-[800px] md:opacity-100 md:mt-8'}`}>
                    <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mb-8">
                      <div className="p-5 bg-zinc-950/50 rounded-2xl border border-white/5 space-y-2">
                        <div className="flex items-center gap-2 text-rose-400 font-black text-[10px] uppercase tracking-widest">
                          <Target size={12} /> Challenge
                        </div>
                        <p className="text-[13px] text-zinc-400">"{project.challenge}"</p>
                      </div>
                      <div className={`p-5 rounded-2xl border space-y-2 ${project.category === 'commercial' ? 'bg-emerald-500/5 border-emerald-500/10' : 'bg-blue-500/5 border-blue-500/10'}`}>
                        <div className={`flex items-center gap-2 font-black text-[10px] uppercase tracking-widest ${project.category === 'commercial' ? 'text-emerald-500' : 'text-blue-500'}`}>
                          <Award size={12} /> Outcome
                        </div>
                        <p className="text-[13px] text-zinc-200 font-medium leading-relaxed">{project.result}</p>
                      </div>
                    </div>

                    <div className="space-y-8 pt-6 border-t border-white/5">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                            <Zap size={18} fill="currentColor" fillOpacity="0.2" />
                          </div>
                          <div>
                            <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-100">
                              Technical Implementation
                            </h5>
                            <div className="h-0.5 w-8 bg-blue-500/50 mt-1 rounded-full"></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                          {project.functionalities.map((func, i) => (
                            <div key={i} className="flex items-start gap-3 group/feat">
                              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover/feat:bg-blue-500 transition-colors"></div>
                              <span className="text-[13px] text-zinc-400 font-medium leading-relaxed group-hover/feat:text-zinc-200 transition-colors">
                                {func}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>


                    </div>
                  </div>

                  {/* Toggle Indicator for Mobile */}
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="mt-6 lg:hidden flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-500"
                  >
                    {isExpanded ? 'Hide Details' : 'View Project Results'}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Connective Line to Next Project */}
                {index < displayProjects.length - 1 && (
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 hidden lg:block">
                    <div className="h-16 w-px bg-gradient-to-b from-zinc-800 to-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Show More Projects */}
        {filteredProjects.length > 3 && (
          <div className="mt-40 flex justify-center">
            <button
              onClick={() => {
                setShowAll(!showAll);
                setExpandedId(null);
              }}
              className="group flex flex-col items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-zinc-500 hover:text-white transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl border border-zinc-800 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all outline outline-offset-4 outline-transparent group-hover:outline-blue-500/20 ${showAll ? 'rotate-180' : ''}`}>
                <ChevronDown size={24} className="group-hover:text-blue-400 transition-colors" />
              </div>
              <span>{showAll ? 'Show Fewer' : 'Explore All Work'}</span>
            </button>
          </div>
        )}

        <div className="mt-40 p-8 md:p-16 bg-gradient-to-br from-zinc-950 to-[#0c0c0e] rounded-[3rem] text-center border border-white/5 relative overflow-hidden group/cta">
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
    </section>
  );
};

export default Projects;
