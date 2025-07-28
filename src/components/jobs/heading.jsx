import { cn } from '@/lib/utils'
import React from 'react'

export const Heading = ({title,className}) => {
  return (
    <h3 className={cn("text-base sm:text-xl font-stolzl font-medium mt-10",className)}>
      {title}
    </h3>
  );
}
