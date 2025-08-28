import Image from "next/image";
import React from "react";
import { Module } from "./module";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { formatMinutes } from "@/lib/utils";

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

export const WhatCourseIncludes = ({ modules, syllabusFile = "" }) => {
  return (
    <div id="syllabus" className="mt-28 scroll-mt-52">
      <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl  font-medium">
        <span className="text-main">What This Course</span> Offers
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>

      {modules.length > 0 && (
        <div className="flex flex-col gap-5 mt-10">
          {modules.map((item, index) => (
            <Module
              key={index}
              title={item.title}
              duration={formatMinutes(item.duration)}
              // duration={formatMinutes(2000)}
              list={item.lessons}
            />
          ))}

          {/* <Module title="Module 2" duration="3 Weeks" list={list} />
        <Module title="Module 3" duration="3 Weeks" list={list} />
        <Module title="Module 4" duration="3 Weeks" list={list} />
        <Module title="Module 5" duration="3 Weeks" list={list} /> */}
        </div>
      )}
      {modules.length === 0 && (
        <p className="text-muted-foreground">No Modules added.</p>
      )}
      <div className="flex justify-start mt-10">
        {syllabusFile && (
          <a
            href={syllabusFile} // replace with your syllabus file URL
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto"
          >
            <Button
              size="xl"
              variant="codIntern"
              className="rounded flex items-center gap-2"
            >
              <span>Download Syllabus</span>
              <Download className="size-5" />
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};
