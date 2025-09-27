import { JobApplicationsClient } from "@/components/applications/job-applications-client";

export const metadata = {
  title: "Job Applications - CodIntern",
  description:
    "View and manage your job applications on CodIntern. Track the jobs you've applied for and stay updated on application status.",
  keywords: [
    "CodIntern job applications",
    "my applications",
    "student job dashboard",
    "track job applications",
    "applied jobs",
    "job status",
    "CodIntern student portal",
    "career dashboard",
    "application tracking",
    "job management",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/user/job-applications`,
  },
};

const JobApplications = () => {
  return <JobApplicationsClient />;
};

export default JobApplications;
