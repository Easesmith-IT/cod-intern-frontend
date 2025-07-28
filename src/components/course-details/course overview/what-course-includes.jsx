import Image from "next/image";
import React from "react";
import { Module } from "./module";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const list = [
  "Introduction to Excel",
  "Introduction to Excel",
  "Introduction to Excel",
  "Introduction to Excel",
  "Introduction to Excel",
  "Introduction to Excel",
  "Introduction to Excel",
  "Introduction to Excel",
  "Introduction to Excel",
];

export const WhatCourseIncludes = () => {
  return (
    <div className="mt-28">
      <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl lg:text-[46px] font-medium">
        <span className="text-main">What This Course</span> Offers
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>

      <div className="flex flex-col gap-5 mt-10">
        <Module title="Module 1" duration="3 Weeks" list={list} />
        <Module title="Module 2" duration="3 Weeks" list={list} />
        <Module title="Module 3" duration="3 Weeks" list={list} />
        <Module title="Module 4" duration="3 Weeks" list={list} />
        <Module title="Module 5" duration="3 Weeks" list={list} />
      </div>
      <Button size="xl" variant="codIntern" className="mt-10 rounded">
        <span>Download Syllabus</span>
        <Download className="size-5" />
      </Button>
    </div>
  );
};
