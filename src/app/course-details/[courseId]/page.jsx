"use client";

import { BecomeProjectManager } from "@/components/course-details/become-project-manager/become-project-manager";
import { BenifitsOfCourse } from "@/components/course-details/benifits-of-course";
import { CourseOverview } from "@/components/course-details/course overview/course-overview";
import { GloballyRecognized } from "@/components/course-details/globally-recognized/globally-recognized";
import { HeroSection } from "@/components/course-details/hero-section/hero-section";
import { IndustryProjects } from "@/components/course-details/industry-projects/industry-projects";
import { KeyHighlights } from "@/components/course-details/key-highlights/key-highlights";
import { TopCompanies } from "@/components/course-details/top-companies/top-companies";
import { UpcomingBatch } from "@/components/course-details/upcoming-batch/upcoming-batch";
import { FAQs } from "@/components/home/faqs/faqs";
import { LearnersStories } from "@/components/home/learners-stories/learners-stories";
import { LearningToCareer } from "@/components/home/learning-to-career/learning-to-career";
import { Mentors } from "@/components/home/mentors/mentors";
import { PopularCourses } from "@/components/home/popular-courses/popular-courses";
import { ThreeStepApproach } from "@/components/home/three-step-approach/three-step-approach";
import React from "react";

const CourseDetails = () => {
  return (
    <main>
      <HeroSection />
      <CourseOverview />
      <TopCompanies />
      <IndustryProjects />
      <KeyHighlights />
      <GloballyRecognized />
      <LearningToCareer />
      <UpcomingBatch />
      <PopularCourses />
      <BecomeProjectManager />
      <ThreeStepApproach />
      <BenifitsOfCourse />
      <LearnersStories />
      <Mentors />
      <FAQs />
    </main>
  );
};

export default CourseDetails;
