import Image from 'next/image'
import React from 'react'

export const WeJustKeepGrowing = () => {
  return (
    <div className="section-container flex flex-col items-center">
      <h2 className="text-[46px] text-center capitalize w-full font-medium leading-14">
        <span className="text-main">We Just</span> Keep Growing
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="step"
        />
      </h2>

      <p className="text-para text-center mt-4 font-stolzl font-book max-w-[814px] mx-auto">
        Worried about COVID-19? Our Virtual Classroom training lets you learn
        from home, just as you would in a classroom, using and courses, so
        there’s more choice than ever.
      </p>

      <Image src="/we-just-keep-growing.jpg" className='mt-12' width={1200} height={440} alt="we just keep growing" />
    </div>
  );
}
