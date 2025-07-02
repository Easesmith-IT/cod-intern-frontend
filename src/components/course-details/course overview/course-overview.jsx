import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { CourseOverviewSection } from "./course-overview-section";

export const CourseOverview = () => {
  return (
    <section className="section-container grid grid-cols-[1fr_481px] gap-8 py-28">
      <div>
        <CourseOverviewSection />
      </div>
      <div>
        <div className="shadow-2xl p-3"></div>
      </div>
    </section>
  );
};
