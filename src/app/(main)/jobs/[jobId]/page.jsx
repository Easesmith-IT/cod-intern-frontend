import { JobDetailsClient } from "@/components/jobs/job-detail-client";
import { axiosInstance } from "@/lib/axiosInstance";

export async function generateMetadata({ params }) {
  const jobId = params.jobId;

  try {
    const { data } = await axiosInstance.get(
      `/student/jobs/get-details/${jobId}`
    );
    
    const job = data.job;

    if (!job) {
      return {
        title: "Job not found | Codintern",
        description: "This job listing does not exist or has expired.",
      };
    }

    const jobUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/job/${jobId}`;

    return {
      title: job.title,
      description: job.description?.slice(0, 150) || "Job details at CodIntern",
      openGraph: {
        title: job.title,
        description: job.description?.slice(0, 150) || "",
        url: jobUrl,
        siteName: "Codintern",
        images: [
          {
            url: job.image,
            width: 1200,
            height: 630,
            alt: job.title,
          },
        ],
        type: "website",
      },
    };
  } catch (error) {
    return {
      title: "Job not found | CodIntern",
      description: "This job listing could not be loaded.",
    };
  }
}

const JobDetails = ({ params }) => {
  return <JobDetailsClient jobId={params.jobId} />;
};

export default JobDetails;
