import Image from 'next/image'
import React from 'react'
import { Mentor } from './mentor';

export const Mentors = () => {
  return (
    <section className="section-container">
      <h2 className="text-[46px] text-center font-medium">
        <span className="text-main">Mentors behind</span> your career growth
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>

      <div className="grid grid-cols-3 gap-5 mt-10">
        <Mentor
          img="/our-mentors/Anjali.jpg"
          name="Anjali Sharma"
          position="Founder"
          proficiency={["Talent Acquisition", "Recruitment", "HR"]}
        />
        <Mentor
          img="/our-mentors/Gaurav.jpg"
          name="Gaurav Dwivedi"
          position="Co-Founder"
          proficiency={["Cloud Computing", "Python", "Digital Marketing"]}
        />
        <Mentor
          img="/our-mentors/user-placeholder.png"
          name="Akanksha Chaturvedi"
          position="Placement Head-Recruitment"
          proficiency={["Placements", "Soft Skill Trainer"]}
        />
      </div>
    </section>
  );
}
