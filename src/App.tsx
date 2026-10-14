import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBand from './components/StatsBand';
import WhatIDo from './components/WhatIDo';
import ResumeSection from './components/ResumeSection';
import PublicationsSection from './components/PublicationsSection';
import AchievementsSection from './components/AchievementsSection';
import InstitutionsSection from './components/InstitutionsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#ecf0f3] text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <WhatIDo />
        <ResumeSection />
        <PublicationsSection />
        <AchievementsSection />
        <InstitutionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;