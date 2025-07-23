import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export const Mentor = ({ img, name, position, about, experience }) => {
  return (
    <Card className="border-border-1 rounded-md">
      <CardContent className="flex flex-col justify-between h-full">
        <Image
          src={img}
          width={458}
          height={396}
          className="object-cover max-w-[458px] w-full max-h-[396px]"
          alt="mentor"
        />

        <div className="mt-5">
          <h3 className="font-stolzl font-medium text-2xl">{name}</h3>
          <p className="font-stolzl font-medium text-base inline-block">
            {position}
          </p>
          <p className="font-stolzl font-medium text-sm inline-block mt-3">
            {experience}
          </p>

        </div>
          <p className="font-stolzl text-sm font-book mt-auto">{about}</p>
      </CardContent>
    </Card>
  );
};
