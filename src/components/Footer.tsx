"use client";

import React from "react";
import MindSaathiLogo from "./MindSaathiLogo";
import {
  Heart,
  ArrowUp,
  Mail,
  Download,
  ShieldAlert,
  Globe,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#241E1A] text-[#FAF5EB] pt-16 pb-12 border-t border-[#3D332A]"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3D332A]">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <MindSaathiLogo colorMode="white" size="md" />

              <p className="mt-4 text-sm text-[#D3C7BC] max-w-sm leading-relaxed">
                MindSaathi (मनसाथी) is a youth-led initiative making practical
                emotional wellbeing tools accessible in everyday spoken Hindi
                for underserved children aged 7–15 in shelter homes.
              </p>

              {/* Tagline Box */}
              <div className="mt-4 p-3.5 rounded-xl bg-white/5 border border-white/10 max-w-sm">
                <span className="font-hindi text-sm font-semibold text-[#FCD8B3] block">
                  &ldquo;हर भावना का एक नाम है। हर बच्चे को यह जानने का हक़ है।&rdquo;
                </span>
                <span className="text-xs text-[#B5A597] italic block mt-0.5">
                  &ldquo;Every feeling has a name. Every child deserves to know it.&rdquo;
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-[#B5A597]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#457B67]" />
              <span>100% Free & Open-Access Social Innovation</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FCD8B3] mb-4">
              Explore MindSaathi
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D3C7BC]">
              <li>
                <a href="#about" className="hover:text-[#F4A261] transition-colors">
                  What is MindSaathi? (परिचय)
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#F4A261] transition-colors">
                  The Journey: Ruko. Socho. Bolo.
                </a>
              </li>
              <li>
                <a href="#toolkit" className="hover:text-[#F4A261] transition-colors">
                  Free Hindi Scripts & Flashcards
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#F4A261] transition-colors">
                  Our Story: Anya Narayan
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-[#F4A261] transition-colors">
                  Impact & Children&apos;s Words
                </a>
              </li>
              <li>
                <a href="#sdgs" className="hover:text-[#F4A261] transition-colors">
                  UN Sustainable Development Goals
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-[#F4A261] transition-colors">
                  Bring to Your Community
                </a>
              </li>
            </ul>
          </div>

          {/* Toolkit & Participation Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FCD8B3] mb-4">
              Get Involved & Download
            </h4>

            <p className="text-xs sm:text-sm text-[#D3C7BC] leading-relaxed mb-4">
              Download our complete 16-card emotion deck, 3-part workshop scripts,
              and pocket takeaway booklets for your shelter home or school.
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href="#toolkit"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all border border-white/15"
              >
                <div className="flex items-center gap-2">
                  <Download className="w-3.5 h-3.5 text-[#F4A261]" />
                  <span>Download Free Hindi Toolkit</span>
                </div>
                <span className="text-[10px] text-[#D3C7BC] font-normal">PDFs</span>
              </a>

              <a
                href="#join"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#D95D39] hover:bg-[#B54220] text-white text-xs font-bold transition-all shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5" />
                  <span>Join as Student Facilitator</span>
                </div>
                <span className="text-[10px] text-white/80 font-normal">Apply</span>
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#B5A597]">
              <span>Partner Shelter: Caring Hands, Mumbai</span>
              <span>Mentor: Tribes for Good</span>
            </div>
          </div>
        </div>

        {/* Non-Clinical Disclaimer (Required for Responsible Mental Health Design) */}
        <div className="py-6 border-b border-[#3D332A] flex items-start gap-3 text-xs text-[#A8988A] leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-[#F4A261] shrink-0 mt-0.5" />
          <p>
            <strong>Important Educational Note:</strong> MindSaathi is a youth-led,
            peer-to-peer emotional wellbeing and emotional literacy initiative. It provides
            preventative coping tools and does not offer medical, psychiatric, or clinical
            diagnosis. In case of acute child crisis or trauma, please connect with certified
            professionals or the National Childline India (1098).
          </p>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8E81]">
          <div>
            <span>© 2026 MindSaathi (मनसाथी). All educational materials are freely available under Creative Commons (CC BY-NC 4.0).</span>
            <div className="mt-1 text-[11px] text-[#7A6C5F]">
              Founded by Anya Narayan • Grade 11 IB Student • Mumbai, Maharashtra, India.
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-all cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
