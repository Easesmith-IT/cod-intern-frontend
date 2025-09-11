import { BeforeAfter } from "@/components/workshop/before-after";
import { BonusesSection } from "@/components/workshop/bonuses-section";
import { BookYourSpot } from "@/components/workshop/book-your-spot";
import { CertificationSection } from "@/components/workshop/certification-section";
import { ComparisonSection } from "@/components/workshop/comparison-section";
import { CTASection } from "@/components/workshop/cta";
import { FAQ } from "@/components/workshop/faq";
import { HeroScection } from "@/components/workshop/hero-section";
import { SatisfactionSection } from "@/components/workshop/satisfaction-section";
import { StatsGrid } from "@/components/workshop/stats-grid";
import { StickyCTA } from "@/components/workshop/sticky-cta";
import { ToolsSection } from "@/components/workshop/tools-section";
import { ThreeHourChanges } from "@/components/workshop/what-changes";
import { WhatStopingYou } from "@/components/workshop/what-stoping-you/what-stoping-you";

const Workshop = () => {
  return (
    <section className="!font-stolzl bg-[#03120D]">
      <HeroScection />
      <WhatStopingYou />
      <ThreeHourChanges />
      <StatsGrid />
      <ToolsSection />
      <ComparisonSection />
      {/* Local Images */}
      <BonusesSection />
      <BeforeAfter />
      <CertificationSection />
      <SatisfactionSection />
      <BookYourSpot />
      <FAQ />
      <CTASection />
      <StickyCTA />
    </section>
  );
};

export default Workshop;
