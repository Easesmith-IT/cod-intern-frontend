"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { KeyHighlight } from './key-highlight';
import highlights from "@/data/highlights.json";

export const KeyHighlights = () => {
  return (
    <section className="section-container pb-28">
      <Carousel className="w-full">
        <div className="flex justify-between items-center gap-5">
          <div>
            <h2 className="text-[46px] font-medium leading-14 max-w-[788px]">
              <span className="text-main">What Makes Our</span> Data Science &
              AI Course Stand Out
              <Image
                src="/ellipse-group.svg"
                className="inline-block ml-2"
                width={46}
                height={16}
                alt="Ellipse"
              />
            </h2>
            <p className="max-w-[491px] font-stolzl font-book text-para mt-4">
              Every Feature Empowers the Career You’ve Always Wanted
            </p>
          </div>
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
          {highlights.map((highlight, index) => (
            <KeyHighlight key={index} highlight={highlight} />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
