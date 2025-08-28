import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { CourseOverviewSection } from "./course-overview-section";
import { WhatCourseIncludes } from "./what-course-includes";
import { CourseCard } from "./course-card";

export const CourseOverview = ({ course }) => {
  return (
    <section className="section-container grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 pt-12 md:pt-24">
      <div className="w-full">
        <CourseOverviewSection course={course} />
        <WhatCourseIncludes
          modules={course.modules}
          syllabusFile={course.syllabusFile}
        />
      </div>
      <div>
        <CourseCard course={course} />
      </div>
    </section>
  );
};
