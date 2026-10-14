import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  GraduationCap,
  BookOpen,
  Linkedin,
  FileCheck
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalData } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send(
        'service_v9rx9l6',
        'template_acm99lo',
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        },
        't7IPkWFV-6GNTKkmQ'
      )
      .then(
        () => {
          setStatus('success');
          setFeedback('Thank you! Your message has been sent successfully to Dr. Renjith Thomas.');
          setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
          setTimeout(() => setStatus('idle'), 6000);
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatus('error');
          setFeedback('Message could not be sent automatically. Please feel free to email directly at renampatt@gmail.com.');
          setTimeout(() => setStatus('idle'), 7000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#ecf0f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="pill-badge mb-3">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Contact With Me
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Have a research inquiry, PhD collaboration, invited lecture, or consulting opportunity? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Profile Card (Balanced Height & Centered Face) */}
          <div className="lg:col-span-5 inbio-card p-6 sm:p-8 lg:p-9 flex flex-col justify-between h-full">
            <div>
              {/* Image Frame: Beautifully proportioned portrait */}
              <div className="p-2 mb-6">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#e2e8ec] shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]">
                  <img
                    src="/images/RT_contact_portrait_v2.jpg"
                    alt="Dr. Renjith Thomas"
                    className="w-full h-full object-cover object-center hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">
                {personalData.name}
              </h3>
              <p className="text-sm font-semibold text-sky-600 mb-4 leading-snug">
                {personalData.title} • {personalData.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Available for doctoral research consultations, conference session chairing, keynote addresses, and AI technology innovation advisory.
              </p>

              <div className="space-y-3 pt-5 border-t border-slate-200/70 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl inbio-btn flex items-center justify-center text-sky-600 shrink-0">
                    <Phone size={15} />
                  </span>
                  <a href={`tel:${personalData.phone.replace(/\s+/g, '')}`} className="font-semibold hover:text-sky-600 transition-colors">
                    {personalData.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl inbio-btn flex items-center justify-center text-sky-600 shrink-0">
                    <Mail size={15} />
                  </span>
                  <a href={`mailto:${personalData.email}`} className="font-semibold hover:text-sky-600 transition-colors">
                    {personalData.email}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-xl inbio-btn flex items-center justify-center text-sky-600 shrink-0 mt-0.5">
                    <MapPin size={15} />
                  </span>
                  <span className="text-slate-600 leading-relaxed">
                    {personalData.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons / Find With Me (Pinned to Bottom for Perfect Horizontal Alignment) */}
            <div className="pt-6 mt-8 border-t border-slate-200/70">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                FIND WITH ME
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://scholar.google.com/citations?user=oCnr0xsAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inbio-btn w-11 h-11 flex items-center justify-center text-slate-700 hover:text-sky-600 transition-colors"
                  title="Google Scholar"
                >
                  <GraduationCap size={18} />
                </a>
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=57192674628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inbio-btn w-11 h-11 flex items-center justify-center text-slate-700 hover:text-sky-600 transition-colors"
                  title="Scopus"
                >
                  <BookOpen size={18} />
                </a>
                <a
                  href="https://orcid.org/0000-0002-1038-9596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inbio-btn w-11 h-11 flex items-center justify-center text-slate-700 hover:text-sky-600 transition-colors"
                  title="ORCID"
                >
                  <FileCheck size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dr-renjith-thomas-a17bb610a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inbio-btn w-11 h-11 flex items-center justify-center text-slate-700 hover:text-sky-600 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Balanced Height to Match Left Card) */}
          <div className="lg:col-span-7 inbio-card p-6 sm:p-8 lg:p-9 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill out the form below and your message will be forwarded directly to Dr. Renjith's personal inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col flex-1 justify-between space-y-5">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      YOUR NAME <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Prof. Alan Smith"
                      className="w-full px-4 py-3 rounded-xl bg-[#ecf0f3] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-slate-200/50 text-slate-900 text-sm focus:outline-none focus:border-sky-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#ecf0f3] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-slate-200/50 text-slate-900 text-sm focus:outline-none focus:border-sky-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    EMAIL ADDRESS <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@university.edu"
                    className="w-full px-4 py-3 rounded-xl bg-[#ecf0f3] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-slate-200/50 text-slate-900 text-sm focus:outline-none focus:border-sky-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    SUBJECT <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Research Collaboration / Invited Talk / Consultation"
                    className="w-full px-4 py-3 rounded-xl bg-[#ecf0f3] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-slate-200/50 text-slate-900 text-sm focus:outline-none focus:border-sky-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    YOUR MESSAGE <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your query, project details, or proposal here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#ecf0f3] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-slate-200/50 text-slate-900 text-sm focus:outline-none focus:border-sky-500 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Feedback Alert */}
              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>{feedback}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle size={16} className="text-rose-600 shrink-0" />
                  <span>{feedback}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inbio-btn w-full py-4 text-sky-700 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 mt-4 active:scale-[0.99] transition-transform"
              >
                {status === 'sending' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
