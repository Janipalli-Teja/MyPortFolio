
import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolling, setIsScrolling] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  // Create refs for each nav item to measure them accurately
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Works' },
    { id: 'roadmap', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  // Update pill position whenever activeSection changes
  useEffect(() => {
    const activeElement = navRefs.current[activeSection];
    if (activeElement) {
      setPillStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    }
  }, [activeSection]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // More aggressive margin to center detection
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Don't let the observer change the state if we are currently scrolling programmatically
      if (isScrolling) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isScrolling]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsScrolling(true);
      setActiveSection(id); // Immediate visual feedback

      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Keep it locked until the scroll animation is likely done
      // and the observer is no longer being triggered by the movement
      setTimeout(() => setIsScrolling(false), 850);
    }
  };

  const activeLabel = navItems.find(item => item.id === activeSection)?.label || 'About';

  return (
    <>
      {/* Top Gradient Fade to help Navbar focus */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-transparent z-[55] pointer-events-none"></div>

      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-5xl group/nav">
        <nav className="bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-full px-3 md:px-6 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex justify-between items-center transition-all hover:border-blue-500/30">

          {/* Left: Logo */}
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="flex items-center gap-2 flex-shrink-0 active:scale-90 transition-transform"
          >
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-xs shadow-lg shadow-blue-500/20">
              JT
            </div>
          </a>

          {/* Center: Desktop Nav & Mobile Label */}
          <div className="flex-grow flex justify-center px-4 overflow-hidden relative">

            {/* Mobile Label */}
            <div
              key={activeLabel}
              className="md:hidden animate-in fade-in slide-in-from-bottom-2 zoom-in-95 duration-500 ease-out"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
                {activeLabel}
              </span>
            </div>

            {/* Desktop Nav with Pixel-Perfect Sliding Indicator */}
            <div className="hidden md:flex relative items-center bg-zinc-800/40 p-1 rounded-full border border-zinc-800/50">
              {/* The Dynamic Sliding Pill */}
              <div
                className="absolute h-[calc(100%-8px)] bg-zinc-100 rounded-full shadow-lg transition-all duration-500 cubic-bezier(0.19, 1, 0.22, 1)"
                style={{
                  width: `${pillStyle.width}px`,
                  transform: `translateX(${pillStyle.left - 4}px)`, // -4 to account for parent padding
                }}
              />

              {navItems.map((item) => (
                <a
                  key={item.id}
                  // Fixed: Ensure the callback ref returns void to satisfy TypeScript's Ref definition.
                  ref={(el) => { navRefs.current[item.id] = el; }}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative z-10 px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-center transition-colors duration-500 active:scale-95 whitespace-nowrap ${activeSection === item.id
                    ? 'text-zinc-900'
                    : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex-shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="bg-zinc-100 text-zinc-950 px-4 md:px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5 active:scale-95 whitespace-nowrap"
            >
              Let's Talk
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
