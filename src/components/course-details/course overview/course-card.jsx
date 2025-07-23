import Image from "next/image";
import React from "react";
import { Info } from "./info";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CourseCard = () => {
  return (
    <div className="shadow-[0px_8px_25px_0px_#0000001A] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-0 p-3 rounded-md">
      <Image
        src="/course-img.jpg"
        className="w-full rounded-md"
        width={453}
        height={127}
        alt="course-img"
      />
      <div className="mt-2 px-2">
        <div className="flex justify-between items-center gap-4 mb-4">
          <h3 className="font-stolzl text-sm sm:text-base font-medium">
            Include This Course
          </h3>
          <p className="font-stolzl flex gap-1 items-center">
            <span className="text-[#9D9D9D] text-xs sm:text-sm">Costs:</span>
            <span className="text-main font-bold text-sm sm:text-base">Rs.1995</span>
            <span className="text-xs sm:text-sm line-through text-[#9D9D9D]">
              Rs.2495
            </span>
          </p>
        </div>
        <Info
          src="/instructor.svg"
          alt="Instructor"
          title="Instructor"
          desc="Barry Tone"
        />
        <Info src="/lessons.svg" alt="Lessons" title="Lessons" desc="35" />
        <Info
          src="/duration.svg"
          alt="Duration"
          title="Duration"
          desc="5 Days"
        />
        <Info
          src="/enrolled.svg"
          alt="Enrolled"
          title="Enrolled"
          desc="50 Students"
        />
        <Info src="/venue.svg" alt="Venue" title="Venue" desc="Online" />
      </div>
      <div className="mt-4">
        <p className="font-stolzl text-base sm:text-lg font-medium">Payment:</p>
        <div className="flex gap-1 items-center mt-2">
          <Image src="/visa.svg" width={36} height={23} alt="Visa" />
          <Image
            src="/master-card.svg"
            width={36}
            height={23}
            alt="Master Card"
          />
          <Image src="/discover.svg" width={36} height={23} alt="Discover" />
          <Image
            src="/american-express.svg"
            width={36}
            height={23}
            alt="American Express"
          />
        </div>
      </div>
      <Button
        className="mt-4 rounded w-full"
        size="xl"
        variant="linearGradient"
      >
        <span>View Cart</span>
        <ArrowRight />
      </Button>
    </div>
  );
};
