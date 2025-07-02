import { CourseOverview } from "@/components/course-details/course overview/course-overview";
import { HeroSection } from "@/components/course-details/hero-section/hero-section";
import { FAQs } from "@/components/home/faqs/faqs";
import { LearnersStories } from "@/components/home/learners-stories/learners-stories";
import { Mentors } from "@/components/home/mentors/mentors";
import React from "react";

const CourseDetails = () => {
  return (
    <main>
      <HeroSection />
      <CourseOverview />
      
      <LearnersStories />
      <Mentors />
      <FAQs />
    </main>
  );
};

export default CourseDetails;
