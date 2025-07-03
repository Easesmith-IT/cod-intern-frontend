import Image from "next/image";
import React from "react";

export const BenifitsOfCourse = () => {
  return (
    <section className="section-container h-[760px] relative">
      <h2 className="text-[46px] font-medium capitalize text-center leading-14 max-w-[680px] mx-auto">
        <span className="text-main">what’s the benefits</span> to enroll course
        in Codeintern
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
