export const dynamic = "force-dynamic";

import { ContactUsClient } from "@/components/contact-us/contact-us-client";
import { getSeoByPage } from "@/lib/axiosInstance";

export async function generateMetadata() {
  const seo = await getSeoByPage("contact-us");

  const defaultTitle = "Contact Us - Codintern";
  const defaultDescription =
    "Get in touch with Codintern for inquiries, support, or collaborations.";
  const keywords = [
    "Codintern contact",
    "Codintern support",
    "Codintern inquiries",
    "Codintern collaborations",
    "Codintern help",
    "Codintern customer service",
    "Codintern email",
    "Codintern phone",
  ];

  return {
    title: seo?.title || defaultTitle,
    description: seo?.description || defaultDescription,
    keywords: seo?.keywords || keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/contact-us`,
    },
    openGraph: {
      title: seo?.title || defaultTitle,
      description: seo?.description || defaultDescription,
    },
  };
}

const ContactUs = () => {
  return (
    <section>
      <ContactUsClient />
    </section>
  );
};

export default ContactUs;
