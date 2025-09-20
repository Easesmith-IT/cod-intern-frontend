import { getSeoByPage } from "@/lib/axiosInstance";
import { JobsClient } from "./jobs-client";

export async function generateMetadata() {
  const seo = await getSeoByPage("jobs");

  const defaultTitle = "Jobs for Freshers & Internships - Codintern";
  const defaultDescription =
    "Explore the latest fresher jobs, internships, and career opportunities. Start your professional journey with Codintern today.";
  const keywords = [
    "fresher jobs 2025",
    "internships for students",
    "entry level jobs",
    "graduate jobs",
    "Codintern careers",
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
