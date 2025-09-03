import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

export const KeyHighlight = ({ highlight }) => {
  return (
    <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/6">
      <div className="p-1">
        <Card className="rounded-md shadow-none h-[180px]">
          <CardContent className="flex flex-col justify-between h-full items-center">
            {highlight.icon ? (
              <Image
                src={highlight.icon}
                width={50}
                height={50}
                alt="highlight"
                className="h-14 w-14"
              />
            ) : (
              <div className="h-14 w-14 bg-gray-100 rounded-lg flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-gray-400" />
              </div>
            )}
            <h3 className="font-medium text-center text-sm md:text-base font-stolzl mt-4">
              {highlight?.title || "Pan India Placements"}
            </h3>
            {highlight.subtitle && (
              <p className="text-xs md:text-sm text-muted-foreground mt-2">{highlight.subtitle}</p>
            )}
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};
