import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react'

export const Faq = ({que,ans,index}) => {
  return (
    <AccordionItem
      className="max-w-[900px] shadow-[0px_0px_10px_0px_#00000016] rounded-xl"
      value={`item-${index}`}
    >
      <AccordionTrigger className="font-stolzl font-medium px-4">
       {que}
      </AccordionTrigger>
      <AccordionContent className="px-4 border-t pt-4">
       {ans}
      </AccordionContent>
    </AccordionItem>
  );
}
