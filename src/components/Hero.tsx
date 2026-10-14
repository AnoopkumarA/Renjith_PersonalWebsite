import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  FileCheck,
  Linkedin,
  Mail,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Eye,
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#ecf0f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Typography, Bio & Inbio Tactile Widgets */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">

            {/* INBIO Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pill-badge"
            >
              <Sparkles size={13} className="text-sky-600" />
              <span>WELCOME TO MY WORLD</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Hi, I'm <br />
                <span className="text-sky-600">Dr. Renjith Thomas</span>
              </h1>

              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 min-h-[44px] flex items-center">
                <TypeAnimation
                  sequence={[
                    'PhD in Computer Vision',
                    2200,
                    'Associate Professor & HoD',
                    2200,
                    'Approved APJAKTU Research Guide',
                    2200,
                    'Prolific Innovator (19 Patents)',
                    2200,
                    'AI & Deep Learning Researcher',
                    2200,
                    'Hackathon Winner ($750 & GPU)',
                    2200
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-sky-600 font-bold"
                />
              </div>
            </motion.div>

            {/* Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl text-justify sm:text-left"
            >
              Academic leader and researcher in <strong>Computer Vision & Deep Learning</strong> with a PhD from Hindusthan Institute of Technology and Science. Currently serving as <strong>Head of the Department</strong> (AI & DS) at St. Joseph's College of Engineering and Technology, Palai. Approved APJAKTU Research Supervisor guiding 3 doctoral scholars with 19 published patents.
            </motion.p>

            {/* Inbio Dual-Widget Row: FIND WITH ME + BEST SKILL ON */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full pt-4"
            >
              {/* FIND WITH ME */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  FIND WITH ME
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://scholar.google.com/citations?user=oCnr0xsAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inbio-btn w-12 h-12 flex items-center justify-center text-slate-700 hover:text-sky-600"
                    title="Google Scholar (206+ Citations)"
                  >
                    <GraduationCap size={20} />
                  </a>
                  <a
                    href="https://www.scopus.com/authid/detail.uri?authorId=57192674628"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inbio-btn w-12 h-12 flex items-center justify-center text-slate-700 hover:text-sky-600"
                    title="Scopus Author Profile"
                  >
                    <BookOpen size={20} />
                  </a>
                  <a
                    href="https://orcid.org/0000-0002-1038-9596"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inbio-btn w-12 h-12 flex items-center justify-center text-slate-700 hover:text-sky-600"
                    title="ORCID ID"
                  >
                    <FileCheck size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dr-renjith-thomas-a17bb610a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inbio-btn w-12 h-12 flex items-center justify-center text-slate-700 hover:text-sky-600"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* CORE EXPERTISE */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  BEST SKILL ON
                </span>
                <div className="flex items-center gap-3">
                  <div
                    className="inbio-btn w-12 h-12 flex items-center justify-center text-sky-600"
                    title="Computer Vision & OpenCV"
                  >
                    <Eye size={20} />
                  </div>
                  <div
                    className="inbio-btn w-12 h-12 flex items-center justify-center text-blue-600"
                    title="Deep Learning & Neural Networks"
                  >
                    <Cpu size={20} />
                  </div>
                  <div
                    className="inbio-btn w-12 h-12 flex items-center justify-center text-emerald-600"
                    title="Medical AI & Imaging"
                  >
                    <Activity size={20} />
                  </div>
                  <div
                    className="inbio-btn w-12 h-12 flex items-center justify-center text-purple-600"
                    title="19 Patents & Hardware Design"
                  >
                    <Layers size={20} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-3"
            >
              <a
                href="#publications"
                className="inbio-btn px-7 py-4 font-bold text-xs uppercase tracking-wider text-sky-700 hover:text-sky-800 flex items-center gap-2"
              >
                <span>Explore 19 Patents & Research</span>
                <ExternalLink size={15} />
              </a>
              <a
                href="#contact"
                className="inbio-btn px-7 py-4 font-bold text-xs uppercase tracking-wider text-slate-700 hover:text-sky-600 flex items-center gap-2"
              >
                <span>Get In Touch</span>
                <Mail size={15} />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Clean INBIO Portrait Card (No broken frames, No floating emojis) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md"
            >
              <div className="double-bezel">
                <div className="double-bezel-inner relative bg-gradient-to-b from-[#edf2f7] via-[#e2e8ec] to-[#d6dfe8] aspect-[4/5] overflow-hidden flex items-end justify-center">
                  {/* Subtle soft studio lighting behind the cutout */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,255,255,0.9),transparent_75%)] pointer-events-none" />

                  <img
                    src="/images/RT_hero_cutout.png"
                    alt="Dr. Renjith Thomas"
                    className="w-full h-full object-cover object-bottom hover:scale-[1.02] transition-transform duration-500 relative z-10"
                  />

                  {/* Clean bottom badge built directly into the container */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg z-20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-extrabold text-slate-900 text-sm tracking-tight">
                          Dr. Renjith Thomas
                        </h3>
                        <p className="text-xs text-sky-700 font-semibold mt-0.5">
                          HoD & Associate Professor • SJCET Palai
                        </p>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                        <ShieldCheck size={18} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-strip with verified credentials */}
                <div className="mt-3.5 px-2 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1.5 text-sky-700">
                    <GraduationCap size={14} />
                    <span>PhD in Computer Vision</span>
                  </span>
                  <span className="text-slate-400">
                    APJAKTU Supervisor
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
