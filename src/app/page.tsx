import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import ToolkitSection from "@/components/ToolkitSection";
import StorySection from "@/components/StorySection";
import ImpactSection from "@/components/ImpactSection";
import SDGSection from "@/components/SDGSection";
import SafetyPrinciples from "@/components/SafetyPrinciples";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Page 1: Hero & Introduction */}
        <HeroSection />

        {/* Page 2: The Journey (Three Workshops: Ruko. Socho. Bolo.) */}
        <JourneySection />

        {/* Emotional Safety & Non-Judgment Protocol */}
        <SafetyPrinciples />

        {/* Page 3: Free Toolkit (Resource Library) */}
        <ToolkitSection />

        {/* Page 4: Our Story (Founder Anya Narayan) */}
        <StorySection />

        {/* Page 5: Our Impact / Proof (Children's Words & Partners) */}
        <ImpactSection />

        {/* UN Sustainable Development Goals */}
        <SDGSection />

        {/* Page 6: Join the Movement (Get Involved & Contact Form) */}
        <JoinSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
