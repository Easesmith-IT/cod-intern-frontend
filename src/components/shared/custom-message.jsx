import { cn } from "@/lib/utils";
import React from "react";

const CustomMessage = ({ message="", className }) => {
  return (
    <div
      className={cn(
        "w-full text-center py-5 text-muted-foreground text-sm",
        className
      )}
    >
      {message}
    </div>
  );
};

export default CustomMessage;
