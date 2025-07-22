import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const GloballyRecognized = () => {
  return (
    <section className="section-container pb-28">
      <h2 className="text-[46px] font-medium leading-14 text-center">
        <span className="text-main">Globally Acclaimed</span> Credentials
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>
      {/* <p className="font-stolzl font-book text-para text-center text-base mt-5">
        Our detailed Master Data Science & Analytics with AI Certification
        Course is carefully crafted to give you a deep knowledge of analytics
        and advanced AI, making you ready for the illustrious career of a Data
        Scientist. Additionally, with our expert coaching, you'll be adequately
        prepared to pass the Microsoft Certification Exam confidently, adding
        another strong credential to your resume. Ask now to learn more about
        our Data Science & Analytics with AI Certification Course and begin your
        higher-level career
      </p> */}

      <div className="flex gap-5 items-center justify-center mt-10">
        <Button variant="codIntern" className="rounded font-book">
          Codintern Certification
        </Button>
        <Button variant="outline" className="rounded font-book">
          Skill India Certification
        </Button>
      </div>

      <div className="flex justify-between gap-10 mt-12">
        <div className="">
          <h3 className="font-stolzl font-medium text-para-3 text-4xl max-w-[543px] leading-11">
            Master Certification in Data Science & Analytics with AI
          </h3>
          <p className="font-stolzl font-book text-para max-w-[590px] text-base mt-5">
            Our detailed Master Data Science & Analytics with AI Certification
            Course is carefully crafted to give you a deep knowledge of
            analytics and advanced AI, making you ready for the illustrious
            career of a Data Scientist. Additionally, with our expert coaching,
            you'll be adequately prepared to pass the Microsoft Certification
            Exam confidently, adding another strong credential to your resume.
            Ask now to learn more about our Data Science & Analytics with AI
            Certification Course and begin your higher-level career
          </p>
          <Button
            size="lg"
            variant="linearGradient"
            className="rounded-sm px-5 h-12 mt-10"
          >
            Inquire Now
          </Button>
        </div>
        <div className="flex gap-5">
          <Image
            src="/globally-recognized-img.jpg"
            width={654}
            height={428}
            alt="sharpen-your-skill-img"
          />
        </div>
      </div>
    </section>
  );
};
