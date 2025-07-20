import Image from 'next/image'
import React from 'react'

export const StartYourCourse = () => {
  return (
    <section className="h-[316px] bg-para-3 relative">
      <div className="section-container h-full flex justify-between items-center">
        <Image
          src="/about-us/start-your-course.png"
          className="absolute left-1/5"
          width={1000}
          height={316}
          alt="start-your-course"
        />
        <h3 className="max-w-[400px] leading-14 text-[46px] font-stolzl text-white font-medium">
          Lets Start Your Course With Us?
        </h3>
        <div className="flex gap-32">
          <div className="text-white space-y-4 flex flex-col items-center">
            <Image src="/about-us/reviews.svg" width={37} height={37} alt="Reviews" />
            <h3 className="font-stolzl text-4xl font-medium">10k+</h3>
            <p className='font-book font-stolzl'>Company Reviews</p>
          </div>
          <div className="text-white space-y-4 flex flex-col items-center">
            <Image src="/about-us/reviews.svg" width={37} height={37} alt="Reviews" />
            <h3 className="font-stolzl text-4xl font-medium">24k+</h3>
            <p className='font-book font-stolzl'>Company Reviews</p>
          </div>
          <div className="text-white space-y-4 flex flex-col items-center">
            <Image src="/about-us/reviews.svg" width={37} height={37} alt="Reviews" />
            <h3 className="font-stolzl text-4xl font-medium">90k+</h3>
            <p className='font-book font-stolzl'>Company Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
