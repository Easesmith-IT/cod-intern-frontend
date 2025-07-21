import { AccelerateYourCareer } from "@/components/home/accelerate-your-career/accelerate-your-career";
import { ConnectWithUs } from "@/components/home/connect-with-us";
import { FAQs } from "@/components/home/faqs/faqs";
import { FreshJobs } from "@/components/home/fresh-jobs/fresh-jobs";
import { HeroSection } from "@/components/home/hero-section/hero-section";
import { LearnersStories } from "@/components/home/learners-stories/learners-stories";
import { LearningToCareer } from "@/components/home/learning-to-career/learning-to-career";
import { Mentors } from "@/components/home/mentors/mentors";
import { PopularCourses } from "@/components/home/popular-courses/popular-courses";
import { SharpenYourSkill } from "@/components/home/sharpen-your-skills/sharpen-your-skill";
import { ThreeStepApproach } from "@/components/home/three-step-approach/three-step-approach";
import { Universities } from "@/components/home/universities/universities";
import { WeJustKeepGrowing } from "@/components/home/we-just-keep-growing";
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
      {/* make responsive from this */}
      <ConnectWithUs />
      <WeJustKeepGrowing />
      <LearnersStories />
      <Mentors />
      <FAQs />
    </section>
  );
}
