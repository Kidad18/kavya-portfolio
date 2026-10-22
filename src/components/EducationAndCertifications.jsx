import React from "react";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle,
  FileBadge,
  Sparkles,
} from "lucide-react";
import { educationData, certificationsData } from "../data/portfolioData";
import { playHoverSound } from "../utils/audio";

export default function EducationAndCertifications() {
  return (
    <section id="education" className="relative py-24 bg-[#040715] overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC FOUNDATION & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 glow-cyan">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Consistently outstanding academic standing paired with industry-standard professional credentials in modern data science and prompt engineering.
          </p>
        </div>

        {/* 2-Column Grid: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Education Milestones */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-bold font-heading text-white mb-6 flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              Academic Degrees & Milestones
            </h3>

            <div className="space-y-6 relative border-l-2 border-white/10 ml-4 pl-6">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  onMouseEnter={playHoverSound}
                  className="relative p-6 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-md hover:border-cyan-500/40 transition-all hover:-translate-y-1 group"
                >
                  {/* Glowing Milestone Marker */}
                  <div className="absolute -left-[35px] top-6 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-[#040715] group-hover:scale-125 transition-transform" />

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {edu.badge}
                    </span>
                    <span className="px-3 py-1 rounded-xl text-xs font-mono font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20">
                      {edu.score}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {edu.institution}
                  </h4>

                  <div className="text-sm font-semibold text-cyan-400 mb-3">
                    {edu.degree}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Industry Certifications */}
          <div className="lg:col-span-5">
            <h3 className="text-xl font-bold font-heading text-white mb-6 flex items-center gap-2.5">
              <Award className="w-5 h-5 text-purple-400" />
              Verified Certifications
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  onMouseEnter={playHoverSound}
                  className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/80 via-[#0a1128] to-[#0f1738] border border-white/10 hover:border-purple-500/40 transition-all hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
                      <FileBadge className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400">
                          {cert.badge}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> {cert.date}
                        </span>
                      </div>

                      <h4 className="font-heading font-bold text-white group-hover:text-purple-300 transition-colors text-base mb-1">
                        {cert.title}
                      </h4>

                      <div className="text-xs font-mono font-semibold text-cyan-400 mb-2">
                        Issued by: {cert.issuer}
                      </div>

                      <p className="text-slate-400 text-xs leading-relaxed">
                        Skills: {cert.skills}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Research & Innovation Callout */}
              <div className="p-6 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 backdrop-blur-md mt-6">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold mb-2">
                  <Sparkles className="w-4 h-4" />
                  ACADEMIC & RESEARCH IMPACT
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Active contributor to technical symposiums, research publications, and IoT prototyping labs at Vel Tech University with an emphasis on satellite earth observation and intelligent sustainability.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
