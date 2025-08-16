import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatDistanceToNowStrict } from "date-fns";
import { ChevronRight, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

export const Job = ({ job }) => {
  const {
    title,
    status,
    jobImage,
    customId,
    postingDate,
    category,
    city,
    state,
    country,
    education,
    _id,
  } = job || {};

  return (
    <Card className="border-none rounded-md shadow-[0px_0px_10px_0px_#00000026]">
      <CardContent>
        <div className="flex gap-4 justify-between items-center">
          <div>
            {status === "active" && (
              <div className="border-2 border-[#9237E333] flex gap-2 w-[135px] items-center rounded px-2 py-1 text-[10px] sm:text-xs font-stolzl font-normal">
                <Image src="/Icon.svg" width={16} height={16} alt="icon" />
                <p className="text-para">Actively hiring</p>
              </div>
            )}
            <h3 className="font-stolzl capitalize line-clamp-2 font-medium text-lg md:text-xl mt-4">
              {title}
            </h3>
            <p className="font-stolzl text-para font-book text-xs sm:text-sm mt-1">
              {customId}
            </p>
          </div>
          <Image src={jobImage} width={60} height={60} alt="job" />
        </div>

        <div className="flex gap-3 items-center mt-2">
          <div className="bg-[#F7EFFD] rounded-full px-3 py-1.5 flex gap-2 items-center">
            <Image
              src="/job/time-ago.svg"
              width={14}
              height={14}
              alt="Active"
            />
            <span className="text-xs font-book font-stolzl text-para-3">
              {postingDate &&
                formatDistanceToNowStrict(new Date(postingDate), {
                  addSuffix: true,
                })}
            </span>
          </div>
          {status === "active" && (
            <div className="border border-border-1 rounded-full px-3 py-1.5 font-stolzl text-xs flex items-center font-book text-main">
              Actively Hiring
            </div>
          )}
        </div>

        <Separator className="my-3" />

        <div className="mt-5 flex gap-2 items-start">
          <Image
            src="/job/user.svg"
            width={16}
            height={16}
            alt="user"
            className="shrink-0"
          />
          <p className="font-stolzl font-book text-para text-xs capitalize sm:text-sm">
            {category} Job
          </p>
        </div>
        <div className="mt-1 flex gap-2 items-start">
          <Image
            src="/map-pin.svg"
            width={16}
            height={16}
            alt="map-pin"
            className="shrink-0"
          />
          <p className="font-stolzl font-book text-para line-clamp-1 capitalize text-xs sm:text-sm">
            {city}, {state}, {country}
          </p>
        </div>

        <div className="mt-1 flex gap-2 items-start">
          <GraduationCap className="size-4 text-main/90 shrink-0" />
          <p className="font-stolzl font-book text-para line-clamp-1 text-xs sm:text-sm">
            {education.join(", ")}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-9">
        <Button
          variant="linearGradient"
          className="text-xs sm:text-sm gap-1 h-9 md:h-10"
        >
          Apply Now
        </Button>
        <Button
          asChild
          variant="ghost"
          className="text-main text-xs sm:text-sm"
        >
          <Link href={`/jobs/${_id}`} className="gap-1">
            <span>View Details</span>
            <ChevronRight className="size-5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

Job.Skeleton = function BoardCardSkeleton() {
  return (
    <Card className="border-none rounded-md shadow-[0px_0px_10px_0px_#00000026]">
      <CardContent>
        {/* Top Section */}
        <div className="flex gap-4 justify-between items-center">
          <div>
            {/* Badge */}
            <div className="border flex gap-2 items-center rounded px-2 py-1 text-[10px] sm:text-xs">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-3 w-20" />
            </div>

            {/* Job Title */}
            <Skeleton className="h-5 w-32 mt-4" />

            {/* Job ID */}
            <Skeleton className="h-3 w-24 mt-1" />
          </div>

          {/* Job Logo */}
          <Skeleton className="h-[86px] w-[69px] rounded" />
        </div>

        {/* Tags Row */}
        <div className="flex gap-3 items-center mt-2">
          <Skeleton className="h-7 w-24 rounded-full" />
          <Skeleton className="h-7 w-24 rounded-full" />
        </div>

        <Separator className="my-3" />

        {/* Details */}
        <div className="mt-5 flex gap-2 items-center">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-3 w-24" />
        </div>
        <div className="mt-1 flex gap-2 items-center">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-3 w-28" />
        </div>
        <div className="mt-1 flex gap-2 items-center">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-3 w-28" />
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-between items-center mt-9">
        <Skeleton className="h-9 md:h-10 w-24 rounded" />
        <Skeleton className="h-9 md:h-10 w-28 rounded" />
      </CardFooter>
    </Card>
  );
};
