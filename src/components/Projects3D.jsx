import React, { useState } from "react";
import {
  FolderGit2,
  ExternalLink,
  Layers,
  Sparkles,
  TrendingUp,
  Cpu,
  Globe2,
  Database,
  X,
  CheckCircle,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import confetti from "canvas-confetti";
import { projectsData } from "../data/portfolioData";
import { playHoverSound, playClickSound, playSuccessSound } from "../utils/audio";

export default function Projects3D() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Mouse tilt effect per card
  const handleMouseMove = (e, cardId) => {
    const card = document.getElementById(`card-${cardId}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (cardId) => {
    const card = document.getElementById(`card-${cardId}`);
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const handleOpenModal = (project) => {
    playSuccessSound();
    setSelectedProject(project);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#06b6d4", "#3b82f6", "#a855f7"],
    });
  };

  const categories = ["All", "AI & Robotics", "IoT & Environmental AI", "GIS & Machine Learning", "Enterprise Systems"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 bg-[#030612] overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 glow-cyan">AI & Engineering Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world systems spanning automated microplastic degradation, satellite GIS vector analytics, and scalable enterprise deployment engines.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClickSound();
                  setActiveFilter(cat);
                }}
                onMouseEnter={playHoverSound}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30 scale-105"
                    : "bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`card-${project.id}`}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
              className="relative rounded-3xl p-[1.5px] bg-gradient-to-b from-white/15 via-white/5 to-transparent transition-transform duration-200 ease-out will-change-transform group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative h-full w-full rounded-[23px] bg-[#080d21] p-6 sm:p-7 flex flex-col justify-between overflow-hidden border border-white/5 shadow-xl shadow-black/60 group-hover:border-cyan-500/50 transition-colors">
                
                {/* Top Ambient Glow */}
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
                  style={{ background: project.borderGlow }}
                />

                {/* Card Top: Category Badge & Impact Metric */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-900 border border-white/10 text-cyan-400">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <TrendingUp className="w-3 h-3" />
                      {project.impactMetric}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400/80 mb-4 font-semibold">
                    {project.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Highlights Bullet Preview */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Tech Pills & Action CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <button
                      onClick={() => handleOpenModal(project)}
                      onMouseEnter={playHoverSound}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Deep Dive
                    </button>

                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      onMouseEnter={playHoverSound}
                      onClick={playClickSound}
                      className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- PROJECT DEEP DIVE MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#090f26] border border-cyan-500/40 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => {
                playClickSound();
                setSelectedProject(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {selectedProject.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {selectedProject.impactMetric}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-1">
              {selectedProject.title}
            </h3>
            <p className="text-cyan-400 font-mono text-sm mb-6">
              {selectedProject.subtitle}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  System Architecture & Overview
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Engineering Highlights & Empirical Metrics
                </h4>
                <ul className="space-y-3">
                  {selectedProject.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-white/5">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Technologies Deployed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" /> View Source Code
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors cursor-pointer"
                >
                  Close Deep Dive
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
