import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Feature } from "./feature";

export const WhyCodInterns = () => {
  return (
    <section className="section-container py-28 flex gap-32">
      <div className="max-w-[520px]">
        <h2 className="text-[46px] capitalize w-full font-medium leading-14">
          <span className="text-main">Why Learners</span> across domains choose
          codIntern courses
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="step"
          />
        </h2>

        <p className="mt-5 font-stolzl w-full font-book text-para">
          Lorem ipsum dolor sit amet consectetur. Proin duis orci aliquam arcu
          nam ligula. Velit nec ultrices pharetra bibendum pharetra. Quam
          adipiscing mauris ultrices at. Enim ullamcorper nibh potenti egestas
          cras.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="max-w-3xl"
      >
        <CarouselContent className="-ml-3">
          {Array.from({ length: 7 }).map((_, index) => (
            <Feature key={index} index={index} />
          ))}
        </CarouselContent>
        <div className="flex gap-8 items-center mt-10">
          <CarouselPrevious variant="default" className="static" />
          <CarouselNext variant="default" className="static" />
        </div>
      </Carousel>
    </section>
  );
};
