import { GetMoreInformation } from "@/components/contact-us/get-more-information/get-more-information";
import { HeroSection } from "@/components/contact-us/hero";
import { Map } from "@/components/contact-us/map";
import { SendUsMessage } from "@/components/contact-us/send-us-message/send-us-message";
import React from "react";

export const metadata = {
  title: "Contact Us - Cod Intern",
  description:
    "Get in touch with Cod Intern for inquiries, support, or collaborations.",
};

const ContactUs = () => {
  return (
    <section>
      <HeroSection />
      <SendUsMessage />
      <Map />
      <GetMoreInformation />
    </section>
  );
};

export default ContactUs;
