import { FreshJobs } from "@/components/home/fresh-jobs/fresh-jobs";
import { CompletedCourses } from "@/components/user-profile/completed-course/completed-course";
import { MyActiveCourses } from "@/components/user-profile/my-active-courses/my-active-courses";
// import { RecommendedCourses } from '@/components/user-profile/recommended-courses/recommended-courses'
import { WelcomeBack } from "@/components/user-profile/welcome-back/welcome-back";

export const metadata = {
  title: "My Courses - CodIntern",
  description:
    "View and manage your enrolled courses on CodIntern. Track your learning progress, access course materials, and continue your skill development.",
  keywords: [
    "CodIntern my courses",
    "enrolled courses",
    "learning dashboard",
    "course progress",
    "online learning",
    "student courses",
    "CodIntern dashboard",
    "skill development",
    "course materials",
    "track learning",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/user/my-courses`,
  },
};

const MyCourses = () => {
  return (
    <section>
      <WelcomeBack />
      <MyActiveCourses />
      <FreshJobs className="pt-12 md:pt-24" />
      <CompletedCourses />
      {/* <RecommendedCourses /> */}
    </section>
  );
};

export default MyCourses;
