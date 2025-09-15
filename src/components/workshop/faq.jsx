"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is this a complete AI & ML course?",
    answer:
      "No, it covers essentials you need to confidently start your AI journey.",
  },
  {
    question: "Will I become an AI expert through this program?",
    answer:
      "This course builds a strong foundation; expertise comes with continued learning and practice.",
  },
  {
    question: "Can I pursue advanced AI after this?",
    answer:
      "Absolutely. The skills you gain here prepare you for higher-level AI concepts.",
  },
  {
    question: "Is coding knowledge required?",
    answer:
      "No. It’s fully beginner-friendly and taught in simple Hindi using real-life examples",
  },
  {
    question: "Is this a one-time or long-term course?",
    answer:
      "It’s a structured, guided program with lifetime access to recordings.",
  },
  {
    question: "Do I get access to more courses later?",
    answer:
      "Yes, you’ll receive opportunities to explore additional advanced programs.",
  },
  {
    question: "Who will conduct this session?",
    answer:
      "Experienced industry trainers with hands-on expertise in AI & ML.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full px-5 py-11 md:px-10 lg:py-20 xl:px-0">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-center text-center gap-3">
        <h2
          className="text-3xl font-bold leading-9 text-black lg:text-5xl lg:leading-[48px] xl:text-[52px] xl:leading-[60px]"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Frequently Asked{" "}
          <mark className="bg-transparent text-main">Questions</mark>
        </h2>
        <p className="text-lg leading-7 text-muted-foreground lg:text-xl lg:tracking-[0.4px]">
          Anything you need to know?
        </p>
      </div>

      {/* FAQ Items */}
      <div className="mt-9 flex flex-col gap-4 lg:mt-14 lg:w-[760px] mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="faq-item cursor-pointer flex flex-col w-full p-4 rounded-xl lg:p-5 transition-all duration-300 bg-gradient-to-r from-main to-para-3"
          >
            {/* Question */}
            <div className="flex items-center justify-between w-full gap-3">
              <h3 className="text-lg leading-7 text-white lg:text-xl">
                {faq.question}
              </h3>
              <ChevronDown
                className={`transition-transform text-white duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Answer with Tailwind-only animation */}
            <div
              className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-40 opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-base leading-6 text-white/70 border-t border-white/10 pt-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
