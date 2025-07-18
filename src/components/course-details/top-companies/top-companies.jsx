import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { Company } from "./company";
import Autoplay from "embla-carousel-autoplay";

export const TopCompanies = () => {
  return (
    <section>
      <Carousel
        plugins={[
          Autoplay({
            delay: 1000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        opts={{ loop: true }}
        className="w-full"
      >
        <div className="flex section-container justify-between items-center gap-5">
          <h2 className="text-[26px] font-medium">
            Top Companies Hiring on CodeIntern
          </h2>
          <div className="flex gap-4">
            <CarouselPrevious
              variant="default"
              className="static translate-0"
            />
            <CarouselNext variant="default" className="static translate-0" />
          </div>
        </div>

        <CarouselContent className="mt-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <Company key={index} />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
