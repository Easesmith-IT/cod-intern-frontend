import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const UpcomingBatch = () => {
  return (
    <section className="section-container py-28">
      <h2 className="text-[46px] font-medium leading-14 text-center">
        <span className="text-main">Our Upcoming</span> Batch
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>

      <div className="flex justify-between gap-10 mt-12">
        <div className="flex gap-5 relative">
          <Image
            src="/upcoming-batch-img.jpg"
            width={543}
            height={388}
            alt="upcoming-batch-img"
            className="relative z-[2] rounded-[21px]"
          />
          <Image
            src="/upcoming-batch-img-1.jpg"
            width={528}
            height={373}
            alt="upcoming-batch-img-1"
            className="absolute -bottom-4 -left-4 z-0"
          />
          <div className="bg-white text-para-3 rounded-2xl px-4 py-1 absolute top-3 left-3 z-[3] text-sm font-stolzl">
            Data Science and AI Course
          </div>
        </div>
        <div className="">
          <h3 className="font-stolzl font-medium text-para-3 text-4xl max-w-[667px] leading-11">
            Get Industry-Ready with Codintern
          </h3>
          <ul className="mt-5 space-y-4 list-disc ml-5">
            <li className="font-stolzl text-sm text-para">
              Enroll for 1 Course & Get Access to All Courses.
            </li>
            <li className="font-stolzl text-sm text-para">
              In-depth curriculum with only 20 Seats Per Batch.
            </li>
            <li className="font-stolzl text-sm text-para">
              Integrated Internship & 2 Global Certifications
            </li>
            <li className="font-stolzl text-sm text-para">
              Practice on HackerRank & LeetCode
            </li>
            <li className="font-stolzl text-sm text-para">
              Corporate Visits & dedicated 6-month On-Job Support.
            </li>
          </ul>

          <div className="flex gap-5 justify-between items-center mt-10">
            <div>
              <h4 className="font-stolzl font-normal text-xl text-para-3">
                Upcoming Batch Starts In
              </h4>
              <div className="flex items-center font-stolzl mt-4">
                <div className="flex justify-center gap-2 border h-12 px-2 py-1 rounded items-center p-2">
                  <span className="text-2xl text-para-3">47</span>
                  <span className="text-sm text-[#A49DAE]">hrs</span>
                </div>
                <p className="px-2">:</p>
                <div className="flex justify-center gap-2 border h-12 px-2 py-1 rounded items-center p-2">
                  <span className="text-2xl text-para-3">59</span>
                  <span className="text-sm text-[#A49DAE]">mins</span>
                </div>
                <p className="px-2">:</p>
                <div className="flex justify-center gap-2 border h-12 px-2 py-1 rounded items-center p-2">
                  <span className="text-2xl text-para-3">45</span>
                  <span className="text-sm text-[#A49DAE]">sec</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-stolzl text-main">
                Hurry only 2 seats left !!
              </p>
              <Button
                size="lg"
                variant="linearGradient"
                className="rounded-sm px-5 h-12 mt-4"
              >
                View Batch Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
