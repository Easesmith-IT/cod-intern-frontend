import { CoursesClient } from "./courses-client";

export const metadata = {
  title: "Courses & Skill Development - Codintern",
  description:
    "Browse Codintern's curated courses to enhance your skills, learn from experts, and boost your career prospects.",
};

const Courses = () => {
  return <CoursesClient />;
};

export default Courses;
