"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { Story } from "./story";
import Autoplay from "embla-carousel-autoplay";
import stories from "@/data/stories.json";

export const LearnersStories = () => {
  return (
    <section className="section-container py-24">
      <Carousel
        plugins={[
          Autoplay({
            delay: 1000,
            stopOnMouseEnter: true,
            stopOnInteraction:false
          }),
        ]}
        opts={{ loop: true }}
        className="w-full"
      >
        <div className="flex justify-between items-center gap-5">
          <h2 className="text-[46px] font-medium">
            <span className="text-main">Learners Who Fuel Progress</span>{" "}
            Stories That Ignite
            <Image
              src="/ellipse-group.svg"
              className="inline-block ml-2"
              width={46}
              height={16}
              alt="step"
            />
          </h2>
          <div className="flex gap-4">
            <CarouselPrevious
              //   className="static translate-0 disabled:bg-[#ababab75]"
              className="static translate-0 border w-[77px] rounded-md h-[33px] disabled:bg-[#ababab75]"
              variant="ghost"
              icon={MoveLeft}
            />
            <CarouselNext
              className="static translate-0 border w-[77px] rounded-md h-[33px] disabled:bg-[#ababab75]"
              variant="ghost"
              icon={MoveRight}
            />
          </div>
        </div>

        <CarouselContent className="mt-10">
          {stories.map((story, index) => (
            <Story
              key={index}
              desc={story.desc}
              img={story.img}
              name={story.name}
              position={story.position}
              rating={story.rating}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
