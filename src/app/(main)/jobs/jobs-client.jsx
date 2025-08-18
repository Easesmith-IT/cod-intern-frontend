"use client";

import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { Job } from "@/components/jobs/job";
import { PaginationComp } from "@/components/PaginationComp";
import DataNotFound from "@/components/shared/DataNotFound";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useApiQuery } from "@/hooks/useApiQuery";
import React, { useEffect, useState } from "react";

export const JobsClient = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [limit, setLimit] = useState(12);

  const { data, isLoading, error } = useApiQuery({
    url: `/student/jobs/get?page=${page}&limit=${limit}`,
    queryKeys: ["job", page, limit],
  });

  useEffect(() => {
    if (data?.pagination) {
      setPageCount(() => data?.pagination?.totalPages);
    }
  }, [data]);

  useScrollToTop(page);

  return (
    <section className="section-container pt-8 md:pt-12 pb-12 md:pb-24">
      <CustomBreadCrumb
        options={[
          { label: "Home", url: "/", isLink: true },
          { label: "Job Page", url: "", isLink: false },
        ]}
      />
      <h2 className="text-2xl font-stolzl mt-6 sm:mt-10 relative leading-9 lg:leading-14 md:text-4xl  text-para-3 font-medium capitalize">
        Job Listing
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 sm:mt-10">
        {isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <Job.Skeleton key={index} />
          ))}
        {data?.jobs?.map((job) => (
          <Job key={job._id} job={job} />
        ))}
      </div>

      {data?.jobs?.length === 0 && !isLoading && <DataNotFound name="Jobs" />}

      <PaginationComp
        page={page}
        pageCount={pageCount}
        setPage={setPage}
        href="/jobs"
        className="mt-10"
      />
    </section>
  );
};
