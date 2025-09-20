import { JobApplicationsClient } from "@/components/applications/job-applications-client";

export const metadata = {
  title: "Job Applications - Codintern",
  description:
    "View and manage your job applications on Codintern. Track the jobs you've applied for and stay updated on application status.",
  keywords: [
    "Codintern job applications",
    "my applications",
    "student job dashboard",
    "track job applications",
    "applied jobs",
    "job status",
    "Codintern student portal",
    "career dashboard",
    "application tracking",
    "job management",
  ],
};

const JobApplications = () => {
  return <JobApplicationsClient />;
};

export default JobApplications;
