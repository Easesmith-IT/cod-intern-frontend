import { AccelerateYourCareer } from "@/components/home/accelerate-your-career/accelerate-your-career";
import { FreshJobs } from "@/components/home/fresh-jobs/fresh-jobs";
import { HeroSection } from "@/components/home/hero-section/hero-section";
import { LearningToCareer } from "@/components/home/learning-to-career/learning-to-career";
import { PopularCourses } from "@/components/home/popular-courses/popular-courses";
import { SharpenYourSkill } from "@/components/home/sharpen-your-skills/sharpen-your-skill";
import { ThreeStepApproach } from "@/components/home/three-step-approach/three-step-approach";
import { Universities } from "@/components/home/universities/universities";
import { WhyCodInterns } from "@/components/home/why-cod-interns/why-cod-interns";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <ThreeStepApproach />
      <FreshJobs />
      <AccelerateYourCareer />
      <PopularCourses />
      <SharpenYourSkill />
      <Universities />
      <WhyCodInterns />
      <LearningToCareer />
    </section>
  );
}
