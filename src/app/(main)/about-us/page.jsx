import { AboutUsClient } from "@/components/about-us/about-us-client";
import { getSeoByPage } from "@/lib/axiosInstance";

export async function generateMetadata() {
  const seo = await getSeoByPage("about-us");

  const defaultTitle = "About Us - Codintern";
  const defaultDescription =
    "Learn more about Codintern, our mission, and the team behind it.";
  const keywords = [
    "About Codintern",
    "Codintern Team",
    "Our Mission",
    "Company Values",
    "Codintern Story",
    "Career Platform",
    "Internship Platform",
    "Job Portal for Freshers",
    "Skill Development",
    "Codintern Vision",
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

const AboutUs = () => {
  return (
    <section>
      <AboutUsClient />
    </section>
  );
};

export default AboutUs;
