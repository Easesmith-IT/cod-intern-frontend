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
    <section className="py-24 section-container">
      <div className="flex justify-center text-center section-container max-w-[900px]">
        <h2 className="text-[46px] font-medium leading-14 capitalize">
          <span className="text-main">Fast-Track Your Career</span> with
          Industry-Aligned Courses
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="Ellipse"
          />
        </h2>
      </div>

      <Carousel className="max-w-6xl mx-auto w-full">
        <CarouselContent className="mt-10">
          <SingleCard
            index={0}
            title="Data Science & Analytics with AI"
            desc="Analyze data and build AI models using Python, SQL, and machine learning techniques."
            timing="8-10 Months Campus & Online Training"
          />
          <SingleCard
            index={1}
            title="Python Full Stack Development"
            desc="Build dynamic web applications using Python, Django, and front-end technologies."
            timing="8-10 Months Campus & Online Training"
          />
          <SingleCard
            index={2}
            title="Java Full Stack Development"
            desc="Develop robust applications with Java, Spring Boot, and modern front-end tools."
            timing="8-10 Months Campus & Online Training"
          />
          <SingleCard
            index={3}
            title="DevOps with AWS"
            desc="Build dynamic web applications using Python, Django, and front-end technologies"
            timing="6-8 Months Campus & Online Training"
          />
          <SingleCard
            index={4}
            title="Digital Marketing with AI"
            desc="Master digital marketing strategies enhanced with AI tools and analytics."
            timing="8-10 Months Campus & Online Training"
          />
          <SingleCard
            index={5}
            title="Software Testing With AI"
            desc="Test software quality with manual methods and automation tools like Selenium and JIRA"
            timing="4-6 Months Campus & Online Training"
          />
        </CarouselContent>
        <CarouselPrevious variant="default" />
        <CarouselNext variant="default" />
      </Carousel>
    </section>
  );
};
