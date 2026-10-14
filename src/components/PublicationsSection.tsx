import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, 
  BookOpen, 
  FileText, 
  Bookmark, 
  ExternalLink, 
  Calendar, 
  ShieldCheck, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { 
  patentsData, 
  conferencesData, 
  journalsData, 
  booksData,
  PatentItem,
  PublicationItem
} from '../data/portfolioData';

type PublicationTab = 'patents' | 'conferences' | 'journals' | 'books';

const ITEMS_PER_PAGE = 6;

export default function PublicationsSection() {
  const [activeTab, setActiveTab] = useState<PublicationTab>('patents');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Switch tab and reset page
  const handleTabChange = (tab: PublicationTab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  // Get current dataset
  let currentList: (PatentItem | PublicationItem)[] = [];
  if (activeTab === 'patents') currentList = patentsData;
  else if (activeTab === 'conferences') currentList = conferencesData;
  else if (activeTab === 'journals') currentList = journalsData;
  else if (activeTab === 'books') currentList = booksData;

  const totalPages = Math.ceil(currentList.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = currentList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const tabs = [
    { key: 'patents' as PublicationTab, label: 'Patents & Inventions', count: patentsData.length, icon: Lightbulb },
    { key: 'conferences' as PublicationTab, label: 'Conference Papers', count: conferencesData.length, icon: FileText },
    { key: 'journals' as PublicationTab, label: 'Journal Articles', count: journalsData.length, icon: BookOpen },
    { key: 'books' as PublicationTab, label: 'Books & Proceedings', count: booksData.length, icon: Bookmark }
  ];

  return (
    <section id="publications" className="py-20 md:py-28 bg-[#ecf0f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="pill-badge mb-3">
            RESEARCH & INTELLECTUAL PROPERTY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Patents & Publications
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            16 registered patents, 18 IEEE international conference publications, and 4 high-impact SCIE & Scopus journals.
          </p>
        </div>

        {/* Tab Buttons (Page-based, No auto-scroll) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-2 rounded-2xl bg-[#ecf0f3] shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff] overflow-x-auto max-w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-[4px_4px_10px_rgba(2,132,199,0.35)]'
                      : 'text-slate-600 hover:text-sky-600'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Information Badge */}
        <div className="flex items-center justify-between mb-8 px-2">
          <div className="text-xs sm:text-sm text-slate-500 font-medium">
            Showing <strong className="text-slate-900">{startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, currentList.length)}</strong> of <strong className="text-slate-900">{currentList.length}</strong> items
          </div>
          <div className="text-xs text-sky-700 bg-[#ecf0f3] px-3.5 py-1.5 rounded-full font-bold shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff]">
            Page {currentPage} of {totalPages || 1}
          </div>
        </div>

        {/* Content Grid (6 Items per page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[460px]">
          <AnimatePresence mode="wait">
            {activeTab === 'patents' && (
              <>
                {(paginatedItems as PatentItem[]).map((patent, index) => (
                  <motion.div
                    key={patent.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    className="inbio-card p-7 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-start justify-between gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#ecf0f3] text-amber-700 shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]">
                          Patent #{patent.id}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#ecf0f3] text-sky-700 shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff]">
                          {patent.status}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3">
                        {patent.title}
                      </h3>

                      <div className="space-y-2 text-xs text-slate-600 mb-4">
                        <p className="flex items-center gap-1.5 text-sky-700 font-semibold">
                          <ShieldCheck size={14} className="text-sky-600" />
                          <span>{patent.office}</span>
                        </p>
                        <p className="font-mono text-[11px] text-slate-700 bg-[#ecf0f3] p-2.5 rounded-xl shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]">
                          {patent.applicationNo}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1 text-slate-500">
                        <Calendar size={12} />
                        {patent.pubDate}
                      </span>
                      <span className="font-semibold text-slate-700 bg-slate-200/60 px-2 py-0.5 rounded">
                        {patent.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </>
            )}

            {activeTab === 'conferences' && (
              <>
                {(paginatedItems as PublicationItem[]).map((pub, index) => (
                  <motion.div
                    key={pub.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    className="inbio-card p-7 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#ecf0f3] text-sky-700 shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff]">
                          {pub.indexType || 'IEEE Scopus'}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          {pub.year}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 leading-snug mb-3">
                        {pub.title}
                      </h3>

                      <p className="text-xs text-slate-500 font-medium mb-2">
                        {pub.authors}
                      </p>

                      <p className="text-xs text-sky-800 font-medium mb-4 italic">
                        {pub.venue}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-mono text-[11px]">
                        {pub.volumePages || `Year ${pub.year}`}
                      </span>
                      {pub.doi ? (
                        <a
                          href={pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 font-semibold"
                        >
                          <span>View DOI</span>
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-slate-400 font-medium">IEEE Published</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </>
            )}

            {activeTab === 'journals' && (
              <>
                {(paginatedItems as PublicationItem[]).map((journal, index) => (
                  <motion.div
                    key={journal.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    className="inbio-card p-7 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {journal.indexType}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          {journal.year}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 leading-snug mb-3">
                        {journal.title}
                      </h3>

                      <p className="text-xs text-slate-500 mb-2">
                        {journal.authors}
                      </p>

                      <div className="p-3.5 rounded-xl bg-[#ecf0f3] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] mb-4 text-xs space-y-1">
                        <p className="font-semibold text-slate-800">{journal.venue}</p>
                        <p className="text-slate-500">Publisher: {journal.publisher}</p>
                        {journal.volumePages && (
                          <p className="font-mono text-slate-700 text-[11px]">{journal.volumePages}</p>
                        )}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                      <span className="text-emerald-800 font-bold">{journal.indexType || 'SCIE / Scopus Indexed'}</span>
                      {journal.doi && (
                        <a
                          href={journal.doi.startsWith('http') ? journal.doi : `https://doi.org/${journal.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 font-semibold"
                        >
                          <span>Article DOI</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </>
            )}

            {activeTab === 'books' && (
              <>
                {(paginatedItems as PublicationItem[]).map((book, index) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    className="inbio-card p-7 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#ecf0f3] text-purple-700 shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff]">
                          {book.indexType || 'Scopus Indexed'}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          {book.year}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 leading-snug mb-3">
                        {book.title}
                      </h3>

                      <p className="text-xs text-slate-500 mb-2">
                        {book.authors}
                      </p>

                      <div className="p-3.5 rounded-xl bg-[#ecf0f3] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] mb-4 text-xs space-y-1">
                        <p className="font-semibold text-slate-800">{book.venue}</p>
                        <p className="font-mono text-slate-700 text-[11px]">{book.volumePages}</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                      <span className="text-purple-700 font-bold">Conference Book</span>
                      {book.doi && (
                        <a
                          href={book.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 font-semibold"
                        >
                          <span>Publisher Link</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination Controls (No Auto-scroll!) */}
        {totalPages > 1 && (
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 inbio-card">
            <div className="text-xs sm:text-sm text-slate-500 font-medium">
              Page <strong className="text-slate-900">{currentPage}</strong> of <strong className="text-slate-900">{totalPages}</strong>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="inbio-btn px-4 py-2.5 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold flex items-center gap-1"
              >
                <ChevronLeft size={14} />
                <span>Previous</span>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-xl font-bold text-xs transition-all ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md shadow-sky-500/25'
                      : 'inbio-btn text-slate-700 hover:text-sky-600'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="inbio-btn px-4 py-2.5 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
