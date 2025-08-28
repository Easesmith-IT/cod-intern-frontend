"use client";

import { CounterItem, CounterSeperator } from "@/components/counter/counter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { usePersistentCountdown } from "@/hooks/usePersistentCountdown";
import Image from "next/image";
import Link from "next/link";

export const SingleCard = ({
  index,
  title,
  desc,
  timing,
  id,
  brochure,
  thumbnail,
  integratedInternship,
  interviews,
}) => {
  const { days, hours, minutes, seconds } = usePersistentCountdown();

  return (
    <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
      <div className="p-1">
        <Card className="border-border-1 rounded-lg pt-0 h-[600px] sm:h-[650px] lg:h-[550px]">
          <CardContent className="px-0 relative">
            <Image
              src={thumbnail || `/course/${index + 1}.png`}
              width={360}
              height={400}
              className="w-full rounded-tl-[6px] rounded-tr-[6px]"
              alt="course"
            />
            <div className="absolute top-4 left-4">
              <p className="font-stolzl text-xs text-white font-book">
                Next batch started in:
              </p>
              <div className="flex items-center font-stolzl text-xs md:text-base -mt-0.5">
                <CounterItem
                  value={`${hours} hrs`}
                  className="border-none text-white md:w-auto md:h-auto p-0 text-xs"
                />
                <CounterSeperator className="text-white px-1" />
                <CounterItem
                  value={`${minutes} mins`}
                  className="border-none text-white md:w-auto md:h-auto p-0 text-xs"
                />
                <CounterSeperator className="text-white px-1" />
                <CounterItem
                  value={`${seconds} sec`}
                  className="border-none text-white md:w-auto md:h-auto p-0 text-xs"
                />
              </div>
            </div>
            {/* <Separator className="my-4 bg-border-1" /> */}
            <div className="px-6 mt-4">
              <div className="flex gap-2 items-start">
                {interviews && (
                  <div className="border-2 bg-[#9237E305] text-[8px] sm:text-[10px] text-main uppercase border-[#9237E324] flex gap-2 items-center rounded px-2 py-0.5 font-stolzl font-normal">
                    {interviews} Interviews
                  </div>
                )}
                {integratedInternship?.hasInternship && (
                  <div className="border-2 bg-[#9237E305] text-[8px] sm:text-[10px] text-main border-[#9237E324] flex gap-2 items-center rounded px-2 py-0.5 font-stolzl font-normal">
                    INTEGRATED INTERNSHIP
                  </div>
                )}
              </div>
              <h3 className="text-lg font-stolzl font-medium mt-2">{title}</h3>
              <p className="text-para text-xs font-stolzl font-book mt-4">
                {desc}
              </p>

              <div className="mt-5 flex gap-2 items-center">
                <Image
                  src="/clock-1.svg"
                  width={14}
                  height={14}
                  alt="map-pin"
                />
                <p className="font-stolzl font-book text-para text-xs sm:text-sm">
                  {timing}
                </p>
              </div>
              <div className="mt-2 flex gap-2 items-center">
                <Image
                  src="/calender.svg"
                  width={14}
                  height={14}
                  alt="map-pin"
                />
                <p className="font-stolzl font-book text-para text-xs sm:text-sm">
                  Weekday and Weekend Batches
                </p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="grid max-[1024px]:grid-cols-2 max-[1024px]:gap-5 max-[376px]:grid-cols-1 max-[376px]:gap-3 min-[1024px]:grid-cols-1 min-[1024px]:gap-5 xl:grid-cols-[60%_38%] xl:gap-[2%] sm:grid-cols-1">
            <Button
              size="lg"
              variant="outline"
              className="rounded-sm text-xs sm:text-sm break-all px-5 h-12"
              asChild
            >
              <a
                href={brochure} // replace with your syllabus file URL
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto"
              >
                Download Brochure
              </a>
            </Button>
            <Button
              size="lg"
              variant="linearGradient"
              className="rounded-sm text-xs sm:text-sm px-5 h-12"
              asChild
            >
              <Link href={`/courses/${id}`}>
                <span>Know More</span>
              </Link>
            </Button>
          </CardFooter>
        </Card>
        {/* <Image
          src={`/course/${index + 1}.png`}
          width={358}
          height={800}
          alt="course"
        /> */}
      </div>
    </CarouselItem>
  );
};

SingleCard.Skeleton = function SingleCardSkeleton() {
  return (
    <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
      <div className="p-1">
        <Card className="border-border-1 rounded-lg pt-0 h-[600px] sm:h-[650px] lg:h-[550px]">
          <CardContent className="px-0 relative">
            {/* Banner image */}
            <Skeleton className="w-full h-[200px] rounded-tl-[6px] rounded-tr-[6px]" />

            {/* Countdown badge */}
            <div className="absolute top-4 left-4 space-y-1">
              <Skeleton className="h-3 w-24" />
              <div className="flex gap-1">
                <Skeleton className="h-4 w-6" />
                <Skeleton className="h-4 w-6" />
                <Skeleton className="h-4 w-6" />
              </div>
            </div>

            {/* Content section */}
            <div className="px-6 mt-4 space-y-3">
              <div className="flex gap-2">
                <Skeleton className="h-5 w-24 rounded-sm" />
                <Skeleton className="h-5 w-32 rounded-sm" />
              </div>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />

              <div className="flex gap-2 items-center mt-4">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-3 w-28" />
              </div>
              <div className="flex gap-2 items-center">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-3 w-36" />
              </div>
            </div>
          </CardContent>

          <CardFooter className="grid max-[1024px]:grid-cols-2 max-[1024px]:gap-5 max-[376px]:grid-cols-1 max-[376px]:gap-3 min-[1024px]:grid-cols-1 min-[1024px]:gap-5 xl:grid-cols-[60%_38%] xl:gap-[2%] sm:grid-cols-1">
            <Skeleton className="h-12 w-full rounded-sm" />
            <Skeleton className="h-12 w-full rounded-sm" />
          </CardFooter>
        </Card>
      </div>
    </CarouselItem>
  );
};
