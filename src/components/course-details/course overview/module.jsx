"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock4, Eye, EyeClosed, EyeOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Module = ({ title, duration, list }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="secondary"
        className={cn(
          "h-12 rounded flex justify-between bg-transparent border w-full items-center gap-5",
          isOpen && "bg-para-3 hover:bg-para-3 text-white"
        )}
      >
        <div className="flex items-center gap-3">
          <Image
            src={isOpen ? "/Homework.svg" : "/homework-dark.svg"}
            width={23}
            height={23}
            alt="Homework"
          />
          <h3 className="font-stolzl font-medium">{title}</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2 items-center">
            <Clock4 />
            <p className="font-stolzl font-normal text-xs sm:text-sm">{duration}</p>
          </div>
          <div className="w-7 h-7">
            {isOpen ? (
              <EyeOff className="text-white size-5 sm:size-6" />
            ) : (
              <Eye className="fill-white text-para-3 size-5 md:size-7" />
            )}
          </div>
        </div>
      </Button>
      {isOpen && (
        <div
          className="mt-3 py-4 px-6 shadow-md rounded"
          style={{
            background:
              "linear-gradient(184.25deg, #F6F6F6 3.63%, #FFFFFF 87.93%)",
          }}
        >
          <div className="border-l-2 border-main pl-5">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 list-disc ml-4">
              {list.map((item, i) => (
                <li className="text-xs sm:text-sm font-stolzl font-book" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
