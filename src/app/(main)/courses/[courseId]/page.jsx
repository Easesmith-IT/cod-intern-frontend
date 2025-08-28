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
import { useApiQuery } from "@/hooks/useApiQuery";
import { useParams } from "next/navigation";
import React from "react";

const CourseDetails = () => {
  const params = useParams();

  const { data, isLoading, error } = useApiQuery({
    url: `/student/courses/${params.courseId}`,
    queryKeys: ["courses", params.courseId],
  });

  const course = data?.course || "";

  console.log("course", data?.course);

  return (
    <main>
      {isLoading ? (
        <div className="flex justify-center items-center h-[calc(100vh-140px)]">
          <p className="text-muted-foreground">Loading Course Content...</p>
        </div>
      ) : (
        <>
          <HeroSection course={course} />
          <CourseOverview course={course} />
          {/* <TopCompanies /> comment this */}
          <IndustryProjects projects={course.projects} />
          <KeyHighlights title={course.title} />
          <GloballyRecognized />
          <LearningToCareer />
          <UpcomingBatch batches={course.batches} title={course.title} />
          <PopularCourses />
          <BecomeProjectManager />
          <ThreeStepApproach />
          <BenifitsOfCourse />
          <LearnersStories />
          <Mentors />
          <FAQs />
        </>
      )}
    </main>
  );
};

export default CourseDetails;
