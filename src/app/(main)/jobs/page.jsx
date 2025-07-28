"use client";

import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { Job } from "@/components/jobs/job";
import { PaginationComp } from "@/components/PaginationComp";
import React, { useState } from "react";

const Jobs = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(2);

  return (
    <section className="section-container pt-8 md:pt-12 pb-12 md:pb-24">
      <CustomBreadCrumb
        options={[
          { label: "Home", url: "/", isLink: true },
          { label: "Job Page", url: "", isLink: false },
        ]}
      />
      <h2 className="text-2xl font-stolzl mt-6 sm:mt-10 relative leading-9 lg:leading-14 md:text-4xl lg:text-[46px] text-para-3 font-medium capitalize">
        Job Listing
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 sm:mt-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <Job key={index} />
        ))}
      </div>

      <PaginationComp
        page={page}
        pageCount={pageCount}
        setPage={setPage}
        className="mt-10"
      />
    </section>
  );
};

export default Jobs;
