import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";
import { Job } from "./job";

export const FreshJobs = () => {
  return (
    <section className="section-container">
      <Carousel className="w-full">
        <div className="flex justify-between items-center gap-5">
          <h2 className="text-2xl leading-8 lg:leading-14 md:text-4xl lg:text-[46px] font-medium">
            <span className="text-main">Fresh</span> Jobs
            <Image
              src="/ellipse-group.svg"
              className="inline-block ml-2"
              width={46}
              height={16}
              alt="Ellipse"
            />
          </h2>
          <div className="flex gap-4">
            <CarouselPrevious
              variant="default"
              className="static translate-0"
            />
            <CarouselNext variant="default" className="static translate-0" />
          </div>
        </div>

        <CarouselContent className="mt-10">
          {Array.from({ length: 7 }).map((_, index) => (
            <Job key={index} />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
