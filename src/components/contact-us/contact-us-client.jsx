"use client";

import { useApiQuery } from "@/hooks/useApiQuery";
import { GetMoreInformation } from "./get-more-information/get-more-information";
import { HeroSection } from "./hero";
import { Map } from "./map";
import { SendUsMessage } from "./send-us-message/send-us-message";
import { useMemo } from "react";


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
   const sendUsMessageData = useMemo(
     () => getDataBySection("send-us-message"),
     [contentData]
   );
   const mapData = useMemo(() => getDataBySection("map"), [contentData]);
   const getMoreInformationData = useMemo(
     () => getDataBySection("get-more-information"),
     [contentData]
   );

  return (
    <section>
      <HeroSection data={heroData} isLoading={isLoading} />
      <SendUsMessage data={sendUsMessageData} isLoading={isLoading} />
      <Map />
      <GetMoreInformation />
    </section>
  );
};
