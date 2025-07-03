import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

export const Company = () => {
  return (
    <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/8">
      <div className="p-1">
        <Image src="/trello.svg" width={120} height={40} alt="company" />
      </div>
    </CarouselItem>
  );
};
