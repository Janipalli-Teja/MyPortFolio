import React, { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  invert?: boolean;
  color: string;
}

interface Category {
  title: string;
  emoji: string;
  accentColor: string;
  skills: Skill[];
}

const CATEGORIES: Category[] = [
  {
    title: 'Languages',
    emoji: '⌨️',
    accentColor: '#f59e0b',
    skills: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: '#00599C' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
    ]
  },
  {
    title: 'Frameworks',
    emoji: '🏗️',
    accentColor: '#3b82f6',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#68A063' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true, color: '#ffffff' },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true, color: '#ffffff' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    ]
  },
  {
    title: 'Databases',
    emoji: '🗄️',
    accentColor: '#10b981',
    skills: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D' },
    ]
  },
  {
    title: 'Cloud & DevOps',
    emoji: '☁️',
    accentColor: '#f97316',
    skills: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: '#FF9900' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05033' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: '#FFCA28' },
      { name: 'Cloudinary', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudinary/cloudinary-original.svg', color: '#3448C5' },
    ]
  },
  {
    title: 'Tools',
    emoji: '🛠️',
    accentColor: '#8b5cf6',
    skills: [
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', color: '#FF6C37' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true, color: '#ffffff' },
    ]
  },
  {
    title: 'AI / ML',
    emoji: '🤖',
    accentColor: '#ec4899',
    skills: [
      { name: 'LLMs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg', color: '#4285F4' },
      { name: 'RAG', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg', invert: true, color: '#ffffff' },
      { name: 'Prompt Eng.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg', color: '#F37726' },
    ]
  },
];

const TechStack: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div id="skills" className="py-32 bg-zinc-950 border-y border-zinc-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal-up opacity-0">
          <h2 className="text-blue-500 font-bold tracking-tighter text-sm mb-2 uppercase">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-100 mb-6 tracking-tight">Technical Stack</h3>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to build high-performance applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {CATEGORIES.map((category, ci) => (
            <div
              key={ci}
              className="reveal-up opacity-0 group relative p-6 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all duration-500"
              style={{ animationDelay: `${ci * 80}ms` }}
            >
              {/* Category accent glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                style={{ background: category.accentColor }}
              />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg border border-white/5"
                  style={{ background: `${category.accentColor}15` }}
                >
                  {category.emoji}
                </div>
                <div>
                  <h4 className="text-sm font-black text-zinc-100 uppercase tracking-widest">{category.title}</h4>
                  <div className="h-0.5 w-6 mt-1 rounded-full" style={{ background: category.accentColor }} />
                </div>
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, si) => (
                  <div
                    key={si}
                    onMouseEnter={() => setHoveredSkill(`${ci}-${si}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative flex items-center gap-2.5 px-3 py-2.5 rounded-2xl bg-zinc-950/60 border border-white/5 hover:border-white/15 transition-all duration-300 cursor-default group/skill hover:-translate-y-0.5"
                    style={{
                      boxShadow: hoveredSkill === `${ci}-${si}` ? `0 0 20px -8px ${skill.color}60` : 'none'
                    }}
                  >
                    <div className="w-5 h-5 flex-shrink-0">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-full h-full object-contain transition-all duration-300 ${skill.invert ? 'invert brightness-200' : ''} group-hover/skill:scale-110`}
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-bold text-zinc-400 group-hover/skill:text-zinc-200 transition-colors whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Concepts strip */}
        <div className="mt-10 reveal-up opacity-0">
          <div className="p-6 rounded-3xl bg-zinc-900/30 border border-white/5 flex flex-wrap items-center gap-4">
            <span className="text-xs font-black text-zinc-500 uppercase tracking-widest whitespace-nowrap">Core Concepts</span>
            <div className="w-px h-4 bg-zinc-800 hidden sm:block" />
            {['Data Structures', 'System Design', 'API Design', 'Caching', 'Async Processing', 'Microservices'].map((concept, i) => (
              <span
                key={i}
                className="text-xs font-bold text-zinc-400 bg-zinc-950/50 px-3 py-1.5 rounded-xl border border-zinc-800 hover:text-white hover:border-zinc-600 transition-colors cursor-default"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
