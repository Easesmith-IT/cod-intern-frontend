export const dynamic = "force-dynamic";

import { getSeoByPage } from "@/lib/axiosInstance";
import { CoursesClient } from "./courses-client";

export async function generateMetadata() {
  const seo = await getSeoByPage("courses");

  const defaultTitle = "Courses & Skill Development - CodIntern";
  const defaultDescription =
    "Browse CodIntern's curated courses to enhance your skills, learn from experts, and boost your career prospects.";
  const keywords = [
    "CodIntern Courses",
    "Skill Development",
    "Online Learning",
    "Career Growth",
    "Professional Courses",
    "Student Training",
    "Learn from Experts",
    "Career Development Programs",
    "Online Skill Enhancement",
    "Job Readiness Courses",
  ];

  return {
    title: seo?.title || defaultTitle,
    description: seo?.description || defaultDescription,
    keywords: seo?.keywords || keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/courses`,
    },
    openGraph: {
      title: seo?.title || defaultTitle,
      description: seo?.description || defaultDescription,
    },
  };
}

const Courses = () => {
  return <CoursesClient />;
};

export default Courses;
