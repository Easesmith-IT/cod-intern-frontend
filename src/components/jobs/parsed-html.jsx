import React from "react";
import parse, { domToReact } from "html-react-parser";
import { Skeleton } from "../ui/skeleton";

export const ParsedHtml = ({ data, isLoading }) => {
  const options = {
    replace: (domNode) => {
      if (domNode.name === "code") {
        return (
          <pre className="whitespace-pre-wrap">
            {domToReact(domNode.children)}
          </pre>
        );
      }
    },
  };
  return (
    <>
      {isLoading ? (
        <div className="my-3 space-y-2">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </div>
      ) : (
        <div className="my-3 my-editor prose text-xs sm:text-sm md:text-base font-stolzl text-para font-book">
          {data && parse(data, options)}
        </div>
      )}
    </>
  );
};
