"use client";

import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { ApplyNowModal } from "@/components/jobs/apply-now-modal";
import { Benifit } from "@/components/jobs/benifit";
import { Heading } from "@/components/jobs/heading";
import { Info } from "@/components/jobs/info";
import { JobDetailCard } from "@/components/jobs/job-detail-card";
import { ParsedHtml } from "@/components/jobs/parsed-html";
import { Skill } from "@/components/jobs/skill";
import { SocialItem } from "@/components/jobs/social-item";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useApiQuery } from "@/hooks/useApiQuery";
import { ExternalLinkIcon, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const keyResponsibility = [
  "Understand client preferences to tailor travel solutions",
  "Craft customized travel plans including accommodations, transportation, and activities",
  "Stay updated on travel trends and regulations",
  "Foster strong client relationships for repeat business",
  "Secure the best deals for seamless service delivery",
];

const benifits = [
  {
    title: "Competitive Salary",
    icon: "/job/competitive-salary.svg",
  },
  {
    title: "Free Food and Snack",
    icon: "/job/free-food.svg",
  },
  {
    title: "International Exposure",
    icon: "/job/international-exposure.svg",
  },
  {
    title: "Paid Sick Days",
    icon: "/job/paid-sick-days.svg",
  },
  {
    title: "THR / Bonus System",
    icon: "/job/bonus.svg",
  },
  {
    title: "Casual Dress Code",
    icon: "/job/dress.svg",
  },
  {
    title: "Free Lunch",
    icon: "/job/lunch.svg",
  },
  {
    title: "See All",
    icon: "/job/see-all.svg",
  },
];

const notes = [
  "Job title: Travel Advisor",
  "Timings: 10 AM - 7 PM (9-hour shift)",
  "Location: Jaipur (Work from Office)",
  "Compensation: 10,000/month stipend during a 2-month training. 4.2 LPA ( 3 LPA fixed + 1.2 LPA variable) post-training",
];

const skills = [
  "Client Relationship",
  "Conflict Management",
  "Effective Communication",
  "Interpersonal skills",
  "Time Management",
  "Travel Itinerary Making",
];

const links = [
  { href: "#", label: "Learn Business Communication" },
  { href: "#", label: "Learn Digital Marketing" },
  { href: "#", label: "Learn Business Analytics" },
  { href: "#", label: "Learn Photography" },
];

const whoCanApply = ["are from Jaipur only"];
const otherRequirements = [
  "Bachelor’s degree in any field",
  "Proficiency in English (spoken & written) and Hindi (spoken)",
  "Ability to multitask in a fast-paced environment",
  "Excellent organizational skills with attention to detail",
];

const salaryBreakDown = [
  "Fixed pay: ₹ 3,00,000 - 3,15,000 /year",
  "Variable pay: ₹ 1,20,000 - 1,25,000 /year",
];

// import { Metadata } from "next";
// import { axiosInstance } from "@/lib/axiosInstance";

// export async function generateMetadata({ params }) {
//   const jobId = params.jobId;
//   const { data } = await axiosInstance.get(`/student/jobs/${jobId}`); // your API/db call
//   const job = data.job;

//   const jobUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/job/${jobId}`;

//   return {
//     title: job.title,
//     description: job.description.slice(0, 150), // short desc
//     openGraph: {
//       title: job.title,
//       description: job.description.slice(0, 150),
//       url: jobUrl,
//       siteName: "YourSiteName",
//       images: [
//         {
//           url: job.image || "/default-job.png",
//           width: 1200,
//           height: 630,
//           alt: job.title,
//         },
//       ],
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: job.title,
//       description: job.description.slice(0, 150),
//       images: [job.image || "/default-job.png"],
//     },
//   };
// }

const JobDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();

  const { data, isLoading, error } = useApiQuery({
    url: `/admin/jobs/get-details/${params?.jobId}`,
    queryKeys: ["job"],
  });

  console.log("data", data);

  const {
    title,
    status,
    jobImage,
    customId,
    postingDate,
    category,
    city,
    state,
    country,
    education,
    _id,
    aboutCompany,
    aboutJob,
    rolesAndReponsibilities,
    goodToHave,
  } = data?.job || {};

  return (
    <section className="section-container pt-8 md:pt-12 pb-12 md:pb-24">
      <CustomBreadCrumb
        options={[
          { label: "Home", url: "/", isLink: true },
          { label: "Job Detail Page", url: "", isLink: false },
        ]}
      />
      {/* <h2 className="text-2xl font-stolzl mt-10 relative leading-9 lg:leading-14 md:text-4xl  text-para-3 font-medium capitalize">
        Job Detail Page
      </h2> */}

      {isLoading ? (
        <Skeleton className="w-2/4 h-9 mt-6 sm:mt-10" />
      ) : (
        <h2 className="text-2xl mt-6 sm:mt-10 font-stolzl capitalize leading-9 lg:leading-14 md:text-4xl  font-medium">
          <span className="text-main">{title}</span> {category} Job
          <Image
            src="/ellipse-group.svg"
            className="inline-block ml-2"
            width={46}
            height={16}
            alt="Ellipse"
          />
        </h2>
      )}

      {isLoading ? (
        <JobDetailCard.Skeleton />
      ) : (
        <JobDetailCard job={data?.job} />
      )}

      <Heading title="About the company" />
      {/* <Link
        href="#"
        className="text-main font-stolzl text-xs hover:underline flex items-center gap-1 my-2"
      >
        <span>Website</span>
        <ExternalLinkIcon className="size-3" />
      </Link> */}
      <ParsedHtml data={aboutCompany} isLoading={isLoading} />

      <div className="flex-1">
        <Heading title="About the Job" />
        <ParsedHtml data={aboutJob} isLoading={isLoading} />
      </div>

      <Heading title="Roles & Reponsibilities" />
      <ParsedHtml data={rolesAndReponsibilities} isLoading={isLoading} />

      <Heading title="Good to Have" />
      <ParsedHtml data={goodToHave} isLoading={isLoading} />
      {/* <p className="my-3 text-xs sm:text-sm md:text-base font-stolzl text-para font-book">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam porro
        distinctio adipisci molestiae veritatis esse nesciunt tempora placeat
        repellat non dolores rem, iure quia saepe ipsam soluta amet? Accusamus,
        dolores!
      </p> */}

      <Button
        variant="linearGradient"
        className="text-xs sm:text-sm gap-1 rounded-sm h-9 px-9 md:h-11 mt-10"
        onClick={() => setIsModalOpen(true)}
        disabled={status !== "active"}
      >
        Apply Now
      </Button>

      {isModalOpen && (
        <ApplyNowModal open={isModalOpen} setOpen={setIsModalOpen} />
      )}

      {/* <div className="flex flex-wrap justify-center items-center gap-10 mt-10 lg:mt-20">
        <SocialItem
          icon="/job/whatsapp.svg"
          title="WhatsApp"
          className="bg-[#00AD3B]"
          href="https://www.codeIntern.com"
        />
        <SocialItem
          icon="/job/instagram.svg"
          title="Instagram"
          className="bg-gradient-to-r from-[#7E0CFF] to-[#FF009B]"
          href="https://www.codeIntern.com"
        />
        <SocialItem
          icon="/job/linkedin.svg"
          title="Linkedin"
          className="bg-[#0A66C2]"
          href="https://www.codeIntern.com"
        />
        <SocialItem
          icon="/job/facebook-1.svg"
          title="Facebook"
          className="bg-[#1877F2]"
          href="https://www.codeIntern.com"
        />
        <SocialItem
          icon="/job/youtube.svg"
          title="Youtube"
          className="bg-[#FF0033]"
          href="https://www.codeIntern.com"
        />
      </div> */}

      {/* <Heading title="Benefits:" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
        {benifits.map((benifit) => (
          <Benifit key={benifit.title} benifit={benifit} />
        ))}
      </div> */}

      {/* <Heading title="Note" />
      <ol className="mt-4 text-xs space-y-1 sm:text-sm md:text-base list-decimal ml-4 font-stolzl text-para font-book">
        {notes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol> */}

      {/* <Heading title="Skill(s) Required" />
      <div className="mt-4 flex flex-wrap gap-4 items-center">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div> */}

      {/* <Heading title="Earn certifications in these skills" />
      <div className="mt-4 flex flex-wrap gap-6 items-center">
        {links.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className="text-main font-stolzl text-xs sm:text-sm hover:underline"
          >
            {label}
          </Link>
        ))}
      </div> */}

      {/* <Heading title="Who can apply" />
      <p className="mt-3 text-xs sm:text-sm md:text-base font-stolzl text-para font-book">
        Only those candidates can apply who:
      </p>
      <ol className="mt-4 text-xs space-y-1 sm:text-sm md:text-base list-decimal ml-4 font-stolzl text-para font-book">
        {whoCanApply.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol> */}

      {/* <Heading title="Other requirements" />
      <ol className="mt-4 text-xs space-y-1 sm:text-sm md:text-base list-decimal ml-4 font-stolzl text-para font-book">
        {otherRequirements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol> */}

      {/* <Heading title="Salary" />
      <p className="mt-3 text-xs sm:text-sm md:text-base font-stolzl text-para font-book">
        Annual CTC: ₹ 4,20,000 - 4,40,000 /year
      </p>
      <p className="my-3 text-xs sm:text-sm md:text-base font-stolzl text-para font-book">
        Annual CTC breakup:
      </p>
      <ol className="mt-4 text-xs space-y-1 sm:text-sm md:text-base list-decimal ml-4 font-stolzl text-para font-book">
        {salaryBreakDown.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol> */}

      {/* <Heading title="Number of openings" />
      <p className="my-3 text-xs sm:text-sm md:text-base font-stolzl text-para font-book">
        20
      </p> */}

      {/* <div className="border rounded-md max-w-4xl p-5 sm:p-10 mt-10">
        <Heading title="Activity on CodeIntern" className="mt-0" />

        <div className="mt-8 flex flex-wrap gap-4">
          <Info heading="Hiring since February 2025" img="/job/calendar.svg" />
          <Info
            heading="27 opportunities posted"
            img="/job/opportunities.svg"
          />
          <Info heading="13 candidates hired" img="/job/candidates-hired.svg" />
        </div>
      </div> */}
    </section>
  );
};

export default JobDetails;
