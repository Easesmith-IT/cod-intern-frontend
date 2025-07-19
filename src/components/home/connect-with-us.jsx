import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image';

export const ConnectWithUs = () => {
  return (
    <section
      style={{ backgroundImage: "url(/connect-with-us-bg.jpg)" }}
      className="h-[382px] my-24 overflow-hidden"
    >
      <div className="section-container flex justify-between items-center">
        <div className="py-20">
          <h3 className="font-stolzl font-medium text-[46px] leading-[60px] text-white max-w-[800px]">
            Connect with us. We’re ready to talk about opportunities
          </h3>
          <p className="font-stolzl max-w-[710px] text-[#FFFFFFCC] mt-4 mb-6 font-book">
            Lorem ipsum dolor sit amet consectetur. Odio in auctor lorem turpis
            massa. Lacinia ipsum augue felis venenatis sed gravida egestas.
            Curabitur nullam
          </p>
          <Button className="rounded-md">Read More</Button>
        </div>
        <div className="">
        <Image src="/connect-with-us-img.svg" className='mt-14' width={156} height={312} alt="connect-with-us" />
        </div>
      </div>
    </section>
  );
}
