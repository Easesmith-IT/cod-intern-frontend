import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { NewsUpdatesClient } from "@/components/new-and-updates/news-updates-client";

export const metadata = {
  title: "News & Updates - Codintern",
  description:
    "Stay updated with the latest news, announcements, and updates from Codintern on internships, fresher jobs, and career tips.",
  openGraph: {
    title: "News & Updates - Codintern",
    description:
      "Stay updated with the latest news, announcements, and updates from Codintern on internships, fresher jobs, and career tips.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/new-and-updates`,
    siteName: "Codintern",
    type: "website",
  },
};

const NewsAndUpdates = () => {
  return (
    <section className="section-container pt-8 md:pt-12 pb-12 md:pb-24">
      <CustomBreadCrumb
        options={[
          { label: "Home", url: "/", isLink: true },
          { label: "News & Updates Page", url: "", isLink: false },
        ]}
      />

      <NewsUpdatesClient />
    </section>
  );
};

export default NewsAndUpdates;
