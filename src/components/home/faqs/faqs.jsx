import Image from "next/image";
import React from "react";
import { CircularProgressBar } from "./circular-progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faq } from "./faq";

export const FAQs = () => {
  return (
    <section className="section-container grid grid-cols-[auto_1fr_auto] gap-10 py-28">
      <div className="">
        <h2 className="text-[46px] font-medium max-w-[400px]">
          <span className="text-main">Frequently</span> <br /> Asked Questions
        </h2>
        <Image
          src="/faq-img.svg"
          className="mt-10"
          width={312}
          height={316}
          alt="faq"
        />
      </div>
      <div>
        <Accordion type="single" collapsible>
          <div className="space-y-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Faq
                key={index}
                index={index}
                que=" What is an Innovation Training?"
                ans=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been dummy text the industry's standard dummy."
              />
            ))}
          </div>
        </Accordion>
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <CircularProgressBar value={95} size={141} color="#9237E3" />
          <p className="font-stolzl font-book text-base mt-4 text-center">
            Quality of work
          </p>
        </div>
        <div className="mt-10">
          <CircularProgressBar value={70} size={141} color="#2C1D43" />
          <p className="font-stolzl font-book text-base mt-4 text-center">
            Affordable cost
          </p>
        </div>
      </div>
    </section>
  );
};
