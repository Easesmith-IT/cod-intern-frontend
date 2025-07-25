import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const ActiveCourseCard = ({ img, title, instructor, progress = 0 }) => {
  return (
    <Card className="rounded-sm p-4 gap-5">
      <CardHeader className="px-0">
        <Image
          src={img}
          width={354}
          height={223}
          className="w-full rounded-sm"
          alt="Course"
        />
      </CardHeader>
      <CardContent className="p-0">
        <h2 className="font-stolzl text-xl leading-7 font-medium">{title}</h2>
        <span className="font-stolzl text-xs text-para-2">{instructor}</span>
        <div className="mt-1">
          <span className="font-medium font-stolzl text-sm">
            {progress}% Complete
          </span>
          <Progress
            className="mt-1 h-2.5"
            className1="bg-main rounded-full"
            value={progress}
          />
        </div>

        <Button variant="link" className="!px-0 text-main mt-6">
          <span className="text-xs sm:text-sm md:text-base">
            {progress === 100 ? "View Certificate" : "Continue Course"}
          </span>
          <ChevronRight />
        </Button>
      </CardContent>
    </Card>
  );
};
