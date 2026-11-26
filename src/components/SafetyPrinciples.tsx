"use client";

import React from "react";
import { Shield, Heart, Smile, Sparkles, CheckCircle } from "lucide-react";

export default function SafetyPrinciples() {
  const rules = [
    {
      number: "१",
      titleHindi: "अपनी मर्ज़ी से बोलो",
      titleEn: "Sharing is Always Voluntary",
      desc: "No child is ever forced to speak or share. Listening quietly is celebrated as a completely valid way of participating in our circle.",
      icon: "🌱",
      bgColor: "#FBECE6",
      textColor: "#B54220",
    },
    {
      number: "२",
      titleHindi: "कोई मज़ाक नहीं उड़ाएगा",
      titleEn: "Zero Mockery, Zero Judgment",
      desc: "Every person in the circle agrees: we never laugh at someone's feelings, tears, or questions. What hurts one is treated with gentleness by all.",
      icon: "🤝",
      bgColor: "#FEF6DE",
      textColor: "#9A7010",
    },
    {
      number: "३",
      titleHindi: "हर भावना ठीक है",
      titleEn: "All Feelings are Normal",
      desc: "Anger, sadness, jealousy, and fear are not 'bad' feelings. They are natural human signals. We learn to accept the feeling and choose the action.",
      icon: "🧡",
      bgColor: "#EBF2EE",
      textColor: "#265E4C",
    },
    {
      number: "४",
      titleHindi: "जो यहाँ बोला, वो यहीं रहेगा",
      titleEn: "Circle Trust & Privacy",
      desc: "Confidentiality builds safety. Personal stories shared in the workshop stay in the workshop, creating an authentic sanctuary for children.",
      icon: "🔒",
      bgColor: "#FAF0E4",
      textColor: "#874A27",
    },
  ];

  return (
    <section
      className="py-14 sm:py-20 bg-[#FAF6EE] border-t border-[#EBDDCE]"
      aria-label="Our Safety Principles and Golden Rules"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5D5C2] text-xs font-bold text-[#B54220] uppercase tracking-wider mb-3 shadow-2xs">
            <Shield className="w-4 h-4 text-[#D95D39]" />
            <span>Child Safety & Psychological Trust</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#25201B] tracking-tight">
            Our 4 Golden Workshop Rules
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#5A4E42] leading-relaxed">
            In our workshops, safety comes before solutions. We establish explicit ground rules
            so every child knows they will never be judged, ridiculed, or put on the spot.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="paper-card rounded-2xl p-6 bg-white border border-[#E8DACB] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{rule.icon}</span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center font-hindi font-bold text-base"
                    style={{
                      backgroundColor: rule.bgColor,
                      color: rule.textColor,
                    }}
                  >
                    {rule.number}
                  </span>
                </div>

                <h3 className="font-hindi font-bold text-lg text-[#25201B]">
                  {rule.titleHindi}
                </h3>
                <h4 className="text-xs font-bold text-[#8C3F22] uppercase tracking-wider mt-0.5">
                  {rule.titleEn}
                </h4>

                <p className="mt-3 text-xs sm:text-sm text-[#5C5044] leading-relaxed">
                  {rule.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F0E5D8] flex items-center gap-1.5 text-[11px] font-semibold text-[#7A6C5E]">
                <CheckCircle className="w-3.5 h-3.5 text-[#457B67]" />
                <span>Practiced at every session</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
