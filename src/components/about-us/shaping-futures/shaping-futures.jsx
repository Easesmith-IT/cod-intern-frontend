import Image from "next/image";
import React from "react";
import Info from "./info";
import { cn } from "@/lib/utils";

export const ShapingFutures = ({ className }) => {
  return (
    <section className={cn("section-container pb-24", className)}>
      <h2 className="text-[46px] font-medium leading-14 capitalize text-center">
        <span className="text-main">Crafting Careers</span> with Vision
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>
      <p className="font-stolzl text-sm text-para mt-2 font-book text-center">
        Identify the right decision-makers and seal the deal with confidence.
      </p>

      <p className="font-stolzl text-sm text-para mt-4 font-book mx-auto text-center max-w-4xl">
        At CodIntern, we enable every student to think big and construct boldly.
        Our vision is to prepare future creators with the talent, mentorship,
        and attitude required to succeed. We're democratizing technology
        education to make it accessible, engaging, and meaningful.
      </p>

      <div className="grid grid-cols-3 gap-5 mt-7">
        <Info
          img="/about-us/who-we-are.svg"
          title="Who We Are?"
          desc="CodIntern, an DPIIT-certified EdTech platform and Skill India partner, enables students, particularly from Tier 2 and 3 cities, with future skills and practical exposure. Established by educators and technology leaders, we bridge the industry-academia gap through AI solutions, mentorship, and internship-based, experiential learning experiences."
        />
        <Info
          img="/about-us/our-mission.svg"
          title="Our Mission"
          desc="Our purpose is to empower students all over India with industry-grade skills, practical experience, and AI-based learning. We aim to close the skill-employability divide by making education in technology accessible, affordable, and results-focused—enabling every student to walk confidently from college to career, no matter where they come from or how far they reach."
        />
        <Info
          img="/about-us/our-vision.svg"
          title="Our Vision"
          desc="Our aspiration is to become India's leading career-launch platform, trusted by students, colleges and industry. We want to equip every student with the tools, guidance, and opportunities to succeed—growing and celebrating tech talent from across the nation for the digital economy."
        />
      </div>
    </section>
  );
};
