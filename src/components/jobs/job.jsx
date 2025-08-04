import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const Job = () => {
  return (
    <Card className="border-none rounded-md shadow-[0px_0px_10px_0px_#00000026]">
      <CardContent>
        <div className="flex gap-4 justify-between items-center">
          <div>
            <div className="border-2 border-[#9237E333] flex gap-2 items-center rounded px-2 py-1 text-[10px] sm:text-xs font-stolzl font-normal">
              <Image src="/Icon.svg" width={16} height={16} alt="icon" />
              <p className="text-para">Actively hiring</p>
            </div>
            <h3 className="font-stolzl font-medium text-lg md:text-xl mt-4">
              Accountant
            </h3>
            <p className="font-stolzl text-para font-book text-xs sm:text-sm mt-1">
              JOB-2345-3498
            </p>
          </div>
          <Image src="/job-logo.svg" width={69} height={86} alt="job" />
        </div>

        <div className="flex gap-3 items-center mt-2">
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
        </div>

        <Separator className="my-3" />

        <div className="mt-5 flex gap-2 items-center">
          <Image src="/job/user.svg" width={16} height={16} alt="user" />
          <p className="font-stolzl font-book text-para text-xs sm:text-sm">
            Fresher Job
          </p>
        </div>
        <div className="mt-1 flex gap-2 items-center">
          <Image src="/map-pin.svg" width={16} height={16} alt="map-pin" />
          <p className="font-stolzl font-book text-para text-xs sm:text-sm">
            Ajmer, Africa Camp
          </p>
        </div>

        <div className="mt-1 flex gap-2 items-center">
          <Image src="/sallary.svg" width={16} height={16} alt="sallary" />
          <p className="font-stolzl font-book text-para text-xs sm:text-sm">
            Rs. 10,00,000 - 20,00,000/ year
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-9">
        <Button
          variant="linearGradient"
          className="text-xs sm:text-sm gap-1 h-9 md:h-10"
        >
          Apply Now
        </Button>
        <Button
          asChild
          variant="ghost"
          className="text-main text-xs sm:text-sm"
        >
          <Link href={`/jobs/JOB-2345-3498`} className="gap-1">
            <span>View Details</span>
            <ChevronRight className="size-5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
