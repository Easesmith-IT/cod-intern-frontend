import { getSeoByPage } from "@/lib/axiosInstance";
import { CoursesClient } from "./courses-client";

export async function generateMetadata() {
  const seo = await getSeoByPage("courses");

  const defaultTitle = "Courses & Skill Development - Codintern";
  const defaultDescription =
    "Browse Codintern's curated courses to enhance your skills, learn from experts, and boost your career prospects.";
  const keywords = [
    "Codintern Courses",
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
