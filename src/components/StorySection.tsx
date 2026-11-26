"use client";

import React from "react";
import {
  Sparkles,
  Quote,
  GraduationCap,
  Heart,
  BookOpen,
  MapPin,
  CheckCircle2,
  ArrowRight,
  User,
} from "lucide-react";

export default function StorySection() {
  return (
    <section
      id="story"
      className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#EBDDCE] scroll-mt-20"
      aria-label="Our Story and Founder"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF0E4] border border-[#E5D5C2] text-xs font-bold text-[#B54220] uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#D95D39]" />
            <span>Student-Led Social Impact • हमारी कहानी</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#25201B] tracking-tight leading-tight">
            One Student. One Idea.
            <span className="block text-[#D95D39] font-serif italic font-normal mt-1">
              A Thousand Conversations Waiting to Happen.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#5A4E42] leading-relaxed">
            MindSaathi began with a simple, urgent observation: why should life-saving
            emotional tools only exist in English, in clinical textbooks, or behind paywalls?
          </p>
        </div>

        {/* Founder Feature Container */}
        <div className="paper-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E8DACB] bg-white shadow-xl relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#FBECE6] to-[#FEF6DE] rounded-full blur-3xl opacity-60 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Founder Portrait Area & Replaceable Image Placeholder */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                {/* Frame with Soft Drop Shadow & Warm Border */}
                <div className="relative aspect-4/5 rounded-3xl overflow-hidden border-4 border-[#FAF2E6] bg-gradient-to-b from-[#FBF5ED] via-[#F6ECE0] to-[#EEDCC9] shadow-lg flex flex-col items-center justify-center p-6 text-center group">
                  {/* Artistic Vector Avatar Placeholder with Emotional Warmth */}
                  <div className="relative w-44 h-44 rounded-full bg-[#FAF0E2] border-4 border-white shadow-md flex items-center justify-center overflow-hidden mb-4">
                    <svg
                      viewBox="0 0 160 160"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full object-cover"
                      aria-label="Founder portrait placeholder for Anya Narayan"
                    >
                      {/* Soft Warm Backdrop */}
                      <circle cx="80" cy="80" r="80" fill="#FCECE6" />
                      {/* Gentle Hair & Silhouette Contour */}
                      <path
                        d="M38 78C38 48 55 30 80 30C105 30 122 48 122 78C122 96 118 116 118 125L42 125C42 116 38 96 38 78Z"
                        fill="#3D2E24"
                      />
                      {/* Face */}
                      <path
                        d="M52 74C52 60 64 50 80 50C96 50 108 60 108 74C108 90 95 106 80 106C65 106 52 90 52 74Z"
                        fill="#F3C3A0"
                      />
                      {/* Hair Framing */}
                      <path
                        d="M48 64C56 50 72 44 80 44C88 44 104 50 112 64C114 74 110 82 108 86C104 74 96 68 80 68C64 68 56 74 52 86C50 82 46 74 48 64Z"
                        fill="#2A1E17"
                      />
                      {/* Warm Smile & Features */}
                      <circle cx="70" cy="74" r="3.5" fill="#2A1E17" />
                      <circle cx="90" cy="74" r="3.5" fill="#2A1E17" />
                      <path
                        d="M72 86 Q80 94 88 86"
                        stroke="#B54220"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Warm Cheeks */}
                      <ellipse cx="64" cy="81" rx="5" ry="3" fill="#E88C7D" opacity="0.5" />
                      <ellipse cx="96" cy="81" rx="5" ry="3" fill="#E88C7D" opacity="0.5" />
                      {/* Neck and Jacket */}
                      <path d="M72 104V116H88V104" fill="#F3C3A0" />
                      <path
                        d="M44 140C44 120 60 114 80 114C100 114 116 120 116 140"
                        fill="#D95D39"
                      />
                      <path
                        d="M80 114V140"
                        stroke="#B54220"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  {/* Replaceable Image Banner Note */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#D8C7B5] text-[11px] font-semibold text-[#7A6450] shadow-2xs">
                    <User className="w-3.5 h-3.5 text-[#D95D39]" />
                    <span>Founder Portrait (High-Res Placeholder)</span>
                  </div>

                  <p className="mt-2 text-xs text-[#827160]">
                    Official photo will replace this frame seamlessly.
                  </p>
                </div>

                {/* Floating Student-Led Badge */}
                <div className="absolute -bottom-4 -left-4 sm:left-4 px-4 py-2 rounded-2xl bg-white border border-[#E8DACB] shadow-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#FBECE6] text-[#D95D39] flex items-center justify-center">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A7A6E]">
                      Student-Led Initiative
                    </div>
                    <div className="text-xs font-bold text-[#25201B]">
                      Grade 11 IB Student
                    </div>
                  </div>
                </div>

                {/* Floating Location Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-[#E8DACB] shadow-xs flex items-center gap-1.5 text-xs font-semibold text-[#54463A]">
                  <MapPin className="w-3.5 h-3.5 text-[#D95D39]" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>

            {/* Right: Biography & Founder's Story */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E4] text-[#B54220] text-xs font-bold uppercase tracking-wider mb-3">
                <Heart className="w-3.5 h-3.5" />
                <span>Meet the Founder</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#25201B]">
                Anya Narayan
              </h3>

              <p className="mt-1 text-base sm:text-lg font-semibold text-[#8C3F22]">
                Mumbai-based Grade 11 IB student, youth mental health advocate and founder of MindSaathi.
              </p>

              {/* Exact Founder Biography */}
              <div className="mt-6 space-y-4 text-sm sm:text-base text-[#4F4337] leading-relaxed">
                <p>
                  Anya Narayan is a Mumbai-based Grade 11 IB student, youth mental health
                  advocate, and the founder of MindSaathi — an initiative making practical
                  mental health tools accessible in everyday spoken Hindi for underserved children.
                </p>
                <p>
                  After leading wellbeing sessions with <strong>Tribes for Good</strong>, Anya saw that
                  clinical mental health concepts rarely reach children in shelter homes because of
                  language barriers and abstract jargon.
                </p>
                <p>
                  To bridge this gap, she founded MindSaathi at <strong>Caring Hands</strong> in Mumbai,
                  working directly with children aged 7 to 15.
                </p>
                <p>
                  Anya single-handedly created the entire Hindi program, writing original scripts,
                  designing flashcards, and making a takeaway booklet built around one simple idea
                  and one same-day coping tool per session.
                </p>
              </div>

              {/* Founder's Note Section */}
              <div className="mt-8 p-6 rounded-2xl bg-[#FAF5EB] border-l-4 border-l-[#D95D39] border border-[#EADFD0] relative">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B54220] mb-2">
                  <Quote className="w-4 h-4" />
                  <span>Founder&apos;s Note • आन्या का संदेश</span>
                </div>
                <blockquote className="text-sm sm:text-base font-serif italic text-[#25201B] leading-relaxed">
                  &ldquo;When you sit on the floor of a shelter home with a group of 10-year-olds,
                  you realize they don&apos;t need clinical theories. They need a simple, respectful
                  way to say: &lsquo;Mujhe gussa aa raha hai, aur main samajhna chahta hoon kyun.&rsquo;
                  MindSaathi was built with them, for them, in their everyday words. If one child
                  can pause instead of hurting themselves or someone else, this work has fulfilled its purpose.&rdquo;
                </blockquote>
                <div className="mt-3 text-right text-xs font-bold text-[#6D5E51]">
                  — Anya Narayan, Founder of MindSaathi
                </div>
              </div>

              {/* Action Callout */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="#join"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D95D39] text-white text-xs sm:text-sm font-bold hover:bg-[#B54220] shadow-sm transition-all"
                >
                  <span>Collaborate with Anya</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs text-[#7A6C5E]">
                  Open to school partnerships, NGO workshops & student facilitators.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
