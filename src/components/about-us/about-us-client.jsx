"use client";

import React, { useMemo } from "react";
import { HeroSection } from "./hero";
import { AchieveYourGoals } from "./achieve-your-goals";
import { StartYourCourse } from "./start-your-course";
import { ExpertInstructorLiveClasses } from "./expert-instructor-live-classes/expert-instructor-live-classes";
import { Mentors } from "./mentors/mentors";
import { LearningToCareer } from "../home/learning-to-career/learning-to-career";
import { LearnersStories } from "../home/learners-stories/learners-stories";
import { useApiQuery } from "@/hooks/useApiQuery";
import { ShapingFutures } from "./shaping-futures/shaping-futures";

export const AboutUsClient = () => {
  const {
    data: contentData,
    isLoading,
    isError,
  } = useApiQuery({
    url: "/student/content/about-us", // pageName = "about-us"
    queryKeys: ["content", "about-us"],
  });

  console.log("contentData", contentData);

  const getDataBySection = (sectionName, pageName = "about-us") => {
    return contentData?.data?.find(
      (section) =>
        section.pageName === pageName && section.sectionName === sectionName
    );
  };

  const heroData = useMemo(() => getDataBySection("hero"), [contentData]);

  const achieveYourGoalsData = useMemo(
    () => getDataBySection("achieve-your-goals"),
    [contentData]
  );

  const shapingFuturesData = useMemo(
    () => getDataBySection("shaping-futures"),
    [contentData]
  );

  const startYourCourseData = useMemo(
    () => getDataBySection("start-your-course"),
    [contentData]
  );

  const expertInstructorLiveClassesData = useMemo(
    () => getDataBySection("expert-instructor-live-classes"),
    [contentData]
  );

  const mentorsData = useMemo(
    () => getDataBySection("mentors"),
    [contentData] // only recompute when contentData changes
  );

  const learningToCareerData = useMemo(
    () => getDataBySection("learning-to-career"),
    [contentData] // only recompute when contentData changes
  );

  return (
    <div>
      <HeroSection data={heroData} isLoading={isLoading} />
      <AchieveYourGoals data={achieveYourGoalsData} isLoading={isLoading} />
      <ShapingFutures data={shapingFuturesData} isLoading={isLoading} />
      {/* <EvolutionOFCodIntern /> comment this */}
      <StartYourCourse data={startYourCourseData} isLoading={isLoading} />
      <ExpertInstructorLiveClasses
        data={expertInstructorLiveClassesData}
        isLoading={isLoading}
      />
      <Mentors data={mentorsData} isLoading={isLoading} />
      <LearningToCareer
        data={learningToCareerData}
        isLoading={isLoading}
        className="py-12 sm:py-24"
      />
      <LearnersStories className="!pt-0" />
    </div>
  );
};
