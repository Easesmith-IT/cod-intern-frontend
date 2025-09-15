import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Feature } from "./feature";

export const WhyCodInterns = ({ data }) => {
  const { content } = data || {};

  return (
    <section className="section-container py-12 sm:py-24 flex flex-col lg:flex-row gap-16 overflow-x-hidden">
      <div className="">
        <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl  font-medium lg:w-[525px]">
          <span className="text-main">What Attracts</span> Diverse Learners to
          CodIntern's Programs?
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="Ellipse"
          />
        </h2>

        <p className="mt-5 font-stolzl font-book text-xs sm:text-base text-para lg:w-[520px]">
          {content?.desc}
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="lg:max-w-3xl"
      >
        <CarouselContent className="-ml-3">
          {content?.features.map((feature, index) => (
            <Feature
              key={index}
              index={index}
              title={feature?.title}
              desc={feature?.desc}
            />
          ))}
        </CarouselContent>
        <div className="flex gap-8 items-center justify-center md:justify-start mt-10">
          <CarouselPrevious variant="default" className="static" />
          <CarouselNext variant="default" className="static" />
        </div>
      </Carousel>
    </section>
  );
};
