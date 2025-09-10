"use client";

import { useWpApiQuery } from "@/hooks/useWpApiQuery";
import { formatInTimeZone } from "date-fns-tz";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
import { format } from "date-fns/format";
import { ImageOff } from "lucide-react";

export const Blog = ({ title, desc, timeStamp, href, src, featured_media }) => {
  const { data, isLoading, error, refetch } = useWpApiQuery({
    url: `/media/${featured_media}`,
    queryKeys: ["media", featured_media],
    options: { enabled: false },
  });
  console.log("media", data);

  useEffect(() => {
    featured_media && refetch();
  }, [featured_media]);

  const utcIso = timeStamp.endsWith("Z") ? timeStamp : `${timeStamp}Z`;
  const formatted = formatInTimeZone(
    utcIso,
    "Asia/Kolkata",
    "d MMMM yyyy 'at' hh:mm a"
  );

  return (
    <div className="shadow-[0px_0px_8.24px_0px_#65656517] rounded-md bg-[#F6F6F6]">
      <div className="p-4 bg-[#F6F6F6] rounded-md">
        <div className="bg-white aspect-video">
          {isLoading ? (
            <Skeleton className="aspect-video w-full" />
          ) : data?.guid?.rendered ? (
            <Link href={href}>
              <Image
                src={data?.guid?.rendered || src}
                className="rounded-t-md aspect-video"
                width={384}
                height={226}
                alt="Blog"
              />
            </Link>
          ) : (
            <Link
              href={href}
              className="w-full h-full flex justify-center items-center"
            >
              <ImageOff className="size-20 text-gray-500" />
            </Link>
          )}
        </div>

        <div className="text-xs mt-5 font-stolzl font-book flex gap-1 text-[#868686] items-center">
          <Image src="/clock-1.svg" width={13} height={13} alt="Clock" />
          {/* {formatted} */}
          {timeStamp && format(timeStamp, "d MMMM yyyy 'at' hh:mm a")}
        </div>
        <Link className="inline-block mt-4" href={href}>
          <h3 className="font-stolzl font-medium text-para-3 hover:underline text-base sm:text-lg line-clamp-2">
            {title}
          </h3>
        </Link>
        <div className="font-stolzl text-xs sm:text-sm text-para font-book line-clamp-3 mt-4">
          {desc}
        </div>
      </div>
    </div>
  );
};

Blog.Skeleton = function BlogSkeleton() {
  return (
    <div className="shadow-[0px_0px_8.24px_0px_#65656517] rounded-md ">
      <div className="p-4 rounded-md">
        {/* Image Skeleton */}
        <Skeleton className="w-full h-[226px] rounded-t-md aspect-video" />

        {/* Timestamp Skeleton */}
        <div className="flex items-center gap-1 mt-5">
          <Skeleton className="w-3 h-3 rounded-full" />
          <Skeleton className="w-16 h-3" />
        </div>

        {/* Title Skeleton */}
        <Skeleton className="w-3/4 h-5 mt-4" />
        <Skeleton className="w-2/3 h-5 mt-2" />

        {/* Description Skeleton */}
        <div className="mt-4 space-y-2">
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-11/12 h-3" />
          <Skeleton className="w-10/12 h-3" />
        </div>
      </div>
    </div>
  );
};
