import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CourseCard } from "./course-card";
import { CourseCategory } from "./course-category";

export const PopularCourses = () => {
  return (
    <section className="section-container">
      <div className="flex justify-center text-center section-container max-w-[900px]">
        <h2 className="text-[46px] font-medium leading-14">
          <span className="text-main">Our popular</span> courses
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="step"
          />
        </h2>
      </div>

      <p className="max-w-5xl mx-auto text-center font-stolzl font-book text-para mt-4">
        Lorem ipsum dolor sit amet consectetur. Scelerisque suspendisse in nisl
        urna pharetra faucibus pharetra felis. Nam lorem massa purus eget aenean
        massa suspendisse.
      </p>

      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="max-w-7xl mx-auto w-full px-12 mt-10"
      >
        <CarouselContent className="-ml-3">
          {Array.from({ length: 7 }).map((_, index) => (
            <CourseCategory key={index} index={index} />
          ))}
        </CarouselContent>
        <CarouselPrevious variant="default" className="left-0 z-20" />
        <CarouselNext variant="default" className="right-0 z-20" />
      </Carousel>

      <div className="grid grid-cols-4 gap-5 mt-10">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>

      <div className="flex justify-center mt-8">
        <Button
          size="lg"
          variant="linearGradient"
          className="rounded-sm px-5 h-12"
        >
          View More
        </Button>
      </div>
    </section>
  );
};
