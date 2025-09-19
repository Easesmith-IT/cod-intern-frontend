import { AboutUsClient } from "@/components/about-us/about-us-client";

export const metadata = {
  title: "About Us - Codintern",
  description:
    "Learn more about Codintern, our mission, and the team behind it.",
};

const AboutUs = () => {
  return (
    <section>
      <AboutUsClient />
    </section>
  );
};

export default AboutUs;
