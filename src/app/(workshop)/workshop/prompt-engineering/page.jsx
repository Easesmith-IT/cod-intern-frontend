import { BeforeAfter } from "@/components/workshop/before-after";
import { BookYourSpot } from "@/components/workshop/book-your-spot";
import { Certification } from "@/components/workshop/certificate";
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
import { getSeoByPage } from "@/lib/axiosInstance";

// export const metadata = {
//   title: "Prompt Engineering Workshop | CodIntern",
//   description:
//     "Join 10,000+ learners in our 2-day Prompt Engineering Workshop. Learn AI tools in Hindi, hands-on projects, 8 hours training, certification included. Register now for just ₹189!",
//   keywords: [
//     "Prompt Engineering Workshop",
//     "AI Workshop in Hindi",
//     "Learn AI Tools",
//     "Generative AI Training",
//     "CodIntern Workshop",
//     "Nidhi Grover Raheja",
//     "AI Certification",
//   ],
//   openGraph: {
//     title: "Prompt Engineering Workshop | CodIntern",
//     description:
//       "🚀 10,000+ learners | 4.8⭐ | 8 Hours of Hands-on AI Training | Certification Included. Join Mrs. Nidhi Grover Raheja for a practical Hindi workshop on Prompt Engineering. Seats ₹189 only!",
//     url: "https://www.codintern.com/workshop/prompt-engineering",
//     siteName: "CodIntern",
//     locale: "en_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Prompt Engineering Workshop | CodIntern",
//     description:
//       "Hands-on AI Training in Hindi · 10K+ Reviews · 4.8⭐ · 8 Hours · Certification Included · Only ₹189!",
//   },
// };

export async function generateMetadata() {
  const seo = await getSeoByPage("prompt-engineering");

  const defaultTitle = "Prompt Engineering Workshop - CodIntern";
  const defaultDescription =
    "Join 10,000+ learners in our 2-day Prompt Engineering Workshop. Learn AI tools in Hindi, hands-on projects, 8 hours training, certification included. Register now for just ₹189!";
  const keywords = [
    "Prompt Engineering Workshop",
    "AI Workshop in Hindi",
    "Learn AI Tools",
    "Generative AI Training",
    "CodIntern Workshop",
    "Nidhi Grover Raheja",
    "AI Certification",
  ];

  return {
    title: seo?.title || defaultTitle,
    description: seo?.description || defaultDescription,
    keywords: seo?.keywords || keywords,
    openGraph: {
      title: seo?.title || defaultTitle,
      description: seo?.description || defaultDescription,
    },
  };
}

const Workshop = () => {
  return (
    <section className="!font-stolzl">
      <HeroScection />
      <WhatStopingYou />
      <ThreeHourChanges />
      <StatsGrid />
      <ToolsSection />
      <ComparisonSection />
      {/* Adding Local Images */}
      {/* <BonusesSection /> */}
      <BeforeAfter />
      <Certification />
      <SatisfactionSection />
      <BookYourSpot />
      <FAQ />
      <CTASection />
      <StickyCTA />
      {/* making color theme to CodIntern */}
    </section>
  );
};

export default Workshop;
