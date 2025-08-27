import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export const Project = ({ project }) => {
  const { title, description, icon, tools } = project;

  return (
    <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
      <div className="p-1">
        <Card className="border-border-1 rounded">
          <CardContent className="px-0">
            <div className="px-6 flex justify-center">
              <Image src={icon} width={74} height={60} alt="icon" />
            </div>
            <Separator className="my-4 bg-border-1" />
            <div className="px-6">
              <h3 className="text-lg sm:text-xl text-center font-stolzl font-medium">
                {title}
              </h3>
              <p className="text-para font-stolzl font-book text-xs sm:text-sm text-center">
                {/* This project focuses on analysing DMart's sales data to optimize
                inventory levels, pricing strategies, and overall profitability.
                You'll uncover patterns in product movement and seasonal trends.
                It's ideal for learning retail analytics and data-driven
                decision-making. */}
                {description}
              </p>
            </div>
            <Separator className="mt-4 bg-border-1" />
          </CardContent>

          <CardFooter className="flex justify-center flex-wrap">
            {tools.map((tool)=>(

              <div className="px-3 py-0.5 text-xs sm:text-base font-medium rounded-md bg-[#9237E31A] text-main uppercase">
              {tool}
            </div>
            ))
            }
          </CardFooter>
        </Card>
      </div>
    </CarouselItem>
  );
};
