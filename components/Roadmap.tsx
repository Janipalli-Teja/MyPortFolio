
import React from 'react';
import { ROADMAP } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-32 px-6 bg-zinc-950 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-blue-500 font-bold tracking-tighter text-sm mb-2 uppercase italic">Timeline</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-100 mb-4">My Journey</h3>
          <p className="text-zinc-500 text-base md:text-lg">A timeline of my professional and educational growth</p>
        </div>

        <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-0 pb-8 pl-8 md:pl-16">
          {ROADMAP.map((item) => (
            <div
              key={item.id}
              className="relative mb-12 w-full"
            >
              <div className="absolute top-0 -left-[calc(2rem+1px)] md:-left-[calc(4rem+1px)] -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-zinc-950 border-2 md:border-4 border-blue-600 rounded-full z-10 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                {item.type === 'job' ? <Briefcase size={10} className="text-blue-400" /> : <GraduationCap size={10} className="text-blue-400" />}
              </div>

              <div className="w-full bg-zinc-900/30 backdrop-blur-md p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-zinc-800/50 hover:border-blue-600/50 transition-all hover:shadow-2xl hover:shadow-blue-600/5 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/10 transition-colors"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full border border-blue-400/20 w-fit">
                    {item.period}
                  </span>
                  <div className="hidden md:block p-2 bg-zinc-800/50 rounded-lg text-blue-400 border border-zinc-700/50">
                    {item.type === 'job' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                  </div>
                </div>

                <h3 className="text-lg md:text-2xl font-black text-zinc-100 leading-tight">{item.title}</h3>
                <p className="text-zinc-400 font-bold mb-3 mt-1 text-xs md:text-base">{item.organization}</p>
                <p className="text-zinc-500 text-[13px] md:text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
