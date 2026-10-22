import React, { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/portfolioData";
import { playHoverSound, playClickSound, playSuccessSound } from "../utils/audio";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playClickSound();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      playSuccessSound();
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#06b6d4", "#3b82f6", "#a855f7", "#10b981"],
      });
    }, 900);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-[#030611] overflow-hidden cyber-grid">

      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-[11px] sm:text-xs font-mono mb-3 sm:mb-4">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mb-3 sm:mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 glow-cyan">Touch</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Interested in collaborating on AI research, data analytics, or engineering projects? Reach out directly via email, phone, or send a quick message below.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-5xl mx-auto">

          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">

            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-all hover:-translate-y-1 block group"
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden min-w-0">
                  <div className="text-[11px] sm:text-xs font-mono text-slate-400">Direct Email</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {personalInfo.email}
                  </div>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalInfo.phone}`}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-all hover:-translate-y-1 block group"
            >
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="overflow-hidden min-w-0">
                  <div className="text-[11px] sm:text-xs font-mono text-slate-400">Phone / WhatsApp</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                    {personalInfo.phone}
                  </div>
                </div>
              </div>
            </a>

            {/* Location & Status Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-white/10">
              <div className="space-y-2.5 sm:space-y-3 font-mono text-[11px] sm:text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Available for Full-time Roles & Internships</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Chat CTA */}
            <a
              href={`https://wa.me/919492371705?text=Hi%20Kavya,%20I%20saw%20your%20portfolio!`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="flex items-center justify-center gap-2 py-3 sm:py-3.5 px-4 sm:px-6 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition-all text-center block w-full"
            >
              <MessageSquare className="w-4 h-4 shrink-0" /> Instant WhatsApp Connect
            </a>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#070e24] border border-white/10 backdrop-blur-xl shadow-2xl">

              {isSubmitted ? (
                <div className="py-8 sm:py-12 text-center space-y-3 sm:space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    Transmission Dispatched!
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
                    Thank you for reaching out. Kavya will review your message and connect back with you promptly.
                  </p>
                  <button
                    onClick={() => {
                      playClickSound();
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-5 sm:px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors cursor-pointer"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white mb-1 sm:mb-2">
                    Send Direct Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono text-slate-400 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] sm:text-xs font-mono text-slate-400 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono text-slate-400 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration Inquiry"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono text-slate-400 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Kavya, I came across your portfolio and..."
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    onMouseEnter={playHoverSound}
                    className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/25 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 animate-spin" /> Dispatching...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" /> Send Secure Message
                      </span>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
