"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CourseCard } from "./course-card";
import { CourseCategory } from "./course-category";
import { useState } from "react";
import courseCategory from "@/data/courseCategory.json";

export const PopularCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState("web_development");

  return (
    <section className="section-container">
      <div className="flex justify-center text-center section-container px-0 max-w-[900px]">
        <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl lg:text-[46px] font-medium capitalize">
          <span className="text-main">Our flagship</span> course offerings
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="Ellipse"
          />
        </h2>
      </div>

      <p className="max-w-5xl mx-auto text-center text-xs lg:text-base font-stolzl font-book text-para mt-4">
        Provides a range of AI-powered courses created especially to prepare
        students for the demands of the tech-driven workforce. These programs
        use intelligent systems to offer individualized learning paths,
        guaranteeing that participants acquire state-of-the-art,
        industry-relevant AI skills and get ready for positions in a workplace
        that is becoming more automated and data-driven.
      </p>

      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="max-w-7xl mx-auto w-full px-12 py-3 mt-10"
      >
        <CarouselContent className="-ml-3">
          {courseCategory.map((category, index) => (
            <CourseCategory
              key={index}
              index={index}
              name={category.name}
              label={category.label}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious variant="default" className="left-0 z-10" />
        <CarouselNext variant="default" className="right-0 z-10" />
      </Carousel>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        <CourseCard
          src="/course/Data Analysis using Python.png"
          name="Data Analysis using Python"
        />
        <CourseCard
          src="/course/Data Visualization using Power BI.png"
          name="Data Visualization using Power BI"
        />
        <CourseCard
          src="/course/Data Visualization using Tableau.png"
          name="Data Visualization using Tableau"
        />
        <CourseCard
          src="/course/Machine Learning and Artificial Intelligence with Python.png"
          name="Machine Learning and Artificial Intelligence with Python"
        />
      </div>

      <div className="flex justify-center mt-8">
        <Button
          size="lg"
          variant="linearGradient"
          className="rounded-sm px-3 h-10 md:px-5 md:h-12 text-xs sm:text-sm"
        >
          View More
        </Button>
      </div>
    </section>
  );
};
