"use client";

import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { ApplyNowModal } from "@/components/jobs/apply-now-modal";
import { Heading } from "@/components/jobs/heading";
import { JobDetailCard } from "@/components/jobs/job-detail-card";
import { ParsedHtml } from "@/components/jobs/parsed-html";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useApiQuery } from "@/hooks/useApiQuery";
import Image from "next/image";
import { useState } from "react";

export const JobDetailsClient = (params) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, error } = useApiQuery({
    url: `/admin/jobs/get-details/${params?.jobId}`,
    queryKeys: ["job"],
  });


  const {
    title,
    status,
    jobImage,
    customId,
    postingDate,
    category,
    city,
    state,
    country,
    education,
    _id,
    jobId,
    aboutCompany,
    aboutJob,
    rolesAndReponsibilities,
    goodToHave,
    externalLink,
  } = data?.job || {};

  return (
    <section className="section-container pt-8 md:pt-12 pb-12 md:pb-24">
      <CustomBreadCrumb
        options={[
          { label: "Home", url: "/", isLink: true },
          { label: "Job Detail Page", url: "", isLink: false },
        ]}
      />
      {/* <h2 className="text-2xl font-stolzl mt-10 relative leading-9 lg:leading-14 md:text-4xl  text-para-3 font-medium capitalize">
        Job Detail Page
      </h2> */}

      {isLoading ? (
        <Skeleton className="w-2/4 h-9 mt-6 sm:mt-10" />
      ) : (
        <h2 className="text-2xl mt-6 sm:mt-10 font-stolzl capitalize leading-9 lg:leading-14 md:text-4xl  font-medium">
          <span className="text-main">{title}</span> {category} Job
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="Ellipse"
          />
        </h2>
      )}

      {isLoading ? (
        <JobDetailCard.Skeleton />
      ) : (
        <JobDetailCard job={data?.job} />
      )}

      <Heading title="About the company" />
      {/* <Link
        href="#"
        className="text-main font-stolzl text-xs hover:underline flex items-center gap-1 my-2"
      >
        <span>Website</span>
        <ExternalLinkIcon className="size-3" />
      </Link> */}
      <ParsedHtml data={aboutCompany} isLoading={isLoading} />

      <div className="flex-1">
        <Heading title="About the Job" />
        <ParsedHtml data={aboutJob} isLoading={isLoading} />
      </div>

      <Heading title="Roles & Reponsibilities" />
      <ParsedHtml data={rolesAndReponsibilities} isLoading={isLoading} />

      <Heading title="Good to Have" />
      <ParsedHtml data={goodToHave} isLoading={isLoading} />
      {/* <p className="my-3 text-xs sm:text-sm md:text-base font-stolzl text-para font-book">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam porro
        distinctio adipisci molestiae veritatis esse nesciunt tempora placeat
        repellat non dolores rem, iure quia saepe ipsam soluta amet? Accusamus,
        dolores!
      </p> */}

      <Button
        variant="linearGradient"
        className="text-xs sm:text-sm gap-1 rounded-sm h-9 px-9 md:h-11 mt-10"
        onClick={() => setIsModalOpen(true)}
        disabled={status !== "active"}
      >
        Apply Now
      </Button>

      {isModalOpen && (
        <ApplyNowModal
          externalLink={externalLink}
          open={isModalOpen}
          setOpen={setIsModalOpen}
        />
      )}
    </section>
  );
};
