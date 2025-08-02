import Image from "next/image";
import React from "react";
import { ActiveCourseCard } from "./active-course-card";
import { Button } from "@/components/ui/button";

export const MyActiveCourses = () => {
  return (
    <section className="section-container">
      <div className="relative max-w-[511px] mx-auto">
        <h2 className="text-2xl font-stolzl relative z-10 leading-9 lg:leading-14 md:text-4xl  font-medium capitalize text-center">
          <span className="text-main">My Active</span> Courses
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="Ellipse"
          />
        </h2>
        {/* <Image
          src="/Rectangle.svg"
          className="absolute right-[27%] sm:right-[18%] w-[200px] sm:w-[257px] bottom-2"
          width={257}
          height={14}
          alt="Rectangle"
        /> */}
      </div>
      <p className="text-center font-stolzl text-para mt-2 text-xs sm:text-para">
        Here’s what you’re currently learning
      </p>

      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <ActiveCourseCard
          img="/profile/course-img.jpg"
          title="UI/UX Design Fund"
          instructor="Amina Yusuf"
          progress={0}
        />
        <ActiveCourseCard
          img="/profile/course-img.jpg"
          title="UI/UX Design Fund"
          instructor="Amina Yusuf"
          progress={40}
        />
        <ActiveCourseCard
          img="/profile/course-img.jpg"
          title="UI/UX Design Fund"
          instructor="Amina Yusuf"
          progress={10}
        />
        <ActiveCourseCard
          img="/profile/course-img.jpg"
          title="UI/UX Design Fund"
          instructor="Amina Yusuf"
          progress={80}
        />
      </div>

      <div className="flex justify-center">
        <Button variant="linearGradient" size="xl" className="mt-6 rounded-sm">
          See more
        </Button>
      </div>
    </section>
  );
};
