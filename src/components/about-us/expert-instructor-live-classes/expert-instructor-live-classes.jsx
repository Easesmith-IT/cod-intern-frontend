import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Check, ChevronDown } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import { Info } from './info';

export const ExpertInstructorLiveClasses = () => {
  return (
    <section className="py-24 section-container flex gap-20 items-center">
      <div>
        <h2 className="text-[46px] font-medium leading-14 capitalize">
          <span className="text-main">Expert Instructor</span> Live Classes
          Here!
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="Ellipse"
          />
        </h2>
        <p className="font-stolzl text-sm text-para max-w-[869px] mt-2 font-book">
          A Project Management course equips individuals with the knowledge and
          skills to effectively plan, execute, and control projects, ensuring
          they are completed on time, within budget, and the satisfaction of
          stakeholders. It's a fundamental discipline for professionals across
          various industries. A Project Management course equips individuals
          with the knowledge and skills to effectively plan.
        </p>
        <Button
          variant="ghost"
          className="font-semibold text-para-3 my-5 hover:bg-transparent has-[>svg]:px-0 group"
        >
          <span>Show More</span>
          <ChevronDown className="group-hover:translate-y-1 transition group-active:translate-y-0" />
        </Button>
        <Separator />
        <div className="flex gap-10 mt-10">
          <Info title="24/7 Support" />
          <Info title="24/7 Support" />
          <Info title="24/7 Support" />
          <Info title="24/7 Support" />
        </div>
      </div>
      <div>
        <Image
          src="/about-us/expert-instructor.svg"
          width={401}
          height={419}
          alt="expert-instructor"
        />
      </div>
    </section>
  );
}
