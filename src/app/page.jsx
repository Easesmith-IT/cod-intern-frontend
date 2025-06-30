import { HeroSection } from "@/components/home/hero-section";
import { ThreeSetpApproach } from "@/components/home/three-setp-approach";
import { FreshJobs } from "@/components/home/fresh-jobs";
export default function Home() {
  return (
    <section>
      <HeroSection />
      <ThreeSetpApproach />
      <FreshJobs />
    </section>
  );
}
