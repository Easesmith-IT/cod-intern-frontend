import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

export const Feature = () => {
  return (
    <CarouselItem className="sm:basis-1/2 md:basis-1/2">
      <div className="">
        <Card className="rounded-sm border-[#9237E366]">
          <CardContent className="">
            <div className="flex gap-4 items-center">
              <Image src="/feature-img.svg" width={93} height={82} alt="icon" />
              <h4 className="font-stolzl font-medium text-xl">
                Industry-Specific Skills
              </h4>
            </div>
            <p className="mt-5 font-stolzl font-book text-para text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. do eiusmod tempor incididunt.
            </p>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};
