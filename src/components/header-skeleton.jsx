import React from 'react'
import { Skeleton } from './ui/skeleton'

export const HeaderSkeleton = () => {
  return (
    <div className='flex justify-between items-center gap-4 p-4 section-container'>
        <div>
            <Skeleton className="w-48 h-10" />
        </div>
        <div className='flex gap-3 items-center'>
            <Skeleton className="w-24 h-10" />
            <Skeleton className="w-24 h-10" />
            <Skeleton className="w-24 h-10" />
        </div>
    </div>
  )
}
