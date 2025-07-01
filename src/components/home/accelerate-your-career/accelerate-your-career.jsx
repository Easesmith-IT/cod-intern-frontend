import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SingleCard } from "./single-card";

export const AccelerateYourCareer = () => {
  return (
    <section className="py-28 section-container">
      <div className="flex justify-center text-center section-container max-w-[900px]">
        <h2 className="text-[46px] font-medium leading-14">
          <span className="text-main">Accelerate Your Career</span> with Our
          Industry-Aligned Courses
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="step"
          />
        </h2>
      </div>

      <Carousel className="max-w-6xl mx-auto w-full">
        <CarouselContent className="mt-10">
          {Array.from({ length: 7 }).map((_, index) => (
            <SingleCard key={index} />
          ))}
        </CarouselContent>
        <CarouselPrevious variant="default" />
        <CarouselNext variant="default" />
      </Carousel>
    </section>
  );
};
