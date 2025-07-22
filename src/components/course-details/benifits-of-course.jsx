import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";

export const BenifitsOfCourse = () => {
  return (
    <section className="section-container h-[760px] relative">
      <h2 className="text-[46px] font-medium capitalize text-center leading-14 max-w-[680px] mx-auto">
        <span className="text-main">Advantages of Enrolling</span> in a
        CodIntern Course
      </h2>
      <Image
        src="/benefits-of-course-bg.jpg"
        width={779}
        height={779}
        className="absolute -top-1 left-1/2 -translate-x-1/2  z-[-1]"
        alt="benefits of course"
      />

      <Image
        src="/benefit-img.jpg"
        width={310}
        height={249}
        className="mx-auto mt-10"
        alt="benefit"
      />

      <Image
        src="/benefit-4.jpg"
        width={340}
        height={249}
        className="mx-auto mt-32"
        alt="benefit"
      />

      <Image
        src="/benefit.jpg"
        width={343}
        height={250}
        className="absolute -top-1 left-0"
        alt="benefit"
      />

      <Image
        src="/benefit-1.jpg"
        width={309}
        height={249}
        className="absolute -top-1 right-0"
        alt="benefit"
      />
      <Image
        src="/benefit-2.jpg"
        width={309}
        height={249}
        className="absolute top-80 left-20"
        alt="benefit"
      />
      {/* <div className="absolute top-80 left-20 ">
        <div className="w-[270px] h-[179px] z-[5] bg-[#FEF7E9] rounded-xl"></div>
        <div className="w-[261px] h-[205px] absolute top-8 -left-4 z-10 bg-[#FFFFFF99] rounded-3xl"></div>
        <div className="w-[245px] h-[214px] absolute top-14 shadow-[0px_0px_34.78px_0px_#0000001A] -left-4 z-20 p-4 bg-white rounded-3xl">
          <div className="flex justify-between items-center gap-2">
            <h3 className="font-stolzl font-medium">TOP COURSE OFFERINGS</h3>
            <div className="w-[37px] h-[34px] bg-main rounded-lg flex justify-center items-center">
              <Image src="/book.svg" width={18} height={18} alt="Book" />
            </div>
          </div>
          <Separator className="mt-3 mb-4" />

          <ul className="flex flex-col gap-3">
            <li className="flex gap-2 items-center">
              <div className="size-2 rounded-full bg-gradient-to-r from-main to-para-3" />
              <span className="font-stolzl font-medium text-xs">
                Digital Marketing
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <div className="size-2 rounded-full bg-gradient-to-r from-main to-para-3" />
              <span className="font-stolzl font-medium text-xs">SEO</span>
            </li>
            <li className="flex gap-2 items-center">
              <div className="size-2 rounded-full bg-gradient-to-r from-main to-para-3" />
              <span className="font-stolzl font-medium text-xs">
                Business Analysis
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <div className="size-2 rounded-full bg-gradient-to-r from-main to-para-3" />
              <span className="font-stolzl font-medium text-xs">
                Project Management
              </span>
            </li>
          </ul>
        </div>
      </div> */}
      <Image
        src="/benefit-3.jpg"
        width={268}
        height={249}
        className="absolute top-80 right-20"
        alt="benefit"
      />
    </section>
  );
};
