import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export const Mentor = ({ img,name, position,proficiency = [] }) => {
  return (
    <Card className="border-border-1 rounded-md">
      <CardContent>
        <Image src={img} width={458} height={396} alt="mentor" />

        <div className="mt-5">
          <h3 className="font-stolzl font-medium text-2xl">{name}</h3>
          <p>
            {/* <span className="font-stolzl font-normal text-sm text-[#00000080]">
              Ex-
            </span> */}
            <span className="font-stolzl font-medium text-sm inline-block ml-1">
              {position}
            </span>
          </p>
          {proficiency.length > 0 && (
            <>
              <p className="font-stolzl text-base font-normal mt-10">
                Proficient At:
              </p>
              <div className="flex gap-3 items-center mt-2 capitalize">
                {proficiency.map((item, index) => (
                  <div
                    key={index}
                    className="bg-main rounded-md text-white py-1 px-2 text-sm font-stolzl font-normal"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
