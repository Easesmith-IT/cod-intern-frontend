import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Tech } from "./tech";

export const SingleCard = () => {
  return (
    <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
      <div className="p-1">
        <Card className="border-[#9237E366] rounded-md">
          <CardContent className="px-0">
            <div className="px-6">
              <div className="flex gap-4 justify-between items-center">
                <div>
                  <p className="text-para-1 font-book font-stolzl text-xs">
                    Next batch starts in
                  </p>
                  <div className="flex items-center font-stolzl font-normal mt-2">
                    <div className="flex justify-center border w-7 h-7 text-sm rounded items-center p-2">
                      6
                    </div>
                    <p className="px-2">:</p>
                    <div className="flex justify-center border w-7 h-7 text-sm rounded items-center p-2">
                      23
                    </div>
                    <p className="px-2">:</p>
                    <div className="flex justify-center border w-7 h-7 text-sm rounded items-center p-2">
                      59
                    </div>
                  </div>
                </div>

                <div className="border-2 text-main border-[#9237E333] flex gap-2 items-center rounded px-2 py-1 text-xs font-stolzl font-normal">
                  2 seats left
                </div>
              </div>

              <Image
                className="my-6 mx-auto"
                src="Frame.svg"
                width={83}
                height={83}
                alt="frame"
              />

              <div className="flex gap-2">
                <Tech title="Tesseract OCR" />
                <Tech title="Tableau" />
                <Tech title="NumPy" />
                <Tech title="Tensorflow" />
                <Tech title="Excel" />
              </div>
            </div>
            <Separator className="my-4 bg-[#9237E366]" />
            <div className="px-6">
              <div className="flex gap-4">
                <div className="border-2 bg-[#9237E305] text-main uppercase border-[#9237E324] flex gap-2 items-center rounded px-2 py-0.5 text-[10px] font-stolzl font-normal">
                  Unlimited Interviews
                </div>
                <div className="border-2 bg-[#9237E305] text-main border-[#9237E324] flex gap-2 items-center rounded px-2 py-0.5 text-[10px] font-stolzl font-normal">
                  INTEGRATED INTERNSHIP
                </div>
              </div>
              <h3 className="text-lg font-stolzl font-medium mt-2">
                Data Science & Analytics with AI
              </h3>
              <p className="text-para text-sm font-stolzl font-book mt-4">
                Analyze data and build AI models using Python, SQL, and machine
                learning techniques.
              </p>

              <div className="mt-5 flex gap-2 items-center">
                <Image
                  src="/clock-1.svg"
                  width={14}
                  height={14}
                  alt="map-pin"
                />
                <p className="font-stolzl font-book text-para text-sm">
                  8-10 Months Classroom & Online Training
                </p>
              </div>
              <div className="mt-2 flex gap-2 items-center">
                <Image
                  src="/calender.svg"
                  width={14}
                  height={14}
                  alt="map-pin"
                />
                <p className="font-stolzl font-book text-para text-sm">
                  Weekday and Weekend Batches
                </p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex items-center gap-3">
            <Button
              size="lg"
              variant="outline"
              className="rounded-sm px-5 h-12"
            >
              Download Brochure
            </Button>
            <Button
              size="lg"
              variant="linearGradient"
              className="rounded-sm px-5 h-12"
            >
              Know More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </CarouselItem>
  );
};
