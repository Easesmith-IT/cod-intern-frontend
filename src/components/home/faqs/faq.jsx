import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { options } from "@/constants/constants";
import React from "react";
import parse from "html-react-parser";

export const Faq = ({ que, ans, index }) => {
  return (
    <AccordionItem
      className="max-w-[900px] shadow-[0px_0px_10px_0px_#00000016] rounded-xl"
      value={`item-${index}`}
    >
      <AccordionTrigger className="font-stolzl font-medium px-4 text-sm md:text-base">
        {que}
      </AccordionTrigger>
      <AccordionContent className="px-4 border-t pt-4 text-xs md:text-base my-editor ml-4">
        {ans && parse(ans, options)}
      </AccordionContent>
    </AccordionItem>
  );
};

Faq.Skeleton = function FaqSkeleton() {
  return (
    <div className="max-w-[900px] shadow-[0px_0px_10px_0px_#00000016] bg-white px-2 py-1 rounded">
      <Skeleton className="w-full h-10" />
    </div>
  );
};
