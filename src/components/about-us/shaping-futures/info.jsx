import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React from "react";

export const Info = ({ img, title, desc, alt }) => {
  return (
    <Card className="rounded-md shadow-[0px_4px_30px_0px_ #0000001A] border-[#9237E333]">
      <CardContent>
        <Image src={img} width={52} height={52} alt={alt || title} />
        <h3 className="font-stolzl text-base sm:text-xl font-medium my-3">
          {title}
        </h3>
        <p className="text-xs sm:text-sm font-stolzl text-para font-book">
          {desc}
        </p>
      </CardContent>
    </Card>
  );
};

Info.Skeleton = function InfoSkeleton() {
  return (
    <Card className="rounded-md shadow-[0px_4px_30px_0px_ #0000001A] border-[#9237E333]">
      <CardContent className="space-y-4">
        <Skeleton className="w-12 h-12" />
        <Skeleton className="w-3/4 h-6" />
        <div className="space-y-1">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-2/3 h-4" />
        </div>
      </CardContent>
    </Card>
  );
};
