"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this a complete AI & ML course?",
    answer:
      "No. This ₹9 workshop is your first step into Generative AI. You’ll learn what matters most, real-world applications, and how to think like an AI professional.",
  },
  {
    question: "Will I become an AI expert here?",
    answer:
      "Not instantly, but you’ll gain prompt skills, tool confidence & clarity on next steps.",
  },
  {
    question: "Can I learn advanced AI after this?",
    answer:
      "Yes, we’ll guide you to Python ML, Deep Learning, automation & career programs.",
  },
  {
    question: "Is coding knowledge required?",
    answer:
      "No. It’s beginner-friendly, taught in simple Tamil with real-life use cases.",
  },
  {
    question: "Is this a one-time or long-term course?",
    answer:
      "It’s a 3-hour focused workshop for ₹9. Later, you can choose advanced training.",
  },
  {
    question: "Do I get access to more courses later?",
    answer:
      "Yes! You’ll unlock our Generative AI, Python ML & advanced AI/ML programs.",
  },
  {
    question: "Who will conduct this session?",
    answer:
      "Mr. Premanand Sethurajan, Founder of LMES Academy and UPTOR will lead this session. With over 10 years in leading technology Industry. He will share insights.",
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
