import React from "react";
import {
  ArrowUp,
  Heart,
  Terminal,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";
import { playHoverSound, playClickSound } from "../utils/audio";

export default function Footer() {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-8 sm:py-12 bg-[#02040b] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px]">
              <div className="w-full h-full bg-[#070b19] rounded-[10px] flex items-center justify-center font-bold text-cyan-400 text-sm">
                KC
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-white text-base">
                Kavya Chalichemala
              </div>
              <div className="text-xs font-mono text-slate-400">
                AI & Data Science Specialist
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              title="Send Email"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              title="Call"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span>© {new Date().getFullYear()} Kavya Chalichemala</span>
            <button
              onClick={scrollToTop}
              onMouseEnter={playHoverSound}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" /> Top
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
