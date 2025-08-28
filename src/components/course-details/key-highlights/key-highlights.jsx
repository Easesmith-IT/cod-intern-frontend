"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { KeyHighlight } from "./key-highlight";
import highlights from "@/data/highlights.json";

export const KeyHighlights = ({title}) => {
  return (
    <section
      id="key-highlights"
      className="section-container pb-12 md:pb-24 scroll-mt-52"
    >
      <Carousel className="w-full">
        <div className="flex justify-between items-center gap-5">
          <div>
            <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl  font-medium max-w-[788px]">
              <span className="text-main">What Makes Our</span> {title} Course
              Stand Out
              <Image
                src="/ellipse-group.svg"
                className="inline-block ml-2"
                width={46}
                height={16}
                alt="Ellipse"
              />
            </h2>
            <p className="max-w-[491px] text-xs sm:text-sm md:text-base font-stolzl font-book text-para mt-4">
              Every Feature Empowers the Career You’ve Always Wanted
            </p>
          </div>
          <div className="hidden md:flex gap-4">
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
          {highlights.map((highlight, index) => (
            <KeyHighlight key={index} highlight={highlight} />
          ))}
        </CarouselContent>
        <div className="md:hidden flex justify-center mt-6 gap-4">
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
      </Carousel>
    </section>
  );
};
