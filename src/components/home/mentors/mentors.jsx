import Image from "next/image";
import React from "react";
import { Mentor } from "./mentor";

export const Mentors = () => {
  return (
    <section className="section-container">
      <h2 className="text-2xl font-stolzl leading-9 lg:leading-14 md:text-4xl lg:text-[46px] font-medium text-center">
        <span className="text-main">Mentors behind</span> your career growth
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>

      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <Mentor
          img="/our-mentors/Anjali-img.jpg"
          name="Anjali Sharma"
          position="Founder"
          proficiency={["Talent Acquisition", "Recruitment", "HR"]}
        />
        <Mentor
          img="/our-mentors/Gaurav-img.jpg"
          name="Gaurav Dwivedi"
          position="Co-Founder"
          proficiency={["Cloud Computing", "Python", "Digital Marketing"]}
        />
        <Mentor
          img="/our-mentors/Akansha-img.jpg"
          name="Akanksha Chaturvedi"
          position="Placement Head-Recruitment"
          proficiency={["Placements", "Soft Skill Trainer"]}
        />
      </div>
    </section>
  );
};
