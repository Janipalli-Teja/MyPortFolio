
import React, { useState } from 'react';
import { Send, CheckCircle2, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0c] text-white px-6 relative border-t border-zinc-900/50">
      {/* Deep Footer-ward Transition Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <h2 className="text-blue-500 font-bold tracking-tighter text-sm mb-2 uppercase italic">Contact</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-100 mb-6">Let's work together</h3>
          <p className="text-zinc-400 text-base md:text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl flex items-center justify-center">
                <Send size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Direct Email</p>
                <p className="text-lg">tejajanipalli29@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl flex items-center justify-center">
                <Phone size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Phone</p>
                <p className="text-lg">+91-8143561977</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-950/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-zinc-800/50 relative overflow-hidden shadow-2xl">
          {submitted ? (
            <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-zinc-400">I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full bg-zinc-900/30 border border-zinc-800/30 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 text-zinc-100 placeholder:text-zinc-600 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  className="w-full bg-zinc-900/30 border border-zinc-800/30 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 text-zinc-100 placeholder:text-zinc-600 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="What's on your mind?"
                  className="w-full bg-zinc-900/30 border border-zinc-800/30 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 text-zinc-100 placeholder:text-zinc-600 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group active:scale-95"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
