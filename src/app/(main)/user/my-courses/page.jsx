import { FreshJobs } from "@/components/home/fresh-jobs/fresh-jobs";
import { CompletedCourses } from "@/components/user-profile/completed-course/completed-course";
import { MyActiveCourses } from "@/components/user-profile/my-active-courses/my-active-courses";
// import { RecommendedCourses } from '@/components/user-profile/recommended-courses/recommended-courses'
import { WelcomeBack } from "@/components/user-profile/welcome-back/welcome-back";

export const metadata = {
  title: "My Courses - Codintern",
  description:
    "View and manage your enrolled courses on Codintern. Track your learning progress, access course materials, and continue your skill development.",
  keywords: [
    "Codintern my courses",
    "enrolled courses",
    "learning dashboard",
    "course progress",
    "online learning",
    "student courses",
    "Codintern dashboard",
    "skill development",
    "course materials",
    "track learning",
  ],
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
