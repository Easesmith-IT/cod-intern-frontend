import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React from "react";

export const Mentor = ({ img, name, position, proficiency = [] }) => {
  return (
    <Card className="border-border-1 rounded-md h-[650px] xl:h-auto">
      <CardContent>
        <Image
          src={img}
          width={458}
          height={396}
          className="object-cover max-w-[358px] sm:max-w-[458px] w-full max-h-[396px] h-full"
          alt="mentor"
        />

        <div className="mt-5">
          <h3 className="font-stolzl font-medium md:text-2xl">{name}</h3>
          <p>
            {/* <span className="font-stolzl font-normal text-sm text-[#00000080]">
              Ex-
            </span> */}
            <span className="font-stolzl font-medium text-sm inline-block">
              {position}
            </span>
          </p>
          {proficiency.length > 0 && (
            <>
              <p className="font-stolzl text-sm sm:text-base font-normal mt-10">
                Proficient At:
              </p>
              <div className="flex gap-2 flex-wrap items-center mt-2 capitalize">
                {proficiency.map((item, index) => (
                  <div
                    key={index}
                    className="bg-main rounded-md text-white py-1 px-1.5 text-xs sm:text-sm font-stolzl font-normal"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

Mentor.Skeleton = function MentorSkeleton() {
  return (
    <Card className="border-border-1 rounded-md h-[650px] xl:h-auto">
      <CardContent>
        {/* Image Skeleton */}
        <Skeleton className="object-cover max-w-[358px] sm:max-w-[458px] w-full max-h-[396px] h-[396px] rounded-md" />

        <div className="mt-5 space-y-3">
          {/* Name */}
          <Skeleton className="h-6 w-2/3 rounded" />
          {/* Position */}
          <Skeleton className="h-4 w-1/3 rounded" />

          <div className="mt-10 space-y-2">
            <Skeleton className="h-4 w-1/4 rounded" />
            <div className="flex gap-2 flex-wrap items-center mt-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-16 rounded-md" />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
