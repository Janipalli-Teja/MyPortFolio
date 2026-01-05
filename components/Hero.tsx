
import React from 'react';
import { PROFILE } from '../constants';
import { Github, Linkedin, Mail, X, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const avatarUrl = PROFILE.avatar;

  const techStack = [
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      pos: 'top-[-8%] left-[5%]',
      delay: '0s'
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      pos: 'top-[-8%] right-[5%]',
      delay: '0.7s'
    },
    {
      name: 'Express',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      pos: 'top-[40%] right-[-12%]',
      delay: '1.4s'
    },
    {
      name: 'Postman',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
      pos: 'bottom-[5%] right-[5%]',
      delay: '1.8s'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      pos: 'top-[40%] left-[-12%]',
      delay: '2.1s'
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      pos: 'bottom-[5%] left-[5%]',
      delay: '2.8s'
    },
  ];

  return (
    <section id="about" className="pt-40 pb-24 px-6 overflow-hidden relative min-h-screen flex items-center bg-zinc-950">
      {/* Deep Background decorative orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse transition-opacity duration-1000"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 transition-opacity duration-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[160px] -z-10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full relative z-10">
        <div className="order-2 md:order-1">
          <div className="reveal-up opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-500/20 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Open to New Opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-zinc-100 mb-6 leading-[0.9] tracking-tighter">
            <div className="reveal-up opacity-0 [animation-delay:200ms] text-zinc-400/80 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">I'm {PROFILE.name.split(' ')[0]}</div>
            <div className="reveal-up opacity-0 [animation-delay:400ms] text-blue-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)] mt-1">{PROFILE.name.split(' ')[1]}</div>
          </h1>

          <p className="reveal-up opacity-0 [animation-delay:600ms] text-lg text-zinc-400 mb-10 leading-relaxed max-w-lg font-medium">
            {PROFILE.bio}
          </p>

          <div className="reveal-up opacity-0 [animation-delay:800ms] flex flex-wrap gap-4 items-center">
            {/* Resume Download Button */}
            {PROFILE.resumeUrl && (
              <a
                href={PROFILE.resumeUrl}
                download="Janipalli_Teja_Resume.pdf"
                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-zinc-950 font-black uppercase text-[11px] tracking-[0.2em] rounded-2xl transition-all hover:bg-blue-600 hover:text-white shadow-xl shadow-white/5 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-3">
                  <FileText size={18} />
                  Download CV
                </span>
              </a>
            )}

            <div className="flex gap-4">
              {[
                { icon: <Github size={22} />, url: PROFILE.socials.github, hover: 'hover:text-white hover:border-white/20 hover:bg-white/5' },
                { icon: <X size={22} />, url: PROFILE.socials.twitter, hover: 'hover:text-white hover:border-white/20 hover:bg-white/5' },
                { icon: <Linkedin size={22} />, url: PROFILE.socials.linkedin, hover: 'hover:text-blue-500 hover:border-blue-500/20 hover:bg-blue-500/5' },
                { icon: <Mail size={22} />, url: PROFILE.socials.email, hover: 'hover:text-emerald-400 hover:border-emerald-400/20 hover:bg-emerald-400/5' },
              ].map((social, idx) => social.url && (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener"
                  className={`p-4 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-xl transition-all hover:-translate-y-2 text-zinc-400 ${social.hover}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center items-center relative min-h-[300px] md:min-h-[550px]">
          <div className="relative">
            {/* Ambient Glow behind image */}
            <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full scale-75 animate-pulse"></div>

            <div className="relative z-20">
              <div className="w-64 h-64 md:w-[28rem] md:h-[28rem] overflow-hidden rounded-[3rem] md:rounded-[5rem] shadow-[0_32px_80px_rgba(0,0,0,0.8)] border-8 border-zinc-900 bg-zinc-800 transition-transform duration-500">
                <img
                  src={avatarUrl}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
            </div>

            <div className="absolute inset-0 z-30 pointer-events-none">
              <div className="absolute inset-2 md:-inset-4">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className={`absolute ${tech.pos} floating-icon pointer-events-auto`}
                    style={{ animationDelay: tech.delay }}
                  >
                    <div
                      className="w-14 h-14 md:w-20 md:h-20 bg-zinc-950/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/5 flex items-center justify-center p-2.5 hover:scale-110 transition-all duration-300 cursor-help group"
                      title={tech.name}
                      style={{
                        boxShadow: `0 0 20px -10px ${tech.name === 'React' ? '#61dafb' :
                          tech.name === 'Node.js' ? '#68a063' :
                            tech.name === 'MongoDB' ? '#47a248' :
                              tech.name === 'TypeScript' ? '#3178c6' :
                                tech.name === 'Express' ? '#ffffff' :
                                  tech.name === 'Postman' ? '#FF6C37' :
                                    '#ffffff'
                          }`
                      }}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className={`w-full h-full object-contain filter group-hover:brightness-125 transition-all ${tech.name === 'Express' ? 'invert brightness-200' : ''}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
