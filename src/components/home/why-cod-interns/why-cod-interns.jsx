import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Feature } from "./feature";
import features from "@/data/features.json";

export const WhyCodInterns = () => {
  return (
    <section className="section-container py-12 sm:py-24 flex flex-col lg:flex-row gap-16 overflow-x-hidden">
      <div className="">
        <h2 className="text-2xl leading-8 lg:leading-14 md:text-4xl lg:text-[46px] font-medium lg:w-[525px]">
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
          Success is not just a goal at CodIntern; it is the unavoidable result
          of our learner-centric, AI-powered ecosystem. We offer the unmatched
          training, state-of-the-art support, and precise guidance required to
          turn your untapped potential into extraordinary performance and a
          career you're genuinely proud of, from clever skill mapping and
          adaptive learning paths to individualized career matching and
          professional mentoring.
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
          {features.map((feature, index) => (
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
