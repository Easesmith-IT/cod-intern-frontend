import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const Job = () => {
  return (
    <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
      <div className="p-1">
        <Card className="border-none rounded-md shadow-[0px_0px_10px_0px_#00000026]">
          <CardContent>
            <div className="flex gap-4 justify-between items-center">
              <div>
                <div className="border-2 border-[#9237E333] flex gap-2 items-center rounded px-2 py-1 text-xs font-stolzl font-normal">
                  <Image src="/Icon.svg" width={16} height={16} alt="icon" />
                  <p className="text-para">Actively hiring</p>
                </div>
                <h3 className="font-stolzl font-medium text-xl mt-4">
                  Accountant
                </h3>
                <p className="font-stolzl text-para font-book text-sm mt-1">
                  Cinderella Tours
                </p>
              </div>
              <Image src="/job-logo.svg" width={69} height={86} alt="job" />
            </div>

            <Separator className="my-3" />

            <div className="mt-5 flex gap-2 items-center">
              <Image src="/map-pin.svg" width={16} height={16} alt="map-pin" />
              <p className="font-stolzl font-book text-para text-sm">
                Ajmer, Africa Camp
              </p>
            </div>

            <div className="mt-1 flex gap-2 items-center">
              <Image src="/sallary.svg" width={16} height={16} alt="sallary" />
              <p className="font-stolzl font-book text-para text-sm">
                Rs. 10,00,000 - 20,00,000/ year
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center mt-10">
            <div className="w-[86px] h-[30px] flex items-center justify-center text-para rounded-md bg-[#F8F2FD] font-stolzl text-sm font-book text-center">
              Job
            </div>
            <Button variant="ghost" className="text-main gap-1">
              <span>View Details</span>
              <ChevronRight className="size-5" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </CarouselItem>
  );
};
