"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { Tab } from "./tab";

export const CourseOverviewSection = () => {
  const [selectedTab, setSelectedTab] = useState("course-overview");

  return (
    <div>
      <div className="flex md:grid grid-cols-4 overflow-x-auto">
        <Tab
          active={selectedTab === "course-overview"}
          alt="Homework"
          onClick={() => setSelectedTab("course-overview")}
          src="/Homework.svg"
          src1="/homework-dark.svg"
          title="Course Overview"
        />
        <Tab
          active={selectedTab === "syllabus"}
          alt="Syllabus"
          onClick={() => setSelectedTab("syllabus")}
          src="/syllabus.svg"
          src1="/syllabus-dark.svg"
          title="Syllabus"
        />
        <Tab
          active={selectedTab === "key-highlights"}
          alt="Key Highlights"
          onClick={() => setSelectedTab("key-highlights")}
          src="/star-1.svg"
          src1="/star-1-dark.svg"
          title="Key Highlights"
        />
        <Tab
          active={selectedTab === "certifications"}
          alt="Certifications"
          onClick={() => setSelectedTab("certifications")}
          src="/certification.svg"
          src1="/certification-dark.svg"
          title="Certifications"
        />
      </div>

      <h2 className="text-xl md:text-2xl font-bold font-stolzl mt-7 text-para-3">
        Course Overview
      </h2>
      <p className="mt-3 font-stolzl text-xs md:text-base font-book text-para">
        Immerse yourself in the heart of our AI-powered programs. This overview
        gives you a complete glance at what you'll study, the skills you'll
        develop, and how our experiential learning approach gets you ready to
        tackle real-world industry challenges. Learn the revolutionary
        experience awaiting you with CodIntern's professionally crafted
        curriculum and cutting-edge tools
        {/* <button className="font-medium text-main">Read More</button> */}
      </p>
    </div>
  );
};
