import { CourseCard } from '@/components/home/popular-courses/course-card';
import Image from 'next/image';
import React from 'react'

export const RecommendedCourses = () => {
  return (
    <section className="section-container pb-12 md:pb-24">
      <div className="relative max-w-[611px] mx-auto">
        <h2 className="text-2xl font-stolzl relative z-10 leading-9 lg:leading-14 md:text-4xl lg:text-[46px] font-medium capitalize text-center">
          <span className="text-main">Recommended</span> Courses
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
      <p className="text-center font-stolzl text-xs sm:text-para text-para mt-2 max-w-[900px] mx-auto">
        Lorem ipsum dolor sit amet consectetur. Scelerisque suspendisse in nisl
        urna pharetra faucibus pharetra felis. Nam lorem massa purus eget aenean
        massa suspendisse.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        <CourseCard
          src="/course/Data Analysis using Python.png"
          name="Data Analysis using Python"
        />
        <CourseCard
          src="/course/Data Visualization using Power BI.png"
          name="Data Visualization using Power BI"
        />
        <CourseCard
          src="/course/Data Visualization using Tableau.png"
          name="Data Visualization using Tableau"
        />
        <CourseCard
          src="/course/Machine Learning and Artificial Intelligence with Python.png"
          name="Machine Learning and Artificial Intelligence with Python"
        />
      </div>
    </section>
  );
}
