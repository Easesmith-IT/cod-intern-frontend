import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

export const HeroSectionContent = ({ course }) => {
  const {
    title,
    description,
    studentBenefits,
    courseHighlights,
    batches,
    pricing,
    savedAmount,
  } = course;

  return (
    <div className="z-10 relative">
      <CustomBreadCrumb
        options={[
          { label: "Home", url: "/", isLink: true },
          { label: course.title, url: "", isLink: false },
        ]}
      />
      <div className="flex flex-wrap gap-5 items-center mt-8">
        {courseHighlights.map((item, index) => (
          <div
            key={index}
            className="py-1.5 px-3 flex gap-2 items-center bg-[#FFFFFF80] rounded-2xl"
          >
            <Image
              src="/ai-powered.svg"
              width={18}
              height={18}
              alt="ai-powered"
            />
            <span className="font-stolzl text-para-3 text-xs md:text-sm font-book">
              {item.label}
            </span>
          </div>
        ))}
        {/* <div className="py-1.5 px-3 flex gap-2 items-center bg-[#FFFFFF80] rounded-2xl">
          <Image
            src="/ai-powered.svg"
            width={18}
            height={18}
            alt="ai-powered"
          />
          <span className="font-stolzl text-para-3 text-xs md:text-sm font-book">
            AI-Powered
          </span>
        </div>
        <div className="py-1.5 px-3 flex gap-2 items-center bg-[#FFFFFF80] rounded-2xl">
          <Image
            src="/gov-certified.svg"
            width={18}
            height={18}
            alt="gov-certified"
          />
          <span className="font-stolzl capitalize text-para-3 text-xs md:text-sm font-book">
            goverment certified
          </span>
        </div>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 28.2%, rgba(255, 255, 255, 0) 101.32%)",
          }}
          className="py-1.5 px-3 flex gap-2 items-center border-l border-main"
        >
          <Image src="/clock-2.svg" width={18} height={18} alt="clock" />
          <span className="font-stolzl capitalize text-para-3 text-xs md:text-sm font-book">
            Course updated in May’25
          </span>
        </div> */}
      </div>
      <h1 className="font-stolzl text-3xl leading-10 md:leading-14 md:text-5xl font-bold text-heading mt-8 max-w-[700px]">
        {title}
      </h1>
      <p className="font-stolzl text-para font-normal mt-5 text-sm md:text-base max-w-3xl">
        {description}
      </p>

      <div className="flex flex-wrap gap-5 mt-6">
        {studentBenefits.map((item, index) => (
          <div
            key={index}
            className="font-stolzl text-xs md:text-sm text-para-3 rounded-2xl border border-border-1 px-4 py-1.5"
          >
            {item.label}
          </div>
        ))}
        {/* <div className="font-stolzl text-xs md:text-sm text-para-3 rounded-2xl border border-border-1 px-4 py-1.5">
          6 Months Online Course
        </div>
        <div className="font-stolzl text-xs md:text-sm text-para-3 rounded-2xl border border-border-1 px-4 py-1.5">
          100% Refund if not hired
        </div> */}
      </div>

      <div className="flex max-[560px]:flex-col justify-center lg:justify-start gap-5 mt-4">
        <div className="p-3 bg-gradient-to-r sm:w-[299px] text-white from-main to-para-3 rounded-md">
          <div className="flex gap-3 items-center justify-between">
            <p className="font-stolzl text-sm md:text-base font-book">
              BATCH STARTS ON
            </p>
            <div className="bg-[#FFFFFF1A] px-2 py-1.5 rounded-md font-stolzl text-[10px] md:text-xs">
              {batches.length > 0 && batches[0]?.seatsLimit > 40
                ? `${batches[0]?.seatsLimit} Seats`
                : "Limited Seats"}
            </div>
          </div>
          <p className="font-stolzl text-base md:text-xl font-medium mt-4">
            {batches.length > 0
              ? format(new Date(batches[0]?.startDate), "dd MMM, yyyy")
              : "Coming Soon"}
          </p>
        </div>
        <div className="p-3 bg-gradient-to-r sm:w-[299px] bg-white rounded-md">
          <div className="flex gap-3 items-center justify-between">
            <p className="font-stolzl text-sm md:text-base font-book uppercase">
              course fee
            </p>
            <div className="bg-[#9237E31A] capitalize text-main px-2 py-1.5 rounded-md font-stolzl text-[10px] md:text-xs">
              Valid for Today
            </div>
          </div>
          <div className="flex gap-4 items-center mt-4">
            <p className="font-stolzl text-base md:text-xl font-medium">
              ₹{pricing.discountPrice}
            </p>
            <p className="font-stolzl text-sm md:text-base line-through text-[#626066] font-normal">
              ₹{pricing.price}
            </p>
            <p className="font-stolzl text-[10px] md:text-xs text-[#62606699] font-book">
              Save {savedAmount}/-
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
