"use client";

import { GetMoreInformation } from "./get-more-information/get-more-information";
import { HeroSection } from "./hero";
import { Map } from "./map";
import { SendUsMessage } from "./send-us-message/send-us-message";


export const ContactUsClient = () => {
  const {
    data: contentData,
    isLoading,
    isError,
  } = useApiQuery({
    url: "/student/content/contact-us", // pageName = "contact-us"
    queryKeys: ["content", "contact-us"],
  });

  console.log("contentData", contentData);

  const getDataBySection = (sectionName, pageName = "contact-us") => {
    return contentData?.data?.find(
      (section) =>
        section.pageName === pageName && section.sectionName === sectionName
    );
  };

  const heroData = useMemo(() => getDataBySection("hero"), [contentData]);

  return (
    <section>
      <HeroSection data={heroData} isLoading={isLoading} />
      <SendUsMessage />
      <Map />
      <GetMoreInformation />
    </section>
  );
};
