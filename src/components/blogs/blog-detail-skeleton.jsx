import React from "react";
import { Skeleton } from "../ui/skeleton";

export const BlogDetailSkeleton = () => {
  return (
    <article className="w-full space-y-6 mt-10">
      {/* Title */}
      <Skeleton className="h-8 w-3/4" />

      {/* Meta info (date, author, etc.) */}
      {/* <div className="flex gap-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div> */}

      {/* Content paragraphs */}
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-10/12" />
        <Skeleton className="h-4 w-full" />
      </div>

      {/* Comment form (example) */}
      <div className="space-y-3 not-prose mt-6">
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-20 w-full rounded-md" />
        <Skeleton className="h-10 w-32 rounded-md" />
      </div>
    </article>
  );
};
