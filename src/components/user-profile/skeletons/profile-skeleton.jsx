import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

export const ProfileSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      {/* Left side: profile image and name skeletons */}
      <div className="w-80 flex flex-col items-center gap-2">
        <Skeleton className="size-32 rounded-full" />
        <Skeleton className="w-full h-9 mt-4" />
        <Skeleton className="w-full h-9" />
        <Skeleton className="w-full h-9" />
      </div>

      {/* Right side: form fields */}
      <div className="w-full md:flex-1">
        <Skeleton className="w-2/5 h-9" />
        <Skeleton className="w-2/6 h-8 mt-3" />

        {/* Grid inputs: name, email, phone, contactMethod */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          <Skeleton className="w-full h-14 rounded" />
          <Skeleton className="w-full h-14 rounded" />
          <Skeleton className="w-full h-14 rounded" />
          <Skeleton className="w-full h-14 rounded" />
        </div>

        {/* Bio textarea */}
        <Skeleton className="w-full h-24 rounded mt-5" />

        {/* Save button */}
        <Skeleton className="w-40 h-10 rounded mt-5" />

        {/* Profile visibility card */}
        <div className="mt-5 p-4 rounded-sm border border-border">
          <Skeleton className="w-1/2 h-6 mb-2" />
          <Skeleton className="w-3/4 h-4 mb-4" />
          <Skeleton className="w-14 h-7 rounded" />
        </div>
      </div>
    </div>
  );
}
