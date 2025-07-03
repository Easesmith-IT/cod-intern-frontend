import { cn } from "@/lib/utils";
import Image from "next/image";

export const StepSeperator = ({ className }) => {
  return (
    <Image
      src="/step-seperator-img.svg"
      width={70}
      height={16}
      className={cn("mt-14 -mx-4", className)}
      alt="Step Seperator"
    />
  );
};
