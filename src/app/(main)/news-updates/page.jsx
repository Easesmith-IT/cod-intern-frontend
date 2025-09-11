import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { NewsUpdatesClient } from "@/components/new-and-updates/news-updates-client";

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
