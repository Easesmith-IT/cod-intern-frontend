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

export const LearnersStories = () => {
  return (
    <section className="section-container py-28">
      <Carousel
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
        opts={{ loop: true }}
        className="w-full"
      >
        <div className="flex justify-between items-center gap-5">
          <h2 className="text-[46px] font-medium">
            <span className="text-main">Learners who choose</span> growth.
            stories that inspire
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
          {Array.from({ length: 7 }).map((_, index) => (
            <Story key={index} />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
