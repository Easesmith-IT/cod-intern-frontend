import { CourseDetailClient } from "@/components/course-details/course-detail-client";
import { axiosInstance } from "@/lib/axiosInstance";

export async function generateMetadata({ params }) {
  const courseId = params.courseId;

  // Fetch course data
  const { data } = await axiosInstance.get(`/student/courses/${courseId}`);
  const course = data.course;

  const courseUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/courses/${courseId}`;

  return {
    title: course.title,
    description:
      course.description?.slice(0, 160) || "Explore this course on CodIntern.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/courses/${courseId}`,
    },
    openGraph: {
      title: course.title,
      description: course.description?.slice(0, 160) || "",
      url: courseUrl,
      siteName: "CodIntern",
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      type: "article", // courses are closer to content than plain "website"
    },
  };
}

const CourseDetails = ({ params }) => {
  return <CourseDetailClient courseId={params.courseId} />;
};

export default CourseDetails;
