import { FeedbackClient } from "./feedback-client";

export const metadata = {
  title: "Workshop Feedback Form - Codintern",
  description:
    "Share your feedback on Codintern's workshops to help us improve future sessions and provide better learning experiences.",
};

const Feedback = () => {
  return <FeedbackClient />;
};

export default Feedback;
