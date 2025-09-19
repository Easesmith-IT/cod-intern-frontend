"use client";

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
import { useApiQuery } from "@/hooks/useApiQuery";
import { useMemo } from "react";

export default function Home() {
  const {
    data: contentData,
    isLoading,
    isError,
  } = useApiQuery({
    url: "/student/content/home", // pageName = "home"
    queryKeys: ["content", "home"],
  });

  console.log("contentData", contentData);

  const getDataBySection = (sectionName, pageName = "home") => {
    return contentData?.data?.find(
      (section) =>
        section.pageName === pageName && section.sectionName === sectionName
    );
  };

  const threeStepData = useMemo(
    () => getDataBySection("three-step-approach"),
    [contentData]
  );

  const popularCoursesData = useMemo(
    () => getDataBySection("popular-courses"),
    [contentData] // only recompute when contentData changes
  );

  const sharpenYourSkillData = useMemo(
    () => getDataBySection("sharpen-your-skill"),
    [contentData] // only recompute when contentData changes
  );

  const universitiesData = useMemo(
    () => getDataBySection("universities"),
    [contentData] // only recompute when contentData changes
  );

  const whyCodInternsData = useMemo(
    () => getDataBySection("why-cod-interns"),
    [contentData] // only recompute when contentData changes
  );

  const learningToCareerData = useMemo(
    () => getDataBySection("learning-to-career"),
    [contentData] // only recompute when contentData changes
  );

  const connectWithUsData = useMemo(
    () => getDataBySection("connect-with-us"),
    [contentData] // only recompute when contentData changes
  );

  const weJustKeepGrowingData = useMemo(
    () => getDataBySection("we-just-keep-growing"),
    [contentData] // only recompute when contentData changes
  );

  const mentorsData = useMemo(
    () => getDataBySection("mentors"),
    [contentData] // only recompute when contentData changes
  );

  return (
    <section>
      <HeroSection />
      <ThreeStepApproach data={threeStepData} isLoading={isLoading} />
      <FreshJobs />
      <AccelerateYourCareer />
      <PopularCourses contentData={popularCoursesData} />
      <SharpenYourSkill data={sharpenYourSkillData} />
      <Universities data={universitiesData} />
      <WhyCodInterns data={whyCodInternsData} />
      <LearningToCareer data={learningToCareerData} isLoading={isLoading} />
      <ConnectWithUs data={connectWithUsData} />
      <WeJustKeepGrowing data={weJustKeepGrowingData} />
      <LearnersStories />
      <Mentors data={mentorsData} isLoading={isLoading} />
      <FAQs />
    </section>
  );
}
