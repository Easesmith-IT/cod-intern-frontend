"use client";

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
import faqs from "@/data/faqs.json";
import { useApiQuery } from "@/hooks/useApiQuery";

export const FAQs = ({ courseId = "", category = "General" }) => {
  const { data, isLoading, error } = useApiQuery({
    url: `/student/faqs/category/${category}?courseId=${courseId}`,
    queryKeys: ["faq", courseId, category],
  });

  console.log("data", data);

  return (
    <section className="section-container grid justify-center md:grid-cols-[auto_1fr_auto] gap-10 py-12 md:py-24">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl  font-medium sm:max-w-[400px]">
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
       {!isLoading && <div>
          <Accordion type="single" collapsible>
            <div className="space-y-5">
              {data?.faqs.map((faq, index) => (
                <Faq
                  key={index}
                  index={index}
                  que={faq.question}
                  ans={faq.answer}
                />
              ))}
              {/* <AccordionItem
                className="max-w-[900px] shadow-[0px_0px_10px_0px_#00000016] rounded-xl"
                value={`item-${faqs.length}`}
              >
                <AccordionTrigger className="font-stolzl font-medium px-4 text-sm md:text-base">
                  What kind of community or networking opportunities does
                  CodIntern offer for students?
                </AccordionTrigger>
                <AccordionContent className="px-4 border-t pt-4 font-stolzl text-xs md:text-base">
                  CodIntern fosters community and networking through:
                  <ul className="mt-1 flex flex-col gap-2 list-disc ml-4">
                    <li className="font-book">
                      <b>Live Mentor-Led Sessions:</b> These sessions inherently
                      create a direct interaction channel between students and
                      experienced professionals, allowing for real-time
                      engagement and potential networking with both mentors and
                      fellow students.
                    </li>
                    <li className="font-book">
                      <b>Collaborative Project Work (Implied):</b> While not
                      explicitly stated as "group projects," working on
                      "real-world projects" often involves collaboration, which
                      can lead to peer-to-peer networking.
                    </li>
                    <li className="font-book">
                      <b>AI Career Matchmaking:</b> This feature, by connecting
                      students with "internships, projects, and job roles," acts
                      as a direct bridge to industry professionals and
                      companies, facilitating crucial networking opportunities
                      for career advancement.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem> */}
            </div>
          </Accordion>
        </div>}
      {isLoading && (
        <div className="space-y-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <Faq.Skeleton key={i} />
          ))}
        </div>
      )}
      <div className="flex justify-between md:flex-col gap-8 md:gap-0 sm:justify-center">
        <div>
          <CircularProgressBar
            value={85}
            strokeWidth={10}
            size={141}
            headingClassName="text-black text-2xl sm:text-4xl font-bold"
            colors="#9237E3"
          />
          <p className="font-stolzl font-book text-sm md:text-base mt-4 text-center">
            Quality of work
          </p>
        </div>
        <div className="md:mt-10">
          <CircularProgressBar
            value={77}
            strokeWidth={10}
            size={141}
            headingClassName="text-black text-2xl sm:text-4xl font-bold"
            colors="#2C1D43"
          />
          <p className="font-stolzl font-book text-sm sm:text-base mt-4 text-center">
            Affordable cost
          </p>
        </div>
      </div>
    </section>
  );
};
