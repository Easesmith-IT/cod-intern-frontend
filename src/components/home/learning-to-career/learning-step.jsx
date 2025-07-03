import React from 'react'

export const LearningStep = ({title,desc,index}) => {
  return (
    <div className='border max-w-[310px] w-full border-[#D9D9D940] px-4 py-8 space-y-4'>
        <div className="flex justify-center items-center mx-auto border-2 size-[68px] rounded-full font-stolzl font-medium text-xl border-main">{index + 1}</div>
        <h4 className='font-stolzl font-medium text-xl text-center'>{title}</h4>
        <p className='font-stolzl font-book text-base text-para text-center'>{desc}</p>
    </div>
  )
}
