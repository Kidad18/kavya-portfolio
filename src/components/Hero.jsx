import React, { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  Download,
  Terminal,
  MapPin,
  Award,
  Cpu,
  Database,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import Hero3DCanvas from "./Hero3DCanvas";
import { personalInfo } from "../data/portfolioData";
import { playHoverSound, playClickSound } from "../utils/audio";

export default function Hero({ onOpenResume }) {
  const roles = [
    "AI & Data Science Engineer",
    "ISRO NRSC Research Intern",
    "Predictive Analytics & BI Specialist",
    "IoT & Environmental Tech Innovator",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[currentRoleIndex];
    let timer;

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timer = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToSection = (id) => {
    playClickSound();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid"
    >
      {/* 3D WebGL Background Canvas */}
      <Hero3DCanvas />

      {/* Radial Gradient Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-5 shadow-lg shadow-cyan-950/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>AVAILABLE FOR RESEARCH & FULL-TIME ROLES</span>
            </div>

            {/* Name Heading with 3D gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1] mb-4">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 glow-cyan">
                {personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="h-8 mb-5 flex items-center text-lg sm:text-xl font-mono text-cyan-300 font-semibold">
              <span className="text-slate-400 mr-2">&gt;</span>
              <span>{displayText}</span>
              <span className="w-2 h-5 bg-cyan-400 ml-1 animate-pulse" />
            </div>

            {/* Summary Text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-light">
              I am a passionate and curious individual with a{" "}
              <span className="text-white font-medium"> strong interest in research,  innovation.</span>{" "}
              I am enthusiastic about mass communication, public speaking, and building meaningful connections with people,  With a creative mindset and a drive to learn, I aspire to make a positive impact through effective{" "}
              <span className="text-cyan-300 font-medium">communication, collaboration.</span>{" "}
              <span className="text-indigo-300 font-medium"></span>
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection("roadmap")}
                onMouseEnter={playHoverSound}
                className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all cursor-pointer w-full sm:w-auto"
              >
                Explore Experience Roadmap
                <ArrowRight className="w-4 h-4" />
              </button>


            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-6 border-t border-white/10">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-cyan-400">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Holographic 3D Photo & Floating Orbital Cards */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] max-w-full">

              {/* Outer Decorative Gradient Glow Orbit */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl opacity-30 blur-2xl animate-pulse" />

              {/* Glass Frame Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden p-[2px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-600 shadow-2xl shadow-cyan-950/50 group">
                <div className="w-full h-full bg-[#080d21] rounded-2xl overflow-hidden relative">

                  {/* Photo of Kavya */}
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Cyber Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent opacity-80" />

                  {/* Corner Sci-Fi Brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

                  {/* Overlay Name Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-cyan-400">RESEARCHER & ENGINEER</div>
                      <div className="text-sm font-bold text-white">Kavya Chalichemala</div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: ISRO NRSC */}
              <div className="absolute -top-4 -left-4 sm:-left-6 px-3 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-xl shadow-xl flex items-center gap-2.5 animate-float">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Rocket className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">RESEARCH AT</div>
                  <div className="text-xs font-bold text-white">ISRO (NRSC)</div>
                </div>
              </div>

              {/* Floating Badge 2: Vel Tech CGPA 8.7 */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 px-3 py-2 rounded-xl bg-slate-900/90 border border-purple-500/40 backdrop-blur-xl shadow-xl flex items-center gap-2.5 animate-float" style={{ animationDelay: "2s" }}>
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">Out Reaching Manager</div>
                  <div className="text-xs font-bold text-white">Aruvixa Tech Solutions</div>
                </div>
              </div>

              {/* Floating Badge 3: Aruvixa Tech Solutions */}
              <div className="absolute top-1/2 -right-6 px-3 py-2 rounded-xl bg-slate-900/90 border border-blue-500/40 backdrop-blur-xl shadow-xl hidden sm:flex items-center gap-2 animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-slate-400">DEVELOPER</div>
                  <div className="text-xs font-bold text-white">Aruvixa Tech</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
