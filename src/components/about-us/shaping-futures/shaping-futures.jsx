import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Info } from "./info";

export const ShapingFutures = ({ className, data, isLoading }) => {
  const { content, images } = data || {};

  return (
    <section className={cn("section-container pb-12 md:pb-24", className)}>
      <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl  font-medium capitalize text-center">
        <span className="text-main">Crafting Careers</span> with Vision
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>
      <div className="font-stolzl text-xs sm:text-sm text-para mt-2 font-book mx-auto text-center max-w-4xl">
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="w-full h-4" />
          </div>
        ) : (
          content?.subheading
        )}
      </div>

      <div className="font-stolzl text-xs sm:text-sm text-para mt-4 font-book mx-auto text-center max-w-4xl">
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-[60%] h-4" />
          </div>
        ) : (
          content?.paragraph
        )}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
          {Array.from({ length: 3 }).map((_, index) => (
            <Info.Skeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
          {content?.infos.map((item, index) => (
            <Info
              key={index}
              img={images?.[index]?.image}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      )}
    </section>
  );
};
