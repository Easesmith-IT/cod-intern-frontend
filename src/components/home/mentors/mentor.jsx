import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export const Mentor = () => {
  return (
    <Card className="border-border-1 rounded-md">
      <CardContent>
        <Image src="/mentor.svg" width={458} height={396} alt="mentor" />

        <div className="mt-5">
          <h3 className="font-stolzl font-medium text-2xl">Harsul Hisham</h3>
          <p>
            <span className="font-stolzl font-normal text-sm text-[#00000080]">
              Ex-
            </span>
            <span className="font-stolzl font-medium text-sm inline-block ml-1">
               Deloitte
            </span>
          </p>
          <p className="font-stolzl text-base font-normal mt-10">Proficient At:</p>
          <div className="flex gap-3 items-center mt-2 capitalize">
            <div className="bg-main rounded-md text-white py-1 px-2 text-sm font-stolzl font-normal">
              Web Development
            </div>
            <div className="bg-main rounded-md text-white py-1 px-2 text-sm font-stolzl font-normal">
              full stack
            </div>
            <div className="bg-main rounded-md text-white py-1 px-2 text-sm font-stolzl font-normal">
              designing
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
