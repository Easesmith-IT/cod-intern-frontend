import { AchieveYourGoals } from "@/components/about-us/achieve-your-goals";
import { EvolutionOFCodIntern } from "@/components/about-us/evolution-of-cod-intern/evolution-of-cod-intern";
import { ExpertInstructorLiveClasses } from "@/components/about-us/expert-instructor-live-classes/expert-instructor-live-classes";
import { HeroSection } from "@/components/about-us/hero";
import { ShapingFutures } from "@/components/about-us/shaping-futures/shaping-futures";
import { StartYourCourse } from "@/components/about-us/start-your-course";
import { LearnersStories } from "@/components/home/learners-stories/learners-stories";
import { LearningToCareer } from "@/components/home/learning-to-career/learning-to-career";
import { Mentors } from "@/components/home/mentors/mentors";
import React from "react";

const AboutUs = () => {
  return (
    <section>
      <HeroSection />
      <AchieveYourGoals />
      <ShapingFutures />
      <EvolutionOFCodIntern />
      <StartYourCourse />
      <ExpertInstructorLiveClasses />
      <Mentors />
      <LearningToCareer className="py-24" />
      <LearnersStories className="pt-0" />
    </section>
  );
};

export default AboutUs;
