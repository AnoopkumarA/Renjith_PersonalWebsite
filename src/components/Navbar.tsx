import { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "What I Do", href: "#what-i-do" },
    { label: "Resume", href: "#resume" },
    { label: "Patents & Research", href: "#publications" },
    { label: "Achievements", href: "#achievements" },
    { label: "Institutions", href: "#institutions" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'bg-[#ecf0f3]/95 backdrop-blur-xl border border-white/90 shadow-[8px_8px_20px_#cbd4e1,-8px_-8px_20px_#ffffff] py-3 px-5 sm:px-6' 
            : 'bg-[#ecf0f3]/85 backdrop-blur-md border border-white/80 shadow-[5px_5px_14px_#d1d9e6,-5px_-5px_14px_#ffffff] py-3.5 px-5 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl inbio-btn flex items-center justify-center text-sky-600 font-black text-sm group-hover:scale-105 transition-transform shrink-0">
              RT
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 tracking-tight text-sm sm:text-base group-hover:text-sky-600 transition-colors">
                Dr. Renjith Thomas
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-sky-600 tracking-wider uppercase -mt-0.5">
                PhD in Computer Vision
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 text-xs xl:text-sm font-bold tracking-wide text-slate-600 hover:text-sky-600 rounded-xl hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Download CV */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalData.cvUrl}
              download="CV_Dr_Renjith_Thomas.pdf"
              className="inbio-btn px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-sky-700 hover:text-sky-800 flex items-center gap-2 active:scale-95 transition-all shadow-sm"
            >
              <Download size={15} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={personalData.cvUrl}
              download="CV_Dr_Renjith_Thomas.pdf"
              className="sm:hidden inbio-btn w-10 h-10 flex items-center justify-center text-sky-600"
              title="Download CV"
            >
              <Download size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inbio-btn w-10 h-10 flex items-center justify-center text-slate-700 hover:text-sky-600 active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto inbio-card p-4 shadow-xl"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-700 hover:text-sky-600 hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] text-sm font-semibold transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-slate-200/60">
                <a
                  href={personalData.cvUrl}
                  download="CV_Dr_Renjith_Thomas.pdf"
                  className="inbio-btn w-full flex items-center justify-center gap-2 py-3.5 text-xs font-extrabold uppercase tracking-wider text-sky-700"
                >
                  <Download size={16} />
                  <span>Download Full CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
