import React from "react";

export const Heading = ({ heading, para }) => {
  return (
    <>
      <h1 className="font-stolzl capitalize text-xl md:text-3xl font-medium text-center">
        {heading}
      </h1>
      {para && (
        <p className="font-stolzl text-xs sm:text-sm md:text-lg mt-2 font-book text-center">
          {para}
        </p>
      )}
    </>
  );
};
