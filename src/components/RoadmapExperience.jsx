import React, { useState, useEffect } from "react";
import {
  Rocket,
  Building2,
  Sparkles,
  Calendar,
  MapPin,
  CheckCircle2,
  Compass,
  ChevronRight,
  Play,
  Pause,
  Award,
  Radio,
  ArrowUpRight,
} from "lucide-react";
import { experiencesRoadmap } from "../data/portfolioData";
import { playHoverSound, playClickSound } from "../utils/audio";

export default function RoadmapExperience() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  // Auto-drive along the roadmap if autoPlay is active
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % experiencesRoadmap.length);
      }, 4500);
    }
    return () => clearInterval(interval);
  }, [autoPlay]);

  const activeExp = experiencesRoadmap[activeStep] || experiencesRoadmap[0];

  return (
    <section id="roadmap" className="relative py-16 sm:py-24 bg-[#040714] overflow-hidden">

      {/* Background Cyber Grid & Lighting */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-[11px] sm:text-xs font-mono mb-3 sm:mb-4">
            <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
            <span>CAREER MILESTONE ROADMAP</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mb-3 sm:mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 glow-cyan">Experience Journey</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Follow the interactive roadmap tracking Kavya's technical path — from space robotics research at <strong className="text-cyan-300">ISRO NRSC</strong> to expanding enterprise intelligence and outreach at <strong className="text-cyan-300">Aruvixa Tech Solutions</strong>.
          </p>

          {/* Interactive Road Navigation Controls */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => {
                playClickSound();
                setAutoPlay(!autoPlay);
              }}
              onMouseEnter={playHoverSound}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                autoPlay
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30"
                  : "bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40"
              }`}
            >
              {autoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{autoPlay ? "PAUSE ROAD TOUR" : "AUTOPLAY ROADMAP"}</span>
            </button>

            <span className="text-xs font-mono text-slate-500 hidden sm:inline">|</span>

            {/* Checkpoint Quick Selectors */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-white/10 max-w-full overflow-x-auto">
              {experiencesRoadmap.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    playClickSound();
                    setActiveStep(index);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                    activeStep === index
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {item.id === "aruvixa" ? "Aruvixa Tech" : "ISRO NRSC"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- ROADMAP EFFECT VISUALIZER --- */}
        <div className="relative mb-12 sm:mb-16 py-4 sm:py-6">

          {/* Desktop Animated SVG Road Highway Track */}
          <div className="relative w-full overflow-hidden px-4 hidden md:block">
            <svg
              className="w-full h-28"
              viewBox="0 0 1000 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="roadGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
                </linearGradient>
                <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Highway Outer Track */}
              <path
                d="M 80 50 Q 300 20, 500 50 T 920 50"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="18"
                strokeLinecap="round"
              />

              {/* Neon Road Core */}
              <path
                d="M 80 50 Q 300 20, 500 50 T 920 50"
                stroke="url(#roadGlow)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#neonBlur)"
              />

              {/* Animated Dashed Speed Lane Markings */}
              <path
                d="M 80 50 Q 300 20, 500 50 T 920 50"
                stroke="#ffffff"
                strokeWidth="2"
                strokeDasharray="8 14"
                className="animate-dash-flow"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Mobile Vertical Glowing Road Track Line (Visible only on mobile) */}
          <div className="md:hidden flex justify-center mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-indigo-500 rounded-full animate-pulse" />
          </div>

          {/* Interactive Checkpoint Nodes Along the Road (Responsive Grid: 1 col on mobile, 2 cols on tablet+) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto relative z-10 md:-mt-16">
            {experiencesRoadmap.map((item, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    playClickSound();
                    setActiveStep(index);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`group relative p-4 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-b from-slate-900/90 to-[#0c142c] border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20 -translate-y-1 sm:-translate-y-2"
                      : "bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 hover:bg-slate-900/80"
                  }`}
                >
                  {/* Waypoint Beacon Indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-wider font-semibold text-cyan-400 truncate mr-2">
                      {item.mileMarker}
                    </span>
                    <span
                      className={`px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider shrink-0 ${
                        isActive
                          ? "bg-cyan-400 text-slate-950"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Icon & Company Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                        isActive
                          ? "bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/40"
                          : "bg-slate-800 border border-white/10 text-cyan-400"
                      }`}
                    >
                      {item.id === "isro" ? (
                        <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                      ) : (
                        <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors truncate">
                        {item.company}
                      </h3>
                      <div className="text-xs font-semibold text-cyan-400 mt-0.5 truncate">
                        {item.role}
                      </div>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-slate-300 mb-3 bg-slate-950/60 px-2.5 sm:px-3 py-1.5 rounded-lg border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{item.period}</span>
                  </div>

                  {/* Quick Summary Pill */}
                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-3">
                    {item.highlight}
                  </p>

                  {/* Active Indicator Bar */}
                  <div className="w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-400 to-blue-500 w-full"
                          : "w-0 group-hover:w-1/3 bg-slate-600"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* --- DEEP-DIVE ROADMAP STOP DETAILS (Fully Mobile Responsive) --- */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0a1126] to-[#0d1738] border border-cyan-500/30 shadow-2xl relative overflow-hidden">

          {/* Subtle Ambient Accents */}
          <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 sm:w-60 h-48 sm:h-60 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* Left side: Highlight Banner & Badge */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-[11px] sm:text-xs mb-3 max-w-full">
                  <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400 shrink-0" />
                  <span className="truncate">ACTIVE WAYPOINT // {activeExp.mileMarker}</span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading text-white mb-1.5 sm:mb-2">
                  {activeExp.company}
                </h3>

                <div className="text-cyan-400 text-sm sm:text-base font-semibold mb-3 sm:mb-4">
                  {activeExp.role}
                </div>

                <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                    <span>Timeline: <strong>{activeExp.period}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                    <span>Location: {activeExp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                    <span>Honor: {activeExp.badge}</span>
                  </div>
                </div>
              </div>

              {/* Applied Technologies Pill Matrix */}
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Technologies & Competencies:
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {activeExp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono bg-slate-950/70 border border-cyan-500/20 text-cyan-300"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Detailed Achievement Points */}
            <div className="lg:col-span-7 bg-slate-950/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/5 backdrop-blur-md">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Key Contributions & Engineering Deliverables
              </h4>

              <ul className="space-y-3">
                {activeExp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 sm:gap-3 group">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                      {pIdx + 1}
                    </span>
                    <span className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-3 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[11px] text-slate-400 font-mono">
                <span>Verified Industry Milestone</span>
                <span className="text-cyan-400 flex items-center gap-1">
                  Validated Portfolio Asset <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
