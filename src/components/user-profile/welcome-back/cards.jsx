import React from "react";
import { Info } from "./info";

export const Cards = () => {
  return (
    <div className="mt-10 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Info title="Courses Completed" value="2" desc="5% increase" />
      <Info title="Time Spent Learning" value="15h 20m" desc="3% increase" />
      <Info title="Learning Streak" value="10 days" desc="10% increase" />
      <Info title="Goal Progress" value="80%" desc="2% increase" />
    </div>
  );
};
