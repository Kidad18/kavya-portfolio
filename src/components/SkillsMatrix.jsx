import React, { useState } from "react";
import {
  Code2,
  BarChart3,
  Cloud,
  Cpu,
  BrainCircuit,
  CheckCircle2,
  Languages,
} from "lucide-react";
import { skillsData } from "../data/portfolioData";
import { playHoverSound, playClickSound } from "../utils/audio";

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState("programming");

  const skillTabs = [
    { id: "programming", label: "Programming & ML", icon: Code2 },
    { id: "analytics", label: "Analytics & BI", icon: BarChart3 },
    { id: "gisAndCloud", label: "Cloud & GIS Portals", icon: Cloud },
    { id: "iotAndDev", label: "IoT & Systems", icon: Cpu },
  ];

  const currentSkills = skillsData[activeTab] || [];

  return (
    <section id="skills" className="relative py-16 sm:py-24 bg-[#050817] overflow-hidden cyber-grid">

      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-600/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-[11px] sm:text-xs font-mono mb-3 sm:mb-4">
            <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mb-3 sm:mb-4">
            Technical Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 glow-cyan">Domain Expertise</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Multi-disciplinary skill set combining statistical machine learning, enterprise cloud devops, satellite geospatial computing, and embedded IoT edge systems.
          </p>

          {/* Interactive Domain Selector Tabs (Responsive flex-wrap on mobile) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {skillTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    playClickSound();
                    setActiveTab(tab.id);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105"
                      : "bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Meters Grid (1 col mobile, 2 cols tablet+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto mb-10 sm:mb-14">
          {currentSkills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={playHoverSound}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-start sm:items-center justify-between mb-2 gap-2">
                <div>
                  <span className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="block sm:inline sm:ml-2.5 text-[10px] sm:text-[11px] font-mono text-cyan-400/80">
                    ({skill.tag})
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-cyan-400 shrink-0">
                  {skill.level}%
                </span>
              </div>

              {/* Glowing Animated Bar */}
              <div className="w-full h-2 sm:h-2.5 rounded-full bg-slate-950 overflow-hidden p-[1px] border border-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 transition-all duration-1000 group-hover:brightness-125"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Professional Strengths & Multilingual Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">

          {/* Professional Strengths */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0b1227] border border-white/10">
            <h3 className="text-base sm:text-lg font-bold font-heading text-white mb-3 sm:mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Professional Competencies</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.professional.map((trait, idx) => (
                <span
                  key={idx}
                  className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-mono bg-cyan-950/40 border border-cyan-500/30 text-cyan-300"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Languages Proficiency */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0b1227] border border-white/10">
            <h3 className="text-base sm:text-lg font-bold font-heading text-white mb-3 sm:mb-4 flex items-center gap-2">
              <Languages className="w-5 h-5 text-indigo-400 shrink-0" />
              <span>Language Proficiencies</span>
            </h3>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 font-mono text-xs">
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="font-bold text-white text-xs sm:text-sm">Telugu</div>
                <div className="text-cyan-400 text-[10px] sm:text-xs">Native</div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="font-bold text-white text-xs sm:text-sm">English</div>
                <div className="text-cyan-400 text-[10px] sm:text-xs">Professional</div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="font-bold text-white text-xs sm:text-sm">Tamil</div>
                <div className="text-indigo-400 text-[10px] sm:text-xs">Working</div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="font-bold text-white text-xs sm:text-sm">Hindi</div>
                <div className="text-indigo-400 text-[10px] sm:text-xs">Working</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
