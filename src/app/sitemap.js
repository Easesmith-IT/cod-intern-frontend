import { axiosInstance } from "@/lib/axiosInstance";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const today = new Date();

  const staticPages = [
    { url: `${baseUrl}/`, priority: 1.0 },
    { url: `${baseUrl}/about-us`, priority: 0.8 },
    { url: `${baseUrl}/blogs`, priority: 0.7 },
    { url: `${baseUrl}/contact-us`, priority: 0.8 },
    { url: `${baseUrl}/courses`, priority: 0.8 },
    { url: `${baseUrl}/feedback`, priority: 0.6 },
    { url: `${baseUrl}/jobs`, priority: 0.7 },
    // { url: `${baseUrl}/user/my-courses`, priority: 0.5 },
    // { url: `${baseUrl}/user/profile`, priority: 0.5 },
    // { url: `${baseUrl}/user/settings`, priority: 0.5 },
    // { url: `${baseUrl}/user/settings/account-settings`, priority: 0.5 },
    // { url: `${baseUrl}/user/settings/learning-preferences`, priority: 0.5 },
    // { url: `${baseUrl}/user/settings/notification-settings`, priority: 0.5 },
    // { url: `${baseUrl}/user/settings/security-privacy`, priority: 0.5 },
    { url: `${baseUrl}/workshop/registration`, priority: 0.6 },
  ].map((page) => ({ ...page, lastModified: today }));

  // Dynamic: Courses
  let coursePages = [];
  try {
    const { data } = await axiosInstance.get("/admin/courses/get?getAll=true");
    coursePages =
      data?.courses?.map((course) => ({
        url: `${baseUrl}/courses/${course._id}`,
        priority: 0.7,
        lastModified: course.updatedAt ? new Date(course.updatedAt) : today,
      })) || [];
  } catch (error) {
    console.error("Failed to fetch courses for sitemap:", error.message);
  }

  // Dynamic: Jobs
  let jobPages = [];
  try {
    const { data } = await axiosInstance.get("/admin/jobs/get?getAll=true");
    jobPages =
      data?.jobs?.map((job) => ({
        url: `${baseUrl}/jobs/${job._id}`,
        priority: 0.7,
        lastModified: job.updatedAt ? new Date(job.updatedAt) : today,
      })) || [];
  } catch (error) {
    console.error("Failed to fetch jobs for sitemap:", error.message);
  }

  // Merge all pages
  return [...staticPages, ...coursePages, ...jobPages];
}
