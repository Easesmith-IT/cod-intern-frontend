import React from "react";
import parse, { domToReact } from "html-react-parser";

export const ParsedHtml = ({ data }) => {
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
    <div className="my-3 text-xs sm:text-sm md:text-base font-stolzl text-para font-book">
      {data && parse(data, options)}
    </div>
  );
};
