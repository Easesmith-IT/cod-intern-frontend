import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { getImageByPlatform } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Story = ({ rating, name, position, desc, platform }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
      <div className="p-1">
        <Card className="border-none rounded-md shadow-[0px_0px_10px_0px_#00000026]">
          <CardContent>
            <div className="flex gap-4 items-center bg-[#F6F6F6] rounded-full w-full">
              <Image
                src={getImageByPlatform(platform)}
                width={45}
                height={45}
                alt={platform || "Logo"}
              />
              <div className="flex gap-2 items-center">
                <div className="flex gap-1">
                  <StarIcon className="w-3 h-3 text-[#FFA500] fill-[#FFA500]" />
                  <StarIcon className="w-3 h-3 text-[#FFA500] fill-[#FFA500]" />
                  <StarIcon className="w-3 h-3 text-[#FFA500] fill-[#FFA500]" />
                  <StarIcon className="w-3 h-3 text-[#FFA500] fill-[#FFA500]" />
                  <StarIcon className="w-3 h-3 text-[#FFA500]" />
                </div>
                <span className="font-stolzl text-xs">({rating})</span>
              </div>
            </div>

            <div className="mt-5 font-stolzl font-book text-para text-sm">
              <p>
                {isExpanded ? (
                  desc
                ) : (
                  <span className="line-clamp-6">{desc}</span>
                )}
              </p>
              <p
                onClick={() => setIsExpanded((prev) => !prev)}
                className="font-medium cursor-pointer text-main text-right"
              >
                Read {isExpanded ? "Less" : "More"}
              </p>
            </div>

            <div className="mt-5">
              <h4 className="font-stolzl font-medium">{name}</h4>
              <p className="font-stolzl font-book text-xs text-[#2C1D4385]">
                {position}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

Story.Skeleton = function ReviewSkeleton() {
  return (
    <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
      <div className="p-1">
        <Card className="border-none rounded-md">
          <CardContent className="space-y-5">
            {/* Top Section: Logo + Rating */}
            <div className="flex gap-4 items-center bg-[#F6F6F6] rounded-full w-full p-2">
              <Skeleton className="h-[45px] w-[45px] rounded-full" />
              <div className="flex gap-2 items-center">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-3 w-3 rounded-sm" />
                  ))}
                </div>
                <Skeleton className="h-3 w-8 rounded" />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Skeleton className="h-3 w-full rounded" />
              <Skeleton className="h-3 w-11/12 rounded" />
              <Skeleton className="h-3 w-10/12 rounded" />
              <Skeleton className="h-3 w-2/5 rounded ml-auto" />{" "}
              {/* Read more */}
            </div>

            {/* User Info */}
            <div className="space-y-1">
              <Skeleton className="h-4 w-32 rounded" /> {/* Name */}
              <Skeleton className="h-3 w-20 rounded" /> {/* Position */}
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};
