"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Instagram, Share2Icon } from "lucide-react";
import Image from "next/image";
import { Info } from "./info";
import { useState } from "react";
import { ApplyNowModal } from "./apply-now-modal";
import { ShareLink } from "./share-link";
import { format } from "date-fns";
import { Skeleton } from "../ui/skeleton";

export const JobDetailCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    externalLink,
    _id,
  } = job || {};

  const url = (id) => {
    return `${process.env.NEXT_PUBLIC_FRONTEND_URL}/jobs/${id}`;
  };

  return (
    <Card className="border-none rounded-md w-full md:w-[700px] shadow-[0px_0px_10px_0px_#00000026] mt-8">
      <CardContent>
        <div className="flex gap-4 justify-between ">
          <div>
            {/* <div className="flex gap-3 flex-wrap items-center mt-2">
              <div className="border-2 border-[#9237E333] flex gap-2 items-center rounded px-2 py-1 text-[10px] sm:text-xs font-stolzl font-normal">
                <Image src="/Icon.svg" width={16} height={16} alt="icon" />
                <p className="text-para">Actively hiring</p>
              </div>
              <div className="bg-[#F7EFFD] rounded-full px-4 py-1.5 flex gap-2 items-center">
                <Image
                  src="/job/time-ago.svg"
                  width={14}
                  height={14}
                  alt="Active"
                />
                <span className="text-xs font-book font-stolzl text-para-3">
                  1 days ago
                </span>
              </div>
              <div className="border border-border-1 rounded-full px-4 py-1.5 font-stolzl text-xs flex items-center font-book text-main">
                Actively Hiring
              </div>
            </div> */}
            <h3 className="font-stolzl capitalize font-medium text-lg md:text-xl mt-0">
              {title}
            </h3>
            <p className="font-stolzl text-para font-book text-xs sm:text-sm mt-1">
              {customId}
            </p>
          </div>
          {/* <Image src="/job-logo.svg" width={115} height={144} alt="job" /> */}
        </div>

        <div className="mt-5 flex gap-2 items-center">
          <Image src="/map-pin.svg" width={16} height={16} alt="map-pin" />
          <p className="font-stolzl capitalize font-book text-para text-xs sm:text-sm">
            {city}, {state}, {country}
          </p>
        </div>
        <div className="mt-1 flex gap-2 items-start">
          <GraduationCap className="size-4 text-main/90 shrink-0" />
          <p className="font-stolzl font-book text-para line-clamp-1 text-xs sm:text-sm">
            {education.join(", ")}
          </p>
        </div>

        <Separator className="my-3" />

        <div className="flex flex-wrap gap-10 md:gap-20">
          <Info
            img="/job/start-date.svg"
            heading="Date of Job Posting"
            // value="15 Aug 25"
            value={postingDate && format(new Date(postingDate), "dd MMM yyyy")}
          />

          {/* <Info
            img="/sallary.svg"
            heading="CTC (ANNUAL)"
            value="Rs. 4,20,000 - 4,40,000"
          />

          <Info
            img="/job/experience.svg"
            heading="Experience"
            value="0 year(s)"
          />

          <Info img="/job/apply-by.svg" heading="Apply By" value="15 Aug 25" /> */}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-wrap gap-5 items-center mt-6">
        {/* <div className="flex gap-2 items-center opacity-0">
          <Image src="/job/applicants.svg" width={16} height={16} alt="user" />
          <p className="font-stolzl font-book text-para text-xs sm:text-sm uppercase">
            39 applicants
          </p>
        </div> */}
        <div className="flex gap-1 items-center">
          <p>Share:</p>
          <div className="flex gap-2 items-center">
            <ShareLink
              src="/social-1.svg"
              href={`https://www.facebook.com/sharer/sharer.php?u=${url(
                job._id
              )}`}
              className="bg-main size-7 p-2.5"
            />
            <ShareLink
              src="/social-1.svg"
              href={"#"}
              className="bg-main size-7 p-1.5"
            >
              <Instagram className="text-white size-4" />
            </ShareLink>

            <ShareLink
              src="/social-3.svg"
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${url(
                job._id
              )}`}
              className="bg-main size-7 p-1.5"
              width={16}
              height={16}
            />

            <ShareLink
              src="/social-4.svg"
              href="#"
              className="bg-main size-7 p-1"
              width={16}
              height={16}
            />

            <ShareLink
              src="/social-2.svg"
              href={`https://twitter.com/intent/tweet?url=${url(job._id)}`}
              className="bg-main size-7 p-1"
              width={16}
              height={16}
            />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          {/* <Share2Icon className="text-main cursor-pointer animate-btn" /> */}
          <Button
            variant="linearGradient"
            className="text-xs sm:text-sm gap-1 h-9 md:h-10"
            onClick={() => setIsModalOpen(true)}
            disabled={status !== "active"}
          >
            Apply Now
          </Button>
        </div>

        {isModalOpen && (
          <ApplyNowModal
            externalLink={externalLink}
            open={isModalOpen}
            setOpen={setIsModalOpen}
          />
        )}
      </CardFooter>
    </Card>
  );
};

JobDetailCard.Skeleton = function JobDetailCardSkeleton() {
  return (
    <Card className="border-none rounded-md w-full md:w-[700px] shadow-[0px_0px_10px_0px_#00000026] mt-8">
      <CardContent>
        {/* Title & ID */}
        <div className="flex gap-4 justify-between">
          <div>
            <Skeleton className="h-5 w-48 rounded" />
            <Skeleton className="h-4 w-24 mt-2 rounded" />
          </div>
          {/* Placeholder for logo */}
          <Skeleton className="h-14 w-14 rounded-md" />
        </div>

        {/* Location */}
        <div className="mt-5 flex gap-2 items-center">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-40 rounded" />
        </div>

        <Separator className="my-3" />

        {/* Info section */}
        <div className="flex flex-wrap gap-10 md:gap-20">
          <div>
            <Skeleton className="h-4 w-32 rounded" />
            <Skeleton className="h-4 w-24 mt-2 rounded" />
          </div>
          <div>
            <Skeleton className="h-4 w-32 rounded" />
            <Skeleton className="h-4 w-24 mt-2 rounded" />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between flex-wrap gap-5 items-center mt-6">
        {/* Share buttons */}
        <div className="flex gap-1 items-center">
          <Skeleton className="h-4 w-10 rounded" />
          <div className="flex gap-2 items-center">
            <Skeleton className="size-7 rounded" />
            <Skeleton className="size-7 rounded" />
            <Skeleton className="size-7 rounded" />
            <Skeleton className="size-7 rounded" />
            <Skeleton className="size-7 rounded" />
          </div>
        </div>

        {/* Apply button */}
        <Skeleton className="h-9 md:h-10 w-24 rounded-md" />
      </CardFooter>
    </Card>
  );
};
