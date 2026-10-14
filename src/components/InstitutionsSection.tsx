import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, Briefcase } from 'lucide-react';

const institutions = [
  {
    name: "St. Joseph's College of Engineering and Technology (SJCET) Palai",
    type: "Current Affiliation",
    role: "Associate Professor & Head of Department (AI & DS)",
    period: "Jan 2024 - Present",
    location: "Palai, Kottayam, Kerala",
    image: "/images/sjcet_campus.jpg",
    logo: "/images/sjcet_logo.png",
    description: "Leading the Department of Artificial Intelligence & Data Science, supervising APJAKTU PhD scholars, and executing CERD funded research.",
    badge: "Current Role"
  },
  {
    name: "Hindusthan Institute of Technology & Science (HITS)",
    type: "Doctoral Alma Mater",
    role: "Doctor of Philosophy (PhD in Computer Vision)",
    period: "Conferred: 2019",
    location: "Chennai, Tamil Nadu",
    image: "/images/hindustan_university.jpg",
    description: "Doctoral research in low-resolution facial recognition, multi-kernel SVMs, and advanced metaheuristic optimization algorithms.",
    badge: "PhD Conferred"
  },
  {
    name: "Anna University Chennai",
    type: "Postgraduate Alma Mater",
    role: "Master of Technology (MTech Applied Electronics)",
    period: "2010 - 2012",
    location: "Chennai, Tamil Nadu",
    image: "/images/anna_university.jpg",
    description: "Specialized in VLSI hardware design, advanced signal processing, and real-time electronic instrumentation architectures.",
    badge: "MTech Degree"
  },
  {
    name: "Musaliar College of Engineering and Technology (MCET)",
    type: "Previous Faculty Appointment",
    role: "Associate Professor, Dean Research & NBA Coordinator",
    period: "2019 - 2024",
    location: "Pathanamthitta, Kerala",
    image: "/images/mcp.png",
    logo: "/images/musaliar_logo.jpg",
    description: "Achieved NBA Accreditation for ECE department (2023-2026); orchestrated 29 SCI/Scopus publications and KSUM Idea Fest seed funding.",
    badge: "NBA Accredited"
  },
  {
    name: "Gurudeva Institute of Science and Technology (GISAT)",
    type: "Faculty Appointment",
    role: "Assistant Professor & PG Coordinator",
    period: "2012 - 2019 (7 Years)",
    location: "Kottayam, Kerala",
    image: "/images/gisat.png",
    logo: "/images/gisat.png",
    description: "Seven years of undergraduate and post-graduate teaching excellence, curriculum mentoring, and foundation research.",
    badge: "7 Years Service"
  },
  {
    name: "Mahatma Gandhi University (MGU) Kottayam",
    type: "Undergraduate Alma Mater",
    role: "Bachelor of Technology (BTech in ECE)",
    period: "2002 - 2006",
    location: "Kottayam, Kerala",
    image: "/images/mgu_campus.jpg",
    logo: "/images/mgu_logo.svg",
    description: "Undergraduate engineering degree in Electronics & Communication Engineering.",
    badge: "BTech Degree"
  }
];

export default function InstitutionsSection() {
  return (
    <section id="institutions" className="py-20 md:py-28 bg-[#ecf0f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="pill-badge mb-3">
            ACADEMIC FOOTPRINT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Institutional Affiliations
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Prestigious universities and institutions shaping Dr. Renjith Thomas's research journey and leadership roles.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutions.map((inst, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="inbio-card overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Photo Container with Inset Well */}
                <div className="p-4">
                  <div className="relative h-48 rounded-2xl bg-[#e2e8ec] overflow-hidden shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff]">
                    <img
                      src={inst.image}
                      alt={inst.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-[#ecf0f3]/95 backdrop-blur-md text-sky-800 shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff]">
                      {inst.badge}
                    </span>

                    {inst.logo && (
                      <div className="absolute bottom-3 right-3 w-12 h-12 rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center">
                        <img src={inst.logo} alt="Logo" className="max-w-full max-h-full object-contain" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-6 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 block mb-1">
                    {inst.type}
                  </span>
                  
                  <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-sky-600 transition-colors">
                    {inst.name}
                  </h3>

                  <p className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 mb-1">
                    <Briefcase size={13} className="text-sky-500 shrink-0" />
                    <span>{inst.role}</span>
                  </p>

                  <p className="text-xs text-slate-400 flex items-center gap-1.5 mb-3">
                    <Calendar size={13} className="shrink-0" />
                    <span>{inst.period}</span>
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {inst.description}
                  </p>
                </div>
              </div>

              {/* Bottom location */}
              <div className="px-6 py-4 bg-[#ecf0f3]/50 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <MapPin size={13} className="text-slate-400" />
                <span>{inst.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
