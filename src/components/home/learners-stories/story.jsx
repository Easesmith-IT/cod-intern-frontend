import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { StarIcon } from "lucide-react";
import Image from "next/image";

export const Story = () => {
  return (
    <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
      <div className="p-1">
        <Card className="border-none rounded-md shadow-[0px_0px_10px_0px_#00000026]">
          <CardContent>
            <div className="flex gap-4 items-center bg-[#F6F6F6] rounded-full w-full">
              <Image
                src="/linkedin.svg"
                width={45}
                height={45}
                alt="linkedin"
              />
              <div className="flex gap-2 items-center">
                <div className="flex gap-1">
                  <StarIcon className="w-3 h-3 text-[#FFA500] fill-[#FFA500]" />
                  <StarIcon className="w-3 h-3 text-[#FFA500] fill-[#FFA500]" />
                  <StarIcon className="w-3 h-3 text-[#FFA500] fill-[#FFA500]" />
                  <StarIcon className="w-3 h-3 text-[#FFA500] fill-[#FFA500]" />
                  <StarIcon className="w-3 h-3 text-[#FFA500]" />
                </div>
                <span className="font-stolzl text-xs">(4.8)</span>
              </div>
            </div>

            <p className="mt-5 font-stolzl font-book text-para">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore sed do eiusmod tempor
              incididunt ut labore. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut sed do
              eiusmod tempor incidid <span className="font-medium text-main">Read More</span>
            </p>

            <div className="mt-5">
              <h4 className="font-stolzl font-medium">Harsul Hisham</h4>
              <p className="font-stolzl font-book text-xs text-[#2C1D4385]">
                Web Designer
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};
