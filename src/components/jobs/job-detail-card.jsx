import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Share2Icon } from "lucide-react";
import Image from "next/image";
import { Info } from "./info";

export const JobDetailCard = () => {
  return (
    <Card className="border-none rounded-md w-full md:w-[300px] shadow-[0px_0px_10px_0px_#00000026] mt-8">
      <CardContent>
        <div className="flex gap-4 justify-between ">
          <div>
            {/* <div className="flex gap-3 flex-wrap items-center mt-2">
              <div className="border-2 border-[#9237E333] flex gap-2 items-center rounded px-2 py-1 text-[10px] sm:text-xs font-stolzl font-normal">
                <Image src="/Icon.svg" width={16} height={16} alt="icon" />
                <p className="text-para">Actively hiring</p>
              </div>
              <div className="bg-[#F7EFFD] rounded-full px-4 py-1.5 flex gap-2 items-center">
                <Image
                  src="/job/time-ago.svg"
                  width={14}
                  height={14}
                  alt="Active"
                />
                <span className="text-xs font-book font-stolzl text-para-3">
                  1 days ago
                </span>
              </div>
              <div className="border border-border-1 rounded-full px-4 py-1.5 font-stolzl text-xs flex items-center font-book text-main">
                Actively Hiring
              </div>
            </div> */}
            <h3 className="font-stolzl font-medium text-lg md:text-xl mt-0">
              Accountant
            </h3>
            <p className="font-stolzl text-para font-book text-xs sm:text-sm mt-1">
              JOB-2345-3498
            </p>
          </div>
          {/* <Image src="/job-logo.svg" width={115} height={144} alt="job" /> */}
        </div>

        <div className="mt-5 flex gap-2 items-center">
          <Image src="/map-pin.svg" width={16} height={16} alt="map-pin" />
          <p className="font-stolzl font-book text-para text-xs sm:text-sm">
            Ajmer, Africa Camp
          </p>
        </div>

        <Separator className="my-3" />

        <div className="flex flex-wrap gap-10 md:gap-20">
          <Info
            img="/job/start-date.svg"
            heading="Start Date"
            value="15 Aug 25"
          />

          {/* <Info
            img="/sallary.svg"
            heading="CTC (ANNUAL)"
            value="Rs. 4,20,000 - 4,40,000"
          />

          <Info
            img="/job/experience.svg"
            heading="Experience"
            value="0 year(s)"
          />

          <Info img="/job/apply-by.svg" heading="Apply By" value="15 Aug 25" /> */}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-6">
        {/* <div className="flex gap-2 items-center">
          <Image src="/job/applicants.svg" width={16} height={16} alt="user" />
          <p className="font-stolzl font-book text-para text-xs sm:text-sm uppercase">
            39 applicants
          </p>
        </div> */}

        <div className="flex gap-4 items-center">
          <Share2Icon className="text-main cursor-pointer animate-btn" />
          <Button
            variant="linearGradient"
            className="text-xs sm:text-sm gap-1 h-9 md:h-10"
          >
            Apply Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
