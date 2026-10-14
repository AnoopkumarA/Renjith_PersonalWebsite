import { motion } from 'framer-motion';
import { 
  Eye, 
  Cpu, 
  Activity, 
  GraduationCap, 
  Coins, 
  BookOpenCheck,
  ArrowRight
} from 'lucide-react';
import { domainsData } from '../data/portfolioData';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Eye,
  Cpu,
  Activity,
  GraduationCap,
  Coins,
  BookOpenCheck
};

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20 md:py-28 bg-[#ecf0f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="pill-badge mb-3">
            FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            What I Do
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Bridging foundational doctoral research with applied deep learning, hardware innovation, and academic mentorship.
          </p>
        </div>

        {/* 6-Card Grid matching Inbio styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domainsData.map((item, index) => {
            const Icon = iconMap[item.iconName] || Eye;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="inbio-card p-8 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top row: Inset Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#ecf0f3] shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center text-sky-600 group-hover:text-sky-700 transition-all duration-300">
                      <Icon size={26} />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#ecf0f3] text-slate-600 shadow-[2px_2px_5px_#d1d9e6,-2px_-2px_5px_#ffffff]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom link indicator */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-sky-600 transition-colors">
                  <span>Explore domain output</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
