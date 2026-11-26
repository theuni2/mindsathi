"use client";

import React from "react";
import { Globe, Heart, BookOpen, Sparkles, Shield, ArrowUpRight } from "lucide-react";

export default function SDGSection() {
  return (
    <section
      id="sdgs"
      className="py-14 sm:py-20 bg-[#FFFDF9] border-t border-[#EBDDCE] scroll-mt-20"
      aria-label="United Nations Sustainable Development Goals Alignment"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF0E4] border border-[#E5D5C2] text-xs font-bold text-[#B54220] uppercase tracking-wider mb-3">
            <Globe className="w-4 h-4 text-[#D95D39]" />
            <span>Global Impact Alignment</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#25201B] tracking-tight">
            Contributing to the UN Sustainable Development Goals
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#5A4E42] leading-relaxed">
            MindSaathi aligns with the United Nations 2030 Agenda by ensuring that
            foundational emotional health and inclusive education reach children often left behind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* SDG 3: Good Health and Wellbeing */}
          <div className="paper-card rounded-3xl p-6 sm:p-8 bg-white border-2 border-[#4C9F38]/30 shadow-md relative overflow-hidden group">
            {/* Top Accent Strip */}
            <div className="absolute top-0 inset-x-0 h-2 bg-[#4C9F38]" />

            <div className="flex items-start gap-4">
              {/* Official SDG 3 Badge Graphic */}
              <div className="w-16 h-16 rounded-2xl bg-[#4C9F38] text-white flex flex-col items-center justify-center font-black p-1 shrink-0 shadow-sm">
                <span className="text-xl leading-none">3</span>
                <Heart className="w-4 h-4 mt-1" />
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#4C9F38]">
                  United Nations SDG 3
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#25201B] mt-0.5">
                  Good Health and Wellbeing
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base text-[#4F4337] leading-relaxed">
              <strong>Promoting emotional wellbeing and practical tools for managing everyday feelings.</strong>
            </p>

            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#66584B]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4C9F38]" />
                <span>Provides children with non-pharmacological, preventative emotional coping tools.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4C9F38]" />
                <span>Reduces mental distress, aggression, and isolation in institutional shelter settings.</span>
              </li>
            </ul>
          </div>

          {/* SDG 4: Quality Education */}
          <div className="paper-card rounded-3xl p-6 sm:p-8 bg-white border-2 border-[#C5192D]/30 shadow-md relative overflow-hidden group">
            {/* Top Accent Strip */}
            <div className="absolute top-0 inset-x-0 h-2 bg-[#C5192D]" />

            <div className="flex items-start gap-4">
              {/* Official SDG 4 Badge Graphic */}
              <div className="w-16 h-16 rounded-2xl bg-[#C5192D] text-white flex flex-col items-center justify-center font-black p-1 shrink-0 shadow-sm">
                <span className="text-xl leading-none">4</span>
                <BookOpen className="w-4 h-4 mt-1" />
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#C5192D]">
                  United Nations SDG 4
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#25201B] mt-0.5">
                  Quality Education
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base text-[#4F4337] leading-relaxed">
              <strong>Making emotional learning accessible through inclusive, practical and age-appropriate education.</strong>
            </p>

            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#66584B]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5192D]" />
                <span>Bridges linguistic inequality by teaching in colloquial spoken Hindi.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5192D]" />
                <span>Offers 100% open-source curriculum for educators and community facilitators.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
