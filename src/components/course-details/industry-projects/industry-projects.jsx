import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import { Project } from "./project";
import DataNotFound from "@/components/shared/DataNotFound";
import CustomMessage from "@/components/shared/custom-message";

export const IndustryProjects = ({ projects }) => {
  return (
    <section className="py-12 md:py-24 section-container">
      <div className="flex justify-center text-center section-container max-w-5xl">
        <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl  font-medium">
          <span className="text-main">Industry Projects</span> That Shines On
          Resumes
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="Ellipse"
          />
        </h2>
      </div>
      <p className="max-w-6xl mx-auto text-center font-stolzl text-xs sm:text-sm md:text-base font-book text-para mt-4">
        Work on real-world data projects across HR, Sales, Logistics, health,
        BFSI, E-Commerce, and more. Build a portfolio that proves your skills.
      </p>

      {projects.length > 0 && (
        <Carousel className="w-full">
          <CarouselContent className="mt-10">
            {/* {Array.from({ length: 7 }).map((_, index) => (
            <Project key={index} />
          ))} */}
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </CarouselContent>
          {projects.length > 3 && (
            <>
              <CarouselPrevious className="-left-3" variant="default" />
              <CarouselNext className="-right-3" variant="default" />
            </>
          )}
        </Carousel>
      )}

      {projects.length === 0 && (
        <CustomMessage message="No projects added yet." />
      )}
    </section>
  );
};
