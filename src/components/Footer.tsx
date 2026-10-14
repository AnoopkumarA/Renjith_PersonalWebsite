import { ArrowUp, Heart, GraduationCap, BookOpen, Linkedin, FileCheck } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#ecf0f3] border-t border-slate-200/70 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-200/70">
          
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl inbio-btn flex items-center justify-center text-sky-600 font-black text-base">
                RT
              </div>
              <span className="font-extrabold text-slate-900 text-lg">
                Dr. Renjith Thomas
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-md leading-relaxed">
              PhD in Computer Vision • HoD & Associate Professor (AI & DS) at St. Joseph's College of Engineering and Technology, Palai. Approved APJAKTU Research Guide.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#home" className="hover:text-sky-600 transition-colors">Home</a>
            <a href="#what-i-do" className="hover:text-sky-600 transition-colors">What I Do</a>
            <a href="#resume" className="hover:text-sky-600 transition-colors">Resume</a>
            <a href="#publications" className="hover:text-sky-600 transition-colors">Patents & Publications</a>
            <a href="#achievements" className="hover:text-sky-600 transition-colors">Achievements</a>
            <a href="#institutions" className="hover:text-sky-600 transition-colors">Institutions</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
          </div>

          {/* Right: Back to top */}
          <button
            onClick={scrollToTop}
            className="w-11 h-11 inbio-btn text-slate-700 hover:text-sky-600 flex items-center justify-center transition-all duration-200"
            title="Back to Top"
          >
            <ArrowUp size={18} />
          </button>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Dr. Renjith Thomas. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="https://scholar.google.com/citations?user=oCnr0xsAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-600 transition-colors"
            >
              Google Scholar
            </a>
            <span>•</span>
            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=57192674628"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-600 transition-colors"
            >
              Scopus
            </a>
            <span>•</span>
            <a
              href="https://orcid.org/0000-0002-1038-9596"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-600 transition-colors"
            >
              ORCID
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
