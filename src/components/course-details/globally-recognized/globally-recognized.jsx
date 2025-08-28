import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const GloballyRecognized = () => {
  return (
    <section
      id="certifications"
      className="section-container pb-12 md:pb-24 scroll-mt-52"
    >
      <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl  font-medium text-center">
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
        <Button
          variant="codIntern"
          className="rounded font-book text-xs md:text-sm"
        >
          Training Certifications
        </Button>
        {/* <Button
          variant="outline"
          className="rounded font-book text-xs md:text-sm"
        >
          Skill India Certification
        </Button> */}
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-10 mt-12">
        <div className="">
          <h3 className="font-stolzl font-medium text-para-3 text-xl sm:text-2xl lg:text-4xl max-w-[543px] leading-9 sm:leading-10 lg:leading-11">
            Master Certification in Data Science & Analytics with AI
          </h3>
          <p className="font-stolzl font-book text-para max-w-[590px] text-xs sm:text-sm lg:text-base mt-5">
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
            className="rounded-sm px-3 h-10 sm:px-5 sm:h-12 mt-10 text-xs md:text-sm"
          >
            <Link href="#course-hero-section">
            Inquire Now
            </Link>
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
