"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const HeaderSkeleton = () => {
  return (
    <header className="shadow-md shadow-black/5 z-20 sticky top-0 bg-white">
      {/* Top countdown skeleton */}
      <div className="flex flex-col sm:flex-row py-3 justify-center items-center gap-3 border-b-[1.5px]">
        <div className="flex items-center gap-2">
          <Skeleton className="w-5 h-5 rounded-full" />
          <Skeleton className="h-4 w-40" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-6 rounded" />
          <Skeleton className="h-5 w-6 rounded" />
          <Skeleton className="h-5 w-6 rounded" />
          <Skeleton className="h-5 w-6 rounded" />
        </div>
      </div>

      {/* Main header skeleton */}
      <div className="flex gap-4 justify-between section-container py-2">
        {/* Logo skeletons */}
        <div className="flex gap-1 items-center">
          <Skeleton className="w-[160px] h-14 sm:w-[224px] sm:h-[65px] rounded" />
          <Skeleton className="w-16 h-7 sm:w-[100px] sm:h-[33px] rounded ml-2" />
        </div>

        {/* Right side buttons / avatar */}
        <div className="flex items-center gap-4">
          {/* Nav links */}
          <div className="hidden lg:flex gap-4">
            <Skeleton className="h-6 w-16 rounded" />
            <Skeleton className="h-6 w-16 rounded" />
          </div>

          {/* Login / Register skeletons */}
          <div className="hidden md:flex gap-2">
            <Skeleton className="h-10 w-20 rounded-sm" />
            <Skeleton className="h-10 w-24 rounded-sm" />
          </div>

          {/* Avatar / Menu icon */}
          <Skeleton className="size-10 rounded-sm" />
        </div>
      </div>
    </header>
  );
};
