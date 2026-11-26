"use client";

import React from "react";
import {
  Sparkles,
  Quote,
  Heart,
  Users,
  Calendar,
  Layers,
  Building,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="py-16 sm:py-24 bg-[#FAF5EB] border-t border-[#EBDDCE] scroll-mt-20"
      aria-label="Our Impact and Proof"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5D5C2] text-xs font-bold text-[#B54220] uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#D95D39]" />
            <span>Real Impact • बच्चों की ज़ुबानी</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#25201B] tracking-tight">
            Small Conversations. Meaningful Changes.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#5A4E42] leading-relaxed">
            Measuring emotional growth doesn&apos;t come from sterile tests. It shows when
            a child chooses a 3-second breath instead of a clenched fist, or finds the courage
            to share a heavy feeling with a trusted mentor.
          </p>
        </div>

        {/* Impact Numbers Grid (Clearly Marked Editable Placeholders) */}
        <div className="mb-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Stat 1 */}
            <div className="paper-card rounded-2xl p-6 text-center border border-[#E8DACB] bg-white relative overflow-hidden group">
              <div className="w-10 h-10 rounded-xl bg-[#FBECE6] text-[#D95D39] flex items-center justify-center mx-auto mb-3">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#25201B] tracking-tight">
                [150+]
              </div>
              <div className="mt-1 text-xs sm:text-sm font-bold text-[#8C3F22]">
                Children Reached
              </div>
              <p className="mt-1 text-[11px] text-[#7A6C5E]">
                Direct participants in Mumbai shelter homes
              </p>
              <span className="mt-2 inline-block text-[10px] font-semibold text-[#A8988A] uppercase tracking-wider">
                *Editable Placeholder
              </span>
            </div>

            {/* Stat 2 */}
            <div className="paper-card rounded-2xl p-6 text-center border border-[#E8DACB] bg-white relative overflow-hidden group">
              <div className="w-10 h-10 rounded-xl bg-[#FEF6DE] text-[#9A7010] flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#25201B] tracking-tight">
                [3]
              </div>
              <div className="mt-1 text-xs sm:text-sm font-bold text-[#9A7010]">
                Workshops Under Framework
              </div>
              <p className="mt-1 text-[11px] text-[#7A6C5E]">
                RUKO, SOCHO, BOLO complete series
              </p>
              <span className="mt-2 inline-block text-[10px] font-semibold text-[#A8988A] uppercase tracking-wider">
                *Editable Placeholder
              </span>
            </div>

            {/* Stat 3 */}
            <div className="paper-card rounded-2xl p-6 text-center border border-[#E8DACB] bg-white relative overflow-hidden group">
              <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] text-[#265E4C] flex items-center justify-center mx-auto mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#25201B] tracking-tight">
                [8]
              </div>
              <div className="mt-1 text-xs sm:text-sm font-bold text-[#265E4C]">
                Free Hindi Resources
              </div>
              <p className="mt-1 text-[11px] text-[#7A6C5E]">
                Scripts, flashcard deck, activity packs
              </p>
              <span className="mt-2 inline-block text-[10px] font-semibold text-[#A8988A] uppercase tracking-wider">
                *Editable Placeholder
              </span>
            </div>

            {/* Stat 4 */}
            <div className="paper-card rounded-2xl p-6 text-center border border-[#E8DACB] bg-white relative overflow-hidden group">
              <div className="w-10 h-10 rounded-xl bg-[#FAF0E4] text-[#B54220] flex items-center justify-center mx-auto mb-3">
                <Building className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#25201B] tracking-tight">
                [2]
              </div>
              <div className="mt-1 text-xs sm:text-sm font-bold text-[#B54220]">
                Partner Organisations
              </div>
              <p className="mt-1 text-[11px] text-[#7A6C5E]">
                Caring Hands & Tribes for Good
              </p>
              <span className="mt-2 inline-block text-[10px] font-semibold text-[#A8988A] uppercase tracking-wider">
                *Editable Placeholder
              </span>
            </div>
          </div>

          <div className="mt-3 text-center">
            <span className="text-xs text-[#87786B] italic">
              Note: Exact cumulative statistics are editable placeholders and will be updated as more shelter cohorts complete their sessions.
            </span>
          </div>
        </div>

        {/* Children's Words (Testimonials with Hindi Typography as Primary Focus) */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#25201B]">
              Children&apos;s Words
            </h3>
            <p className="mt-1 text-sm text-[#66584B]">
              Direct reflections from children in Mumbai shelter homes after experiencing the workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="paper-card rounded-3xl p-8 sm:p-10 border-2 border-[#F4CEBF] bg-white shadow-lg relative flex flex-col justify-between">
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#FBECE6] text-[#B54220] text-xs font-bold uppercase tracking-wider">
                    After Workshop 1: RUKO (रुको)
                  </span>
                  <span className="text-xs text-[#87786B] font-semibold">
                    Participant, Age 11
                  </span>
                </div>

                {/* Big Quote Symbol */}
                <Quote className="w-10 h-10 text-[#D95D39]/30 mb-2" />

                {/* Primary Hindi Text */}
                <blockquote className="font-hindi text-2xl sm:text-3xl font-extrabold text-[#25201B] leading-snug">
                  &ldquo;मुझे नहीं पता था कि गुस्सा करने के अलावा और भी तरीके होते हैं।&rdquo;
                </blockquote>

                {/* English Translation */}
                <p className="mt-4 pt-4 border-t border-[#F0E5D8] text-base sm:text-lg text-[#5A4E42] font-serif italic">
                  &ldquo;I didn&apos;t know there were other ways to respond besides getting angry.&rdquo;
                </p>
              </div>

              {/* Attribution Footer */}
              <div className="mt-6 pt-4 border-t border-[#F0E5D8] flex items-center justify-between text-xs text-[#7A6C5E]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D95D39]" />
                  <span className="font-semibold text-[#25201B]">
                    Caring Hands Shelter Home, Mumbai
                  </span>
                </div>
                <span className="text-[#8C3F22] font-bold">5-Second Calming Breath</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="paper-card rounded-3xl p-8 sm:p-10 border-2 border-[#C5DDD1] bg-white shadow-lg relative flex flex-col justify-between">
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#EBF2EE] text-[#265E4C] text-xs font-bold uppercase tracking-wider">
                    After Workshop 3: BOLO (बोलो)
                  </span>
                  <span className="text-xs text-[#87786B] font-semibold">
                    Participant, Age 13
                  </span>
                </div>

                {/* Big Quote Symbol */}
                <Quote className="w-10 h-10 text-[#457B67]/30 mb-2" />

                {/* Primary Hindi Text */}
                <blockquote className="font-hindi text-2xl sm:text-3xl font-extrabold text-[#25201B] leading-snug">
                  &ldquo;हमें मन की बात करना नहीं आता था। इस workshop से हमने सीखा कि कैसे और किससे share करें।&rdquo;
                </blockquote>

                {/* English Translation */}
                <p className="mt-4 pt-4 border-t border-[#F0E5D8] text-base sm:text-lg text-[#5A4E42] font-serif italic">
                  &ldquo;We didn&apos;t know how to talk about what was on our minds. Through this workshop, we learned how and whom to share with.&rdquo;
                </p>
              </div>

              {/* Attribution Footer */}
              <div className="mt-6 pt-4 border-t border-[#F0E5D8] flex items-center justify-between text-xs text-[#7A6C5E]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#457B67]" />
                  <span className="font-semibold text-[#25201B]">
                    Caring Hands Shelter Home, Mumbai
                  </span>
                </div>
                <span className="text-[#265E4C] font-bold">My Safe Circle Tree</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Partners Section */}
        <div className="pt-10 border-t border-[#EBDDCE]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8A7A6E]">
              Collaborators & Mentorship
            </span>
            <h3 className="text-2xl font-extrabold text-[#25201B] mt-1">
              Our Community Partners
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#66584B]">
              MindSaathi works alongside grassroots partners committed to child wellbeing and youth social leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Partner 1: Caring Hands */}
            <div className="paper-card rounded-2xl p-6 bg-white border border-[#E8DACB] flex items-center gap-4">
              {/* Replaceable Logo Placeholder */}
              <div className="w-16 h-16 rounded-2xl bg-[#FAF0E4] border border-[#E8D4BF] flex items-center justify-center text-[#B54220] font-black text-xl shrink-0">
                CH
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-lg text-[#25201B]">
                    Caring Hands
                  </h4>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm bg-[#FBECE6] text-[#B54220]">
                    Shelter Home Partner
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#635548] leading-relaxed">
                  Mumbai shelter home where MindSaathi conducted its foundational workshops directly with children aged 7 to 15.
                </p>
                <span className="mt-1.5 inline-block text-[11px] text-[#8C7A6A] italic">
                  *Official logo placeholder
                </span>
              </div>
            </div>

            {/* Partner 2: Tribes for Good */}
            <div className="paper-card rounded-2xl p-6 bg-white border border-[#E8DACB] flex items-center gap-4">
              {/* Replaceable Logo Placeholder */}
              <div className="w-16 h-16 rounded-2xl bg-[#EBF2EE] border border-[#C5DDD1] flex items-center justify-center text-[#265E4C] font-black text-xl shrink-0">
                TFG
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-lg text-[#25201B]">
                    Tribes for Good
                  </h4>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm bg-[#EBF2EE] text-[#265E4C]">
                    Youth Leadership Platform
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#635548] leading-relaxed">
                  Social impact accelerator where Anya previously led wellbeing sessions, providing the spark to create MindSaathi.
                </p>
                <span className="mt-1.5 inline-block text-[11px] text-[#8C7A6A] italic">
                  *Official logo placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
