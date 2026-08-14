"use client";

import { previewImage } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Mentor = ({ img, name, position, about, experience }) => {
  const fallbackImage = "/our-mentors/user-placeholder.png";
  const [imageSrc, setImageSrc] = useState(() => previewImage(img, fallbackImage));

  useEffect(() => {
    setImageSrc(previewImage(img, fallbackImage));
  }, [img]);

  return (
    <Card className="border-border-1 rounded-md py-2">
      <CardContent className="p-4">
        <div className="relative aspect-square w-full overflow-hidden rounded-md bg-[#F7F1FF]">
          <Image
            src={imageSrc}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            alt={name || "mentor"}
            onError={() => setImageSrc(fallbackImage)}
          />
        </div>

        <div className="flex flex-col justify-between h-52 mt-5">
          <div>
            <h3 className="font-stolzl font-medium md:text-2xl leading-11">
              {name}
            </h3>
            <p className="font-stolzl font-medium text-sm sm:text-base">
              {position}
            </p>
            <p className="font-stolzl font-medium text-xs sm:text-sm mt-3">
              {experience}
            </p>
          </div>
          <p className="font-stolzl text-xs md:text-sm font-book mt-2">
            {about}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

Mentor.Skeleton = function MentorSkeleton() {
  return (
    <Card className="border-border-1 rounded-md py-2">
      <CardContent className="p-4">
        {/* Image Skeleton */}
        <Skeleton className="w-full aspect-square rounded-md" />

        <div className="flex flex-col justify-between h-52 mt-5">
          <div>
            {/* Name */}
            <Skeleton className="h-6 w-40 mb-2" />
            {/* Position */}
            <Skeleton className="h-4 w-32 mb-2" />
            {/* Experience */}
            <Skeleton className="h-3 w-28 mt-3" />
          </div>
          {/* About */}
          <div className="space-y-2 mt-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
