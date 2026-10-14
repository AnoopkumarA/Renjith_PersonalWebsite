import { Lightbulb, BookOpen, Quote, Users, Coins, Clock } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function StatsBand() {
  const stats = [
    {
      label: "Patents & Designs",
      value: "19+",
      subtext: "IP Australia, UK & IP India",
      icon: Lightbulb
    },
    {
      label: "Research Publications",
      value: "24+",
      subtext: "IEEE, Springer & Elsevier",
      icon: BookOpen
    },
    {
      label: "Google Scholar Citations",
      value: "206+",
      subtext: "Verified Academic Impact",
      icon: Quote
    },
    {
      label: "PhD Scholars Mentored",
      value: "3",
      subtext: "APJAKTU Approved Guide",
      icon: Users
    },
    {
      label: "Research Grants & Funds",
      value: "₹3.5L+",
      subtext: "CERD, KSUM, ATAL Academy",
      icon: Coins
    },
    {
      label: "Years of Experience",
      value: "15+",
      subtext: "Academic, R&D & Software",
      icon: Clock
    }
  ];

  return (
    <section className="py-10 bg-[#ecf0f3] border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="inbio-card p-5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ecf0f3] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] flex items-center justify-center text-sky-600">
                    <Icon size={18} />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-1">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5 line-clamp-1">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
