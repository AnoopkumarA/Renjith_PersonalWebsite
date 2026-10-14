import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Coins, 
  Award, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Building
} from 'lucide-react';
import { 
  workExperienceData, 
  educationData, 
  grantsData, 
  officialRoles 
} from '../data/portfolioData';

type TabKey = 'experience' | 'education' | 'grants' | 'leadership';

interface TabConfig {
  key: TabKey;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  count: number;
}

const tabs: TabConfig[] = [
  { key: 'experience', label: 'Job Experience', icon: Briefcase, count: workExperienceData.length },
  { key: 'education', label: 'Education Quality', icon: GraduationCap, count: educationData.length },
  { key: 'grants', label: 'Grants & Funding', icon: Coins, count: grantsData.length },
  { key: 'leadership', label: 'Official Leadership', icon: Award, count: officialRoles.length }
];

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('experience');

  const currentTabIndex = tabs.findIndex(t => t.key === activeTab);

  const handleNextTab = () => {
    const nextIndex = (currentTabIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex].key);
  };

  const handlePrevTab = () => {
    const prevIndex = (currentTabIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIndex].key);
  };

  return (
    <section id="resume" className="py-20 md:py-28 bg-[#ecf0f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="pill-badge mb-3">
            7+ YEARS EXPERTISE & LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            My Resume
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Track record across academic administration, research laboratories, competitive grants, and foundational doctoral studies.
          </p>
        </div>

        {/* Tab Buttons (INBIO Neumorphic Segmented Bar) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-2 rounded-2xl bg-[#ecf0f3] shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff] overflow-x-auto max-w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
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

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {workExperienceData.map((item, index) => (
                  <div
                    key={index}
                    className="inbio-card p-7 sm:p-8 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ecf0f3] text-sky-700 shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] mb-3">
                            <Calendar size={12} />
                            {item.period}
                          </span>
                          <h3 className="text-xl font-bold text-slate-900 leading-snug">
                            {item.title}
                          </h3>
                          <div className="text-sm font-semibold text-sky-600 mt-1 flex items-center gap-1.5">
                            <Building size={14} />
                            <span>{item.institution}</span>
                          </div>
                          {item.department && (
                            <p className="text-xs text-slate-500 mt-0.5">
                              {item.department}
                            </p>
                          )}
                        </div>

                        {item.image && (
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-[#e2e8ec] p-1 shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] shrink-0">
                            <img
                              src={item.image}
                              alt={item.institution}
                              className="w-full h-full object-cover rounded-xl"
                            />
                          </div>
                        )}
                      </div>

                      <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 pt-3 border-t border-slate-200/60">
                        {item.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium pt-5 mt-5 border-t border-slate-200/60">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {item.location}
                      </span>
                      <span className="text-sky-700 font-bold">
                        Verified Position
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="inbio-card p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    {item.image && (
                      <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 bg-[#e2e8ec] p-1 shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff]">
                        <img
                          src={item.image}
                          alt={item.institution}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    )}

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ecf0f3] text-sky-700 shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] mb-3">
                      <Calendar size={12} />
                      {item.period}
                    </span>

                    <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-sky-600 mb-2">
                      {item.field}
                    </p>
                    <p className="text-xs font-medium text-slate-500 mb-4 flex items-center gap-1">
                      <Building size={12} />
                      {item.institution}, {item.location}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-200/60">
                      {item.details.map((detail, dIndex) => (
                        <div key={dIndex} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                    <span>{item.location}</span>
                    <span className="text-sky-700 font-bold">{item.badge || 'Degree Completed'}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'grants' && (
            <motion.div
              key="grants"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {grantsData.map((item, index) => (
                <div
                  key={index}
                  className="inbio-card p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {item.amount}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs font-bold text-sky-600 mb-2 uppercase tracking-wide">
                      {item.body}
                    </p>

                    <p className="text-slate-600 text-xs leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Role: {item.role}</span>
                    <span className="text-emerald-700 font-bold">Funded</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'leadership' && (
            <motion.div
              key="leadership"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {officialRoles.map((item, index) => (
                <div
                  key={index}
                  className="inbio-card p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#ecf0f3] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] text-sky-600 flex items-center justify-center font-bold mb-4">
                      <Award size={22} />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
                      {item.role}
                    </h3>

                    <p className="text-xs font-bold text-sky-600 mb-3">
                      {item.body}
                    </p>

                    <p className="text-slate-600 text-xs leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/60 text-xs text-slate-400 font-medium">
                    Official Appointment
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step Buttons: "Next Layout / Next Tab" */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 inbio-card">
          <div className="text-xs sm:text-sm text-slate-500">
            Currently viewing: <strong className="text-slate-900 font-bold">{tabs[currentTabIndex].label}</strong> (Tab {currentTabIndex + 1} of {tabs.length})
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevTab}
              className="inbio-btn px-5 py-3 text-slate-700 hover:text-sky-600 text-xs font-bold flex items-center gap-1.5"
            >
              <ArrowLeft size={14} />
              <span>Previous Layout</span>
            </button>
            <button
              onClick={handleNextTab}
              className="inbio-btn px-6 py-3 text-sky-700 hover:text-sky-800 text-xs font-extrabold flex items-center gap-1.5"
            >
              <span>Next Layout: {tabs[(currentTabIndex + 1) % tabs.length].label}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
