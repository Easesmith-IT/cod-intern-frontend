import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export const Info = ({ title, desc, value }) => {
  return (
    <Card className="border-[#9237E333] rounded-sm shadow-[0px_4px_30px_0px_#0000001A]">
      <CardContent>
        <h3 className="sm:text-lg font-stolzl font-book">{title}</h3>
        <h2 className="font-stolzl text-xl sm:text-3xl font-medium mt-5">{value}</h2>
        <p className="font-stolzl font-medium text-xs sm:text-sm text-main">{desc}</p>
      </CardContent>
    </Card>
  );
};
