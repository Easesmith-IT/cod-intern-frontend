"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { Tab } from "./tab";

export const CourseOverviewSection = () => {
  const [selectedTab, setSelectedTab] = useState("course-overview");

  return (
    <div>
      <div className="grid grid-cols-4">
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

      <h2 className="text-2xl font-bold font-stolzl mt-7 text-para-3">
        Course Overview
      </h2>
      <p className="mt-3 font-stolzl font-book text-para">
        Lorem ipsum dolor sit amet consectetur. Proin duis orci aliquam arcu nam
        ligula. Velit nec ultrices pharetra bibendum pharetra. Quam adipiscing
        mauris ultrices at. Enim ullamcorper nibh potenti egestas cras ut
        convallis erat. Lorem ipsum dolor sit amet consectetur. Proin duis orci
        aliquam arcu nam ligula. Velit nec ultrices pharetra bibendum pharetra.
        Quam adipiscing mauris ultrices at. Enim ullamcorper nibh potenti
        egestas cras ut convallis erat. Lorem ipsum dolor sit amet consectetur.
        Proin duis orci{" "}
        <button className="font-medium text-main">Read More</button>
      </p>
    </div>
  );
};
