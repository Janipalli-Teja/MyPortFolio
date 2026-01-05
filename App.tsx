
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Projects from './components/Projects.tsx';
import Roadmap from './components/Roadmap.tsx';
import Contact from './components/Contact.tsx';
import TechStack from './components/TechStack.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TechStack />
        <Projects />
        <Roadmap />
        <Contact />
      </main>

      <footer className="py-20 border-t border-zinc-900 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-100 font-black text-[10px]">
              JT
            </div>
            <p className="text-zinc-500 text-sm font-medium tracking-tight">
              © {new Date().getFullYear()} Janipalli Teja.
            </p>
          </div>

          <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Works</a>
            <a href="#roadmap" className="hover:text-blue-500 transition-colors">Journey</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
