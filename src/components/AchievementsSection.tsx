import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  CheckCircle2, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { achievementsGallery, AchievementItem } from '../data/portfolioData';

const majorHonors = [
  {
    title: "EARTHDAY.ORG 'Our Power, Our Planet Stars Award 2026'",
    body: "Honored at NMACC Mumbai by EARTHDAY.ORG & Envision for patented solar clean-energy enclosure technologies; featured in Malayala Manorama.",
    tag: "International Sustainability Award"
  },
  {
    title: "5th Place Worldwide — GenAI.Works #BuildwithAI Hackathon",
    body: "Competed globally against 200 teams from 80 countries. Awarded $750 USD prize money and an NVIDIA Graphics Card.",
    tag: "Global Hackathon"
  },
  {
    title: "₹2,00,000 Seed Money — Kerala Startup Mission (KSUM)",
    body: "Secured Two Lakhs seed funding from IDEA Fest 2022 (part of 17 Lakhs allocation) for Artificial Intelligence based vehicle modification detector.",
    tag: "Government Seed Fund"
  },
  {
    title: "Ente Keralam State Award Winner",
    body: "Award collected from Chittayam Gopakumar (Deputy Speaker, Kerala Legislative Assembly), Pramod Narayan (MLA), and Dr. Divya S Iyer IAS (District Collector).",
    tag: "State Government Award"
  },
  {
    title: "₹1,00,000 ATAL AI FDP Coordinator Grant",
    body: "Awarded institutional grant from AICTE Training And Learning (ATAL) Academy to orchestrate a 6-day online Faculty Development Program.",
    tag: "AICTE ATAL Grant"
  },
  {
    title: "42 SCI / Scopus Departmental Publications in 2 Years",
    body: "Led department research output to 42 high-impact international papers during tenure as Dean Research (2021-2023).",
    tag: "Research Directorate"
  }
];

export default function AchievementsSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<AchievementItem | null>(null);
  const [galleryPage, setGalleryPage] = useState<number>(1);

  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(achievementsGallery.length / ITEMS_PER_PAGE);
  const displayedGallery = achievementsGallery.slice(
    (galleryPage - 1) * ITEMS_PER_PAGE,
    galleryPage * ITEMS_PER_PAGE
  );

  return (
    <section id="achievements" className="py-20 md:py-28 bg-[#ecf0f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="pill-badge mb-3">
            RECOGNITIONS & MILESTONES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Honors & Achievements
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            International hackathons, state government awards, funded prototyping grants, and conference paper honors.
          </p>
        </div>

        {/* 6 Key Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {majorHonors.map((honor, i) => (
            <div
              key={i}
              className="inbio-card p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#ecf0f3] text-sky-700 shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]">
                    {honor.tag}
                  </span>
                  <Trophy size={18} className="text-amber-600" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {honor.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {honor.body}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-sky-700 font-bold">
                <CheckCircle2 size={14} />
                <span>Verified Achievement</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Moments & Photo Highlights
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Photographic documentation of conference presentations, awards, and summits.
            </p>
          </div>

          {/* Gallery Pagination Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setGalleryPage(prev => Math.max(prev - 1, 1))}
              disabled={galleryPage === 1}
              className="inbio-btn p-2.5 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Previous Page"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-xs font-bold text-slate-700 px-3">
              {galleryPage} / {totalPages}
            </span>
            <button
              onClick={() => setGalleryPage(prev => Math.min(prev + 1, totalPages))}
              disabled={galleryPage === totalPages}
              className="inbio-btn p-2.5 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Next Page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Gallery Grid (Paginated, No auto-scroll) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {displayedGallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              onClick={() => setSelectedPhoto(item)}
              className="inbio-card overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              <div className="p-3">
                <div className="relative h-48 rounded-xl bg-[#e2e8ec] overflow-hidden shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 rounded-xl bg-white/90 text-slate-900 shadow-md">
                      <Maximize2 size={16} />
                    </span>
                  </div>
                  {item.badge && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#ecf0f3]/95 backdrop-blur-sm text-slate-800 shadow-sm">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>

              <div className="px-5 pb-5">
                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider block mb-1">
                  {item.year}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1 mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal for Photo Viewing */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#ecf0f3] rounded-3xl overflow-hidden max-w-2xl w-full border border-white shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white flex items-center justify-center shadow-md transition-colors"
              >
                <X size={18} />
              </button>

              <div className="max-h-[60vh] bg-[#e2e8ec] flex items-center justify-center overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ecf0f3] text-sky-700 shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]">
                    {selectedPhoto.award}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    {selectedPhoto.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
