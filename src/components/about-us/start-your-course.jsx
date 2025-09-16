import Image from "next/image";
import React from "react";
import { Skeleton } from "../ui/skeleton";

export const StartYourCourse = ({ data, isLoading }) => {
  const { content, images } = data || {};

  return (
    <section className="py-10 md:py-0 md:h-[316px] bg-para-3 ">
      <div className="section-container h-full flex flex-col md:flex-row gap-10 md:gap-5 justify-between overflow-hidden items-center relative">
        <Image
          src="/about-us/start-your-course.png"
          className="absolute left-1/6"
          width={1000}
          height={316}
          alt="start-your-course"
        />
        <h3 className="max-w-[400px] font-stolzl text-white text-2xl leading-10 lg:leading-14 md:text-4xl  text-center md:text-left font-medium">
          Lets Start Your Course With Us?
        </h3>

        {isLoading ? (
          <div className="flex justify-between gap-4 md:gap-8 w-full md:w-[50%] ml-auto">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="space-y-4 flex flex-col items-center w-full"
              >
                <Skeleton className="size-16" />
                <Skeleton className="w-[90%] h-4" />
                <Skeleton className="w-[70%] h-4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-4 sm:gap-10 md:gap-20 lg:gap-32">
            {content?.stats.map((stat, index) => (
              <div
                key={index}
                className="text-white space-y-4 flex flex-col items-center"
              >
                <Image
                  src={images?.[index]?.image || "/about-us/reviews.svg"}
                  width={37}
                  height={37}
                  alt="Reviews"
                />
                <h3 className="font-stolzl text-lg sm:text-2xl md:text-4xl font-medium">
                  {stat.number}
                </h3>
                <p className="font-book text-sm sm:text-base font-stolzl text-center">
                  {stat.label}
                </p>
              </div>
            ))}
            {/* <div className="text-white space-y-4 flex flex-col items-center">
            <Image
              src="/about-us/reviews.svg"
              width={37}
              height={37}
              alt="Reviews"
            />
            <h3 className="font-stolzl text-lg sm:text-2xl md:text-4xl font-medium">
              100+
            </h3>
            <p className="font-book text-sm sm:text-base font-stolzl text-center">
              Company Reviews
            </p>
          </div>
          <div className="text-white space-y-4 flex flex-col items-center">
            <Image
              src="/about-us/reviews.svg"
              width={37}
              height={37}
              alt="Reviews"
            />
            <h3 className="font-stolzl text-lg sm:text-2xl md:text-4xl font-medium">
              200+
            </h3>
            <p className="font-book text-sm sm:text-base font-stolzl text-center">
              Students Placed
            </p>
          </div>
          <div className="text-white space-y-4 flex flex-col items-center">
            <Image
              src="/about-us/reviews.svg"
              width={37}
              height={37}
              alt="Reviews"
            />
            <h3 className="font-stolzl text-lg sm:text-2xl md:text-4xl font-medium">
              100+
            </h3>
            <p className="font-book text-sm sm:text-base font-stolzl text-center">
              Job Openings
            </p>
          </div> */}
          </div>
        )}
      </div>
    </section>
  );
};
