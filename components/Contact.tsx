import React, { useState } from 'react';
import { Send, CheckCircle2, Copy, Check, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = "tejajanipalli29@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-32 bg-[#0a0a0c] text-white px-6 relative border-t border-zinc-900/50">
      {/* Deep Footer-ward Transition Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="mb-24 reveal-up opacity-0">
          <h2 className="text-blue-500 font-bold tracking-tighter text-sm mb-2 uppercase">Contact</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-100 mb-6 tracking-tight">Let's build the <span className="text-blue-500">future</span>.</h3>
          <p className="text-zinc-500 text-base md:text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            I'm currently <span className="text-zinc-100 font-bold underline decoration-blue-500/30 underline-offset-8">actively looking for new opportunities</span> and collaborations. Whether you're a recruiter or just want to discuss a potential project, feel free to reach out!
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Email Card */}
          <button
            onClick={handleCopyEmail}
            className="group w-full p-10 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] transition-all hover:border-blue-500/30 hover:bg-zinc-900/60 text-center relative overflow-hidden shadow-2xl active:scale-[0.98]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/10 transition-colors"></div>

            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto transition-all duration-300 ${copiedEmail ? 'bg-emerald-500/20 border-emerald-500/30 scale-110' : 'bg-blue-600/10 border-blue-500/20 group-hover:scale-110'}`}>
              {copiedEmail ? (
                <Check size={24} className="text-emerald-400" />
              ) : (
                <Mail size={24} className="text-blue-400" />
              )}
            </div>

            <p className="text-[11px] text-zinc-500 font-black uppercase tracking-[0.3em] mb-2">
              {copiedEmail ? 'Copied to Clipboard!' : 'Click to Copy Email'}
            </p>
            <p className={`text-xl md:text-2xl font-black transition-colors duration-300 break-words ${copiedEmail ? 'text-emerald-400' : 'text-zinc-100 group-hover:text-blue-400'}`}>
              {email}
            </p>
          </button>
        </div>

        {/* Hiring Badge */}
        <div className="mt-20 inline-flex items-center gap-3 px-6 py-3 bg-zinc-900/50 border border-white/5 rounded-full backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Available for Full-time Roles</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
