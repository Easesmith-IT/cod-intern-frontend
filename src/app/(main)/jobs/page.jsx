export const dynamic = "force-dynamic";

import { getSeoByPage } from "@/lib/axiosInstance";
import { JobsClient } from "./jobs-client";

export async function generateMetadata() {
  const seo = await getSeoByPage("jobs");

  const defaultTitle = "Jobs for Freshers & Internships - CodIntern";
  const defaultDescription =
    "Explore the latest fresher jobs, internships, and career opportunities. Start your professional journey with CodIntern today.";
  const keywords = [
    "fresher jobs 2025",
    "internships for students",
    "entry level jobs",
    "graduate jobs",
    "CodIntern careers",
    "student internships",
    "jobs for freshers",
    "career opportunities for graduates",
    "work from home internships",
    "IT fresher jobs",
  ];

  return {
    title: seo?.title || defaultTitle,
    description: seo?.description || defaultDescription,
    keywords: seo?.keywords || keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/jobs`,
    },
    openGraph: {
      title: seo?.title || defaultTitle,
      description: seo?.description || defaultDescription,
    },
  };
}

const Jobs = () => {
  return <JobsClient />;
};

export default Jobs;
