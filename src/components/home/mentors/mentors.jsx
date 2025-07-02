import Image from 'next/image'
import React from 'react'
import { Mentor } from './mentor';

export const Mentors = () => {
  return (
    <section className='section-container'>
      <h2 className="text-[46px] text-center font-medium">
        <span className="text-main">Mentors behind</span> your career growth
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="step"
        />
      </h2>

      <div className="grid grid-cols-3 gap-5 mt-10">
        <Mentor />
        <Mentor />
        <Mentor />
      </div>
    </section>
  );
}
